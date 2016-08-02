
function addRawQty(item) { // tsp.
    qtyRaw = item.qty;
    // switch runs til break, so cup will hit Tbsp
    switch (item.qty) {
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
        "name": r1.name + " " + r2.name,
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
        curRatio = getRatiosInRecipe(recips[i]);
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
        ind = $.inArray(name, minRatios);
        if (ind > -1) {
            minRatios[name] = Math.min(cur.r, minRatios[name]);
            maxRatios[name] = Math.max(cur.r, maxRatios[name]);
        } else {
            minRatios[name] = cur.r;
            maxRatios[name] = cur.r;
        }
    }
    return {"min": minRatios, "max": maxRatios};
}

function outOfBoundsRatiosInRecipe(recipe, ranges) {
    ratios = getRatiosInRecipe(recipe);
    oobs = [];
    for (var i=0; i<ratios.length; i++) {
        mn = ranges.minRatios[ratios[i].name];
        mx = ranges.maxRatios[ratios[i].name];
        actual = ratios[i].r;
        if (actual < mn || actual > mx) {
            oobs.push({
                'ratio': ratios[i],
                'minVal': mn,
                'maxVal': mx
            });
        }
    }
    return oobs;
}
