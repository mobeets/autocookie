
var recipes = [];
for (var i=0; i<allRecipes.length; i++) {
  recipes.push(allRecipes[i].ingredients);
}
var recipes = addAllRawQtys(recipes);
var ranges = allRatioRanges(recipes);

var recipe = recipes[0];
var maxValDefault = 5*16*3;

function getMaxVal(itemName) {
  maxVal = maxValDefault;
  rng = defaultRanges.filter(function (item) { return item.name === itemName; });
  if (rng.length > 0) {
    maxVal = rng[0].maxQty;
  }
  return maxVal;
}

function valToPercent(val, maxVal) {
  valPct = 100;
  if (val < 0) {
    valPct = 0;
  } else if (val <= maxVal) {
    valPct = (100*val/maxVal);
  }
  return valPct;
}

function setProgressBar(item, startVal, endVal) {
  bar = $('div[id^="item-' + item.name + '"] .progress');
  maxVal = getMaxVal(item.name);
  pctStart = valToPercent(startVal, maxVal);
  pctEnd = valToPercent(endVal, maxVal);
  pctEnd = Math.max(0, pctEnd - pctStart);

  bar.children('.progress-bar-start').css('width', pctStart.toString() + '%');
  bar.children('.progress-bar-filled').css('width', pctEnd.toString() + '%');
}

function setProgressBars(recipe, validRanges) {
    for (var i=0; i<recipe.length; i++) {
        nm = recipe[i].name;
        setProgressBar(recipe[i], validRanges[nm][0], validRanges[nm][1]);
    }
}

function initSlider(selector, valSelector, initVal, itemName, itemIndex) {
  maxVal = getMaxVal(itemName);
  $(selector).slider({
    value: initVal,
    min: 0,
    max: maxVal,
    step: 1,
    slide: function( event, ui ) {
      $(valSelector).text(ui.value);
      // update value in recipe
      recipe[itemIndex].qtyRaw = ui.value;
      checkOutOfBoundsIngredients(recipe, ranges);
    }
  });
  val = $(selector).slider("value");
  $(valSelector).text(val);
}

function initProgressBar() {
  progBar = `
    <div class="progress">
      <div class="progress-bar progress-bar-empty progress-bar-start" role="progressbar" style="width:0%"></div>
      <div class="progress-bar progress-bar-filled" role="progressbar" style="width:0%">
      </div>
      <div class="progress-bar progress-bar-empty progress-bar-end" role="progressbar" style="width:0%"></div>
    </div>`;
  return progBar;
}

function initIngredient(item, i) {
  ind = i.toString();
  var line = 
      '<div class="col-lg-2"></div>' +
      '<div id="item-' + item.name + '" class="ingredient col-lg-4">' +
        initProgressBar() + 
        '<div id="slider' + ind + '" class="slider"></div>' +
        '<div class="values">' +
          '<div class="glyphs"> </div>' + 
          '<span id="val' + ind + '" class="amount"></span>' + 
          ' <span class="unit">tsp</span>' + 
          ' <span class="item">' + item.name + '</span>' + 
        '</div>' + 
      '</div>';
  $('.ingredients').append(line);
  initSlider('#slider' + ind, '#val' + ind, item.qtyRaw, item.name, i);
}
function initRecipe(recipe, ranges) {  
  for (var i=0; i<recipe.length; i++) {
    initIngredient(recipe[i], i);
  }

  validRanges = getAllowedRangesInRecipe(recipe, ranges);
  setProgressBars(recipe, validRanges);
}

function selectPreset(event) {
  $('.ingredients').html('');
  curId = event.target.id;
  initRecipe(recipes[curId.split('recipe-')[1]], ranges);
}

function initPresets(recipes) {
  for (var i=0; i<recipes.length; i++) {
    btn = '<button id=recipe-' + i.toString() + ' type="button" class="btn btn-default recipe-preset">' + i.toString() + '</button>';
    $('.recipe-presets').append(btn);
  }
}

function init() {
  // todo: handle ingredients in recipes
  
  console.log(ranges);
  initPresets(recipes);
  initRecipe(recipe, ranges);
  $('.recipe-preset').click(selectPreset);
}

$(document).ready(init);
