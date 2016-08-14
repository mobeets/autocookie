
function nearestMultiple(number, numerator, denominator) {
    // rounds to nearest numerator/denominator
    // e.g., nearestMultiple(26.746346081599476,1,16) == 26.75
    frac = denominator/numerator;
    lower = Math.floor(frac * number) / frac;
    upper = Math.ceil(frac * number) / frac;
    if (Math.abs(number - lower) < Math.abs(number - upper)) {
        return lower;
    } else {
        return upper;
    }
}

function valueToFractionalString(value) {
    // requires fraction-0.3.js
    roundedValue = nearestMultiple(value, 1, 16);
    return (new Fraction(roundedValue)).toString();
}

function rawQtyToQty(value, unit) {
    if (unit.length > 0) {
        switch (unit) {
            case 'cup':
                value /= 16;
            case 'Tbsp':
                value /= 3;
        }
    }
    return value;
}

function formatMeasurement(value, unit) {
    return valueToFractionalString(rawQtyToQty(value, unit));
}

function qtyToRawQty(value, unit) { // tsp.
    qtyRaw = value;
    // switch runs til break, so cup will hit Tbsp
    switch (unit) {
        case 'cup':
            qtyRaw *= 16;
        case 'Tbsp':
            qtyRaw *= 3;
    }
    return qtyRaw;
}

function addRawQtys(recipe) {
    for (var i=0; i<recipe.length; i++) {
        recipe[i].qtyRaw = qtyToRawQty(recipe[i].qty, recipe[i].unit);
    }
    return recipe;
}

function addAllRawQtys(recipes) {
    for (var i=0; i<recipes.length; i++) {
        recipes[i] = addRawQtys(recipes[i]);
    }
    return recipes;
}

function makeRatio(r1, r2) {
    // alphabetize
    if (r1.name > r2.name) {
        r3 = r1; r1 = r2; r2 = r3;
    }
    // console.log([r1.name, r2.name, r1.qtyRaw/r2.qtyRaw]);
    return {
        "a": r1.name,
        "b": r2.name,
        "name": r1.name + ":" + r2.name,
        "r": r1.qtyRaw/r2.qtyRaw
    }
}

function getRatiosInRecipe(recipe) {
    var ratios = [];
    for (var i=0; i<recipe.length; i++) {        
        for (var j=i+1; j<recipe.length; j++) {
            ratios.push(makeRatio(recipe[i], recipe[j]));
        }
    }
    return ratios;
}

function getAllRatios(recipes) {
    var allRatios = [];
    for (var i=0; i<recipes.length; i++) {
        // console.log("Recipe " + (i+1).toString());
        curRatio = getRatiosInRecipe(recipes[i]);
        allRatios = allRatios.concat(curRatio);
    }
    return allRatios;
}

function exportRecipe() {
    var lines = [];
    lines.push('<br><h4>' + curFood.name + '</h4>');
    for (var i=0; i< curRecipe.length; i++) {
        item = curRecipe[i];
        qty = formatMeasurement(item.qtyRaw, item.unit);
        msg = qty + ' ' + item.unit + ' ' + item.name;
        lines.push(msg);
    }
    urls = [];
    for (var i=0; i< food.recipes.length; i++) {
        msg = '<a href="' + food.recipes[i].url + '">' + (i+1).toString() + '</a>';
        urls.push(msg);
    }
    lines.push('<br>For cooking instructions, see these recipes for guidelines: ' + urls.join(', '));
    // temp = 350; mins = 8;
    // lines.push('<br>Bake at ' + temp.toString() + 'F for ' + mins.toString() + ' minutes');
    return lines.join('<br>');
}

function findSingleIngreds(recipes) {
    var counts = [];
    for (var i=0; i<recipes.length; i++) {
        for (var j=0; j<recipes[i].length; j++) {
            nm = recipes[i][j].name;
            if (nm in counts) {
                counts[nm] += 1;
            } else {
                counts[nm] = 1;
            }
        }
    }
    var ones = [];
    for (var ingred in counts) {
        if (counts[ingred] == 1) {
            ones.push(ingred);
        }
    }
    return ones;
}

