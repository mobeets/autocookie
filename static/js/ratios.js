
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

function formatMeasurement(value, unit) {
    if (unit.length > 0) {
        switch (unit) {
            case 'cup':
                value /= 16;
            case 'Tbsp':
                value /= 3;
        }
    }
    return valueToFractionalString(value);
}

function addRawQty(item) { // tsp.
    qtyRaw = item.qty;
    // switch runs til break, so cup will hit Tbsp
    switch (item.unit) {
        case 'cup':
            qtyRaw *= 16;
        case 'Tbsp':
            qtyRaw *= 3;
    }
    return qtyRaw;
}

function addRawQtys(recipe) {
    for (var i=0; i<recipe.length; i++) {
        recipe[i].qtyRaw = addRawQty(recipe[i]);
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
        for (var j=0; j<i; j++) {
            ratios.push(makeRatio(recipe[i], recipe[j]));
        }
    }
    return ratios;
}

function getAllRatios(recipes) {
    var allRatios = [];
    for (var i=0; i<recipes.length; i++) {
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
    console.log(food.recipes);
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

// function allRatioRanges0(recipes) {
//     allRatios = getAllRatios(recipes);
//     minRatios = [];
//     maxRatios = [];
//     for (var i=0; i<allRatios.length; i++) {
//         cur = allRatios[i];
//         name = cur.name;
//         if (name in minRatios) {
//             minRatios[name] = Math.min(cur.r, minRatios[name]);
//             maxRatios[name] = Math.max(cur.r, maxRatios[name]);
//         } else {
//             minRatios[name] = cur.r;
//             maxRatios[name] = cur.r;
//         }
//     }
//     console.log(minRatios);
//     console.log(maxRatios);
//     return {"min": minRatios, "max": maxRatios};
// }

function allRatioRanges(recipes) {
    allRatios = getAllRatios(recipes);
    minRatios = [];
    maxRatios = [];
    for (var i=0; i<allRatios.length; i++) {
        cur = allRatios[i];
        name = cur.name;
        if (name in minRatios) {
            minRatios[name].push(cur.r);
            maxRatios[name].push(cur.r);
        } else {
            minRatios[name] = [cur.r];
            maxRatios[name] = [cur.r];
        }
    }
    ones = findSingleIngreds(recipes);
    return {"min": minRatios, "max": maxRatios, "ignores": ones};
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

function getAllowedRangesInRecipe(recipe, ranges) {
    ratios = getRatiosInRecipe(recipe);
    ingreds = getIngredsInRecipe(recipe);
    uningreds = getDeselectedIngredients();
    allMins = [];
    allMaxs = [];
    for (var i=0; i<ratios.length; i++) {
        aNm = ratios[i].a;
        bNm = ratios[i].b;

        aVal = recipe[$.inArray(aNm, ingreds)].qtyRaw;
        bVal = recipe[$.inArray(bNm, ingreds)].qtyRaw;

        mnRatios = ranges.min[ratios[i].name];
        mxRatios = ranges.max[ratios[i].name];
        mnRatio = getMinOfArray(mnRatios);
        mxRatio = getMaxOfArray(mxRatios);

        if (!(aNm in allMins)) {
            allMins[aNm] = [];
            allMaxs[aNm] = [];
        }
        if (!(bNm in allMins)) {
            allMins[bNm] = [];
            allMaxs[bNm] = [];
        }

        aMin = mnRatio*bVal;
        aMax = mxRatio*bVal;
        bMax = aVal/mnRatio;
        bMin = aVal/mxRatio;

        // console.log([aNm, bNm]);

        if ($.inArray(aNm, uningreds) === -1 && $.inArray(bNm, uningreds) === -1) {
            allMins[aNm].push(aMin);
            allMaxs[aNm].push(aMax);
            allMins[bNm].push(bMin);
            allMaxs[bNm].push(bMax);
        }
    }
    
    validRanges = [];
    for (var i=0; i<ingreds.length; i++) {
        mns = allMins[ingreds[i]];
        mxs = allMaxs[ingreds[i]];
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
        // console.log([ingreds[i], mns, mxs]);
        validRanges[ingreds[i]] = [mn, mx];
    }
    // console.log(validRanges);
    return validRanges;
}

function markOutOfBoundsIngredients(recipe, validRanges) {
    ingreds = getIngredsInRecipe(recipe);
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
            glyph = '<span class="glyphicon glyphicon-' + glyphId + '" aria-hidden="true"></span>';
        } else {
            glyph = '';
        }
        // console.log([nm, mn, mx, glyphId, glyph]);
        $('#item-' + nm.replace(" ", "-") + ' .glyphs').html(glyph);
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
    setDeselecteds(ranges);
    validRanges = getAllowedRangesInRecipe(recipe, ranges);
    // writeRanges(recipe, validRanges);
    markOutOfBoundsIngredients(recipe, validRanges);
    setProgressBars(recipe, validRanges);
    $('#output').html('');
}
