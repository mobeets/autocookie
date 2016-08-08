
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

function allRatioRanges(recipes) {
    allRatios = getAllRatios(recipes);
    minRatios = [];
    maxRatios = [];
    for (var i=0; i<allRatios.length; i++) {
        cur = allRatios[i];
        name = cur.name;
        if (name in minRatios) {
            minRatios[name] = Math.min(cur.r, minRatios[name]);
            maxRatios[name] = Math.max(cur.r, maxRatios[name]);
        } else {
            minRatios[name] = cur.r;
            maxRatios[name] = cur.r;
        }
    }
    console.log(minRatios);
    console.log(maxRatios);
    return {"min": minRatios, "max": maxRatios};
}

function oobsToMsgs(oobs, nRs) {
    msgs = [];
    for (var i=0; i<oobs.length; i++) {
        oob = oobs[i];
        msg = 'Warning! Your ' + oob.ratio.name + ' ratio of ' + oob.ratio.r.toFixed(2) + ' should be ';
        if (oob.ratio.r < oob.minVal) {
            msg += ' at least ' + oob.minVal.toFixed(2);
        } else {
            msg += ' at most ' + oob.maxVal.toFixed(2);
        }
        msg += ' (according to ' + nRs.toString() + ' recipes).';
        msgs.push(msg);
    }
    return msgs;
}

function getIngredsInRecipe(recipe) {
    ingreds = [];
    for (var i=0; i<recipe.length; i++) {
        ingreds.push(recipe[i].name);
    }
    return ingreds;
}

function getAllowedRangesInRecipe(recipe, ranges) {
    ratios = getRatiosInRecipe(recipe);
    ingreds = getIngredsInRecipe(recipe);
    allMins = [];
    allMaxs = [];
    for (var i=0; i<ratios.length; i++) {
        aNm = ratios[i].a;
        bNm = ratios[i].b;

        mnRatio = ranges.min[ratios[i].name];
        mxRatio = ranges.max[ratios[i].name];
        aVal = recipe[$.inArray(aNm, ingreds)].qtyRaw;
        bVal = recipe[$.inArray(bNm, ingreds)].qtyRaw;

        if ($.inArray(aNm, allMins) === -1) {
            allMins[aNm] = [];
            allMaxs[aNm] = [];
        }
        if ($.inArray(bNm, allMins) === -1) {
            allMins[bNm] = [];
            allMaxs[bNm] = [];
        }

        aMin = mnRatio*bVal;
        aMax = mxRatio*bVal;
        bMax = aVal/mnRatio;
        bMin = aVal/mxRatio;

        allMins[aNm].push(aMin);
        allMaxs[aNm].push(aMax);
        allMins[bNm].push(bMin);
        allMaxs[bNm].push(bMax);
    }

    validRanges = [];
    for (var i=0; i<ingreds.length; i++) {
        mns = allMins[ingreds[i]];
        mxs = allMaxs[ingreds[i]];
        mn = Math.max(mns);
        mx = Math.min(mxs);
        // console.log([ingreds[i], mn, mx]);
        // console.log([mns]);
        // console.log([mxs]);
        // console.log('-------');
        validRanges[ingreds[i]] = [mn, mx];
    }
    console.log(validRanges);
    return validRanges;
}

function markOutOfBoundsIngredients(recipe, validRanges) {
    ingreds = getIngredsInRecipe(recipe);
    for (var i=0; i<ingreds.length; i++) {
        nm = ingreds[i];
        val = recipe[$.inArray(nm, ingreds)].qtyRaw;
        mn = validRanges[nm][0];
        mx = validRanges[nm][1];
        if (mn > mx) {
            glyphId = 'ban-circle';
        } else if (val < mn) {
            glyphId = 'arrow-up';
        } else if (val > mx) {
            glyphId = 'arrow-down';
        } else {
            glyphId = '';
        }
        // console.log([nm, val, mn, mx, glyphId]);
        if (glyphId.length > 0) {
            glyph = '<span class="glyphicon glyphicon-' + glyphId + '" aria-hidden="true"></span>';
        } else { glyph = ''; }
        $('#item-' + nm + ' .glyphs').html(glyph);
    }
}

function checkOutOfBoundsIngrients(recipe, ranges) {
    validRanges = getAllowedRangesInRecipe(recipe, ranges);
    markOutOfBoundsIngredients(recipe, validRanges);
}

// function outOfBoundsRatiosInRecipe(recipe, ranges) {

//     ratios = getRatiosInRecipe(recipe);
//     oobs = [];
//     for (var i=0; i<ratios.length; i++) {
//         mn = ranges.min[ratios[i].name];
//         mx = ranges.max[ratios[i].name];
//         actual = ratios[i].r;
//         if (actual < mn || actual > mx) {
//             oobs.push({
//                 'ratio': ratios[i],
//                 'minVal': mn,
//                 'maxVal': mx
//             });
//         }
//     }
//     return oobs;
// }


// function oobsToColors(oobs) {
//   tooLow = [];
//   tooHigh = [];
//   for (var i=0; i<oobs.length; i++) {
//     oob = oobs[i];
//     nm1 = oob.ratio.a;
//     nm2 = oob.ratio.b;
//     if (oob.ratio.r < oob.minVal) {
//       nm3 = nm1; nm1 = nm2; nm2 = nm3;
//     }
//     tooHigh.push(nm1);
//     tooLow.push(nm2);
//   }

//   for (var i=0; i<recipe.length; i++) {
//     key = 'background';
//     val = 'none';
//     nm = recipe[i].name;
//     if ($.inArray(nm, tooLow) > -1 && $.inArray(nm, tooHigh) > -1) {
//       val = 'ban-circle';
//     } else if ($.inArray(nm, tooLow) > -1) {
//       val = 'arrow-up';
//     } else if ($.inArray(nm, tooHigh) > -1) {
//       val = 'arrow-down';
//     } else {
//       val = '';
//     }
//     if (val.length > 0) {
//       glyph = '<span class="glyphicon glyphicon-' + val + '" aria-hidden="true"></span>';
//     } else {
//       glyph = '';
//     }
//     $('#item-' + nm + ' .glyphs').html(glyph);
//     $('#item-' + nm).css(key, val);
//   }
  
// }