function findIngredMaxes(recipes) {
    var maxes = [];
    for (var i=0; i<recipes.length; i++) {
        for (var j=0; j<recipes[i].length; j++) {
            nm = recipes[i][j].name;
            if (!(nm in maxes)) {
                maxes[nm] = 0;
            }
            maxes[nm] = Math.max(recipes[i][j].qtyRaw, maxes[nm]);
        }
    }
    return maxes;
}

function allRatioRanges(recipes) {
    allRatios = getAllRatios(recipes);
    var curRatios = [];
    for (var i=0; i<allRatios.length; i++) {
        cur = allRatios[i];
        name = cur.name;
        if (name in curRatios) {
            curRatios[name].push(cur.r);
        } else {
            curRatios[name] = [cur.r];
        }
    }
    ones = findSingleIngreds(recipes);
    maxes = findIngredMaxes(recipes);
    // console.log(curRatios);
    return {"ratios": curRatios, "ignores": ones, "maxValsTsp": maxes};
}

function getIngredsInRecipe(recipe) {
    ingreds = [];
    for (var i=0; i<recipe.length; i++) {
        ingreds.push(recipe[i].name);
    }
    return ingreds;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function setDeselecteds(ranges) {
    // deselect ingreds that only occur once across all recipes
    for (var i=0; i<ranges.ignores.length; i++) {
        nm = ranges.ignores[i].replace(" ", "-");
        $('#item-' + nm + ' .progress').addClass("deselected");
    }
}

function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}

function getAllowedRangesInRecipe(recipe, ranges) {
    ratios = getRatiosInRecipe(recipe);
    ingreds = getIngredsInRecipe(recipe);
    uningreds = getDeselectedIngredients();
    allMins = [];
    allMaxs = [];
    // allMinNms = [];
    // allMinRts = [];
    // allMaxRts = [];
    // allVals = [];
    // console.log(ratios);
    for (var i=0; i<ratios.length; i++) {
        var aNm = ratios[i].a;
        var bNm = ratios[i].b;

        var aVal = recipe[$.inArray(aNm, ingreds)].qtyRaw;
        var bVal = recipe[$.inArray(bNm, ingreds)].qtyRaw;

        var curRatios = ranges.ratios[ratios[i].name];
        var mnRatio = getMinOfArray(curRatios);
        var mxRatio = getMaxOfArray(curRatios);

        if (!(aNm in allMins)) {
            allMins[aNm] = [];
            allMaxs[aNm] = [];
        }
        if (!(bNm in allMins)) {
            allMins[bNm] = [];
            allMaxs[bNm] = [];
        }

        var aMin = mnRatio*bVal;
        var aMax = mxRatio*bVal;
        var bMin = aVal/mxRatio;
        var bMax = aVal/mnRatio;

        // console.log([aNm, bNm]);

        if ($.inArray(aNm, uningreds) === -1 && $.inArray(bNm, uningreds) === -1) {
            if (!isNaN(aMin)) {
                allMins[aNm].push(aMin);
            }
            if (!isNaN(aMax)) {
                allMaxs[aNm].push(aMax);
            }
            if (!isNaN(bMin)) {
                allMins[bNm].push(bMin);
            }
            if (!isNaN(bMax)) {
                allMaxs[bNm].push(bMax);
            }
        }
    }
    
    validRanges = [];
    for (var i=0; i<ingreds.length; i++) {
        var mns = allMins[ingreds[i]];
        var mxs = allMaxs[ingreds[i]];
        if (mns.length === 0) { 
            mn = 0; 
        } else {
            mn = getMaxOfArray(mns);
        }
        if (mxs.length === 0) { 
            mx = Number.POSITIVE_INFINITY;
        } else {
            mx = getMinOfArray(mxs);
        }
        // console.log([ingreds[i], zip([allMinNms[ingreds[i]], allVals[ingreds[i]], allMinRts[ingreds[i]], allMaxRts[ingreds[i]], mns, mxs])]);
        validRanges[ingreds[i]] = [mn, mx];
    }
    // console.log(validRanges);
    return validRanges;
}

