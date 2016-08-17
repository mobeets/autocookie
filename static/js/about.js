
var curRecipes = [];
var ranges;
var curRecipe;
var curFood;
var curFoodInd;
var maxValDefault = 5*16*3;
var stepSizeDefault = 1; // tsp
var epsilon = 0.0001;

function writeRecipeDiff(r1, r2) {
  is1 = getIngredsInRecipe(r1);
  is2 = getIngredsInRecipe(r2);
  ingreds = getUnique(is1.concat(is2));
  var msgs = [];
  var decs = [];
  var incs = [];
  var adds = [];
  var rms = [];

  for (var i=0; i<ingreds.length; i++) {
      var nm = ingreds[i];
      var ind1 = $.inArray(nm, is1);
      var ind2 = $.inArray(nm, is2);
      var v1 = 0; var v2 = 0;
      if (ind1 > -1) {
        var v1 = r1[ind1].qtyRaw;
        var s1 = formatMeasurement(r1[ind1].qtyRaw, r1[ind1].unit) + ' ' + r1[ind1].unit + ' ' + nm;
      }
      if (ind2 > -1) {
        var v2 = r2[ind2].qtyRaw;
        var s2 = formatMeasurement(r2[ind2].qtyRaw, r2[ind2].unit) + ' ' + r2[ind2].unit + ' ' + nm;
      }

      if (ind1 === -1) {
        adds.push(s2);
        continue;
      }
      if (ind2 === -1) {
        rms.push(s1);
        continue;
      }

      var valChange = r2[ind2].qtyRaw - r1[ind1].qtyRaw;
      if (valChange < 0) {
        var changeVal = formatMeasurement(-valChange, r2[ind2].unit);
        msg = "+" + changeVal + " " + r2[ind2].unit + " " + nm;
        incs.push(msg);
      } else if (valChange > 0) {
        var changeVal = formatMeasurement(valChange, r2[ind2].unit);
        msg = "-" + changeVal + " " + r2[ind2].unit + " " + nm;
        decs.push(msg);
      }
  }

  if (incs.length > 0) {
    var incmsgs = "Added: " + incs.join(", ");
    msgs.push(incmsgs);
  }
  if (decs.length > 0) {
    var decmsgs = "Removed: " + decs.join(", ");
    msgs.push(decmsgs);
  }
  if (adds.length > 0) {
    var added = "Added entirely: " + adds.join(", ");
    msgs.push(added);
  }
  if (rms.length > 0) {
    var removed = "Removed entirely: " + rms.join(", ");
    msgs.push(removed);
  }
  return msgs.join("<br>");
}

function prepRecipeData(newRecipes) {
  curRecipes = [];
  for (var i=0; i<newRecipes.length; i++) {
    curRecipes.push(newRecipes[i].ingredients);
  }
  curRecipes = addAllRawQtys(curRecipes);
  ranges = allRatioRanges(curRecipes);
}

function allRecipeDists(recipes, food) {
  var ds = [];
  for (var i=0; i<recipes.length; i++) {
    ds.push('<h4><a href="' + food.recipes[i].url + '">Recipe #' + i.toString() + "</a></h4>");
    var minVal = 10000; var minInd = 0;
    for (var j=0; j<recipes.length; j++) {
      if (i === j) { continue; }
      dst = recipeDiff(recipes[i], recipes[j]);
      if (dst < minVal) { minInd = j; minVal = dst; }
    }
    var msg = 'Most similar recipe: <a href="' + food.recipes[minInd].url + '">Recipe #' + minInd.toString() + "</a><br>";
    msg += writeRecipeDiff(recipes[i], recipes[minInd])
    msg += "<hr>";
    ds.push(msg);
  }
  return ds;
}

function init() {
  food = allRecipes[5];
  prepRecipeData(food.recipes);
  dsts = allRecipeDists(curRecipes, food);
  console.log(curRecipes);
  $('#recipes').html(dsts.join("<br>"));
}

$(document).ready(init);