function markOutOfBoundsIngredients(recipe, validRanges) {
    ingreds = getIngredsInRecipe(recipe);
    allValid = true;
    for (var i=0; i<ingreds.length; i++) {
        nm = ingreds[i];
        val = recipe[$.inArray(nm, ingreds)].qtyRaw;
        mn = validRanges[nm][0];
        mx = validRanges[nm][1];
        if (mn > mx+epsilon) {
            glyphId = 'ban-circle';
        } else if (val < mn-epsilon) {
            glyphId = 'arrow-up';
        } else if (val > mx+epsilon) {
            glyphId = 'arrow-down';
        } else {
            glyphId = '';
        }
        if (glyphId.length > 0) {
            allValid = false;
            glyph = '<span class="glyphicon glyphicon-' + glyphId + '" aria-hidden="true"></span>';
        } else {
            glyph = '';
        }
        // console.log([nm, mn, mx, glyphId, glyph]);
        $('#item-' + nm.replace(" ", "-") + ' .glyphs').html(glyph);
    }
    if (!allValid) { console.log("invalid"); }
    return allValid;
}

function randperm(maxValue){
    // first generate number sequence
    var permArray = new Array(maxValue);
    for(var i = 0; i < maxValue; i++){
        permArray[i] = i;
    }
    // draw out of the number sequence
    for (var i = (maxValue - 1); i >= 0; --i){
        var randPos = Math.floor(i * Math.random());
        var tmpStore = permArray[i];
        permArray[i] = permArray[randPos];
        permArray[randPos] = tmpStore;
    }
    return permArray;
}

function getRandomNearStep(min, max, item) {
    newMin = rawQtyToQty(min, item.unit);
    newMax = rawQtyToQty(max, item.unit);
    samp = Math.random() * (newMax - newMin) + newMin;

    // need to know units for this to work better
    var tries = [1, 2, 4, 8];
    var tryInds = randperm(tries.length);
    roundedValue = nearestMultiple(samp, 1, tries[tryInds[0]]);
    i = 0;
    while ((roundedValue <= newMin || roundedValue >= newMax) && i < tries.length-1) {
        i += 1;
        roundedValue = nearestMultiple(samp, 1, tries[tryInds[i]]);
    }
    if (roundedValue < newMin || roundedValue > newMax) {
        roundedValue = samp;
    }
    finalVal = qtyToRawQty(roundedValue, item.unit);
    // console.log([item.name, item.unit, min, max, newMin, newMax, samp, roundedValue, finalVal, tries[tryInds[i]]]);
    return finalVal;
}

function autoRecipe() {
    recipe = curRecipe;
    var ingreds = getIngredsInRecipe(recipe);

    var maxTries = 10;
    var curTry = 0;
    while (curTry < maxTries && !allValid) {
        var allValid = true;
        curTry += 1;
        console.log("Autorecipe-" + curTry.toString());
        var inds = randperm(ingreds.length);
        for (var i=0; i<inds.length; i++) {
            var validRanges = getAllowedRangesInRecipe(recipe, ranges);
            var curInd = inds[i];
            var item = recipe[curInd];
            var nm = item.name;
            var curVal = getRandomNearStep(validRanges[nm][0], validRanges[nm][1], item);

            // set trigger and update value in this really janky way
            var ind = curInd.toString();
            var slideSel = $('#slider' + ind);
            slideSel.slider("value", curVal);
            allValid = updateSlider(curRecipe, curInd, slideSel.slider("value"), '#val'+ind, '#unit'+ind, ranges);

            if (!allValid) {
                break;
            }
        }
    }

}

function writeRanges(recipe, validRanges) {
    msgs = [];
    ingreds = getIngredsInRecipe(recipe);
    for (var i=0; i<ingreds.length; i++) {
        nm = ingreds[i];
        val = recipe[$.inArray(nm, ingreds)].qtyRaw;
        mn = validRanges[nm][0];
        mx = validRanges[nm][1];
        msg = [nm, val, mn, mx].join(', ');
        msgs.push(msg);
    }
    $('.errors').html(msgs.join('<br>'));
}

function checkOutOfBoundsIngredients(recipe, ranges) {
    // console.log(recipe);
    setDeselecteds(ranges);
    validRanges = getAllowedRangesInRecipe(recipe, ranges);
    // writeRanges(recipe, validRanges);
    allValid = markOutOfBoundsIngredients(recipe, validRanges);
    setProgressBars(recipe, validRanges);
    $('#output').html('');
    return allValid;
}
