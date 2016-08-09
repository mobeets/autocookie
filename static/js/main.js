
var curRecipes = [];
for (var i=0; i<allRecipes.length; i++) {
  curRecipes.push(allRecipes[i].ingredients);
}
var curRecipes = addAllRawQtys(curRecipes);
var ranges = allRatioRanges(curRecipes);

var curRecipe;
var maxValDefault = 5*16*3;
var stepSizeDefault = 1; // tsp

function copyRecipeForModifying(recipe) {
  obj = $.extend(true, {}, recipe);
  vals = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        vals.push(obj[key]);
    }
  }
  return vals;
}

function getStepSize(itemUnit) {
  stepSize = stepSizeDefault;
  if (itemUnit.length > 0) {
    rng = defaultStepSizes.filter(function (item) {
      return item.unit === itemUnit;
    });
    if (rng.length > 0) {
      stepSize = rng[0].stepSizeTsp;
    }
  }
  return stepSize;
}
function getMaxVal(itemName) {
  maxVal = maxValDefault;
  rng = defaultRanges.filter(function (item) { 
    return item.name === itemName;
  });
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
  if (endVal - startVal < 0.2) {
    pctEnd += 1;
  }

  bar.children('.progress-bar-start').css('width', pctStart.toString() + '%');
  bar.children('.progress-bar-filled').css('width', pctEnd.toString() + '%');
}

function setProgressBars(recipe, validRanges) {
    for (var i=0; i<recipe.length; i++) {
        nm = recipe[i].name;
        setProgressBar(recipe[i], validRanges[nm][0], validRanges[nm][1]);
    }
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

function updateMeasurement(value, unit, valSel, unitSel) {
  value = formatMeasurement(value, unit);
  $(valSel).text(value);
  $(unitSel).text(unit);
}

function initSlider(slideSel, valSel, unitSel, item, itemIndex) {
  maxVal = getMaxVal(item.name);
  stepSize = getStepSize(item.unit);
  $(slideSel).slider({
    value: item.qtyRaw,
    min: 0,
    max: maxVal,
    step: stepSize,
    slide: function(event, ui) {
      updateMeasurement(ui.value, curRecipe[itemIndex].unit, valSel, unitSel);
      // update value in recipe
      curRecipe[itemIndex].qtyRaw = ui.value;
      checkOutOfBoundsIngredients(curRecipe, ranges);
    }
  });
  val = $(slideSel).slider("value");
  updateMeasurement(val, item.unit, valSel, unitSel);
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
          ' <span id="unit' + ind + '" class="unit">tsp</span>' + 
          ' <span class="item">' + item.name + '</span>' + 
        '</div>' + 
      '</div>';
  $('.ingredients').append(line);
  initSlider('#slider'+ind, '#val'+ind, '#unit'+ind, item, i);
}
function initRecipe(recipeInd, ranges) {
  curRecipe = copyRecipeForModifying(curRecipes[recipeInd]);
  $('.ingredients').html('');
  for (var i=0; i<curRecipe.length; i++) {
    initIngredient(curRecipe[i], i);
  }
  checkOutOfBoundsIngredients(curRecipe, ranges);
  $('.progress').click(toggleIngredient);
}

function selectPreset(event) {
  $('.recipe-preset').removeClass('active');
  $(this).addClass('active');
  curId = $(this)[0].id;
  ind = curId.split('recipe-')[1]-1;
  initRecipe(ind, ranges);
}

function initPresets(recipes) {
  for (var i=0; i<recipes.length; i++) {
    ind = (i+1).toString();
    btn = '<li id=recipe-' + ind + ' class="recipe-preset"><span>' + ind + '</span></li>';
    $('.recipe-presets').append(btn);
  }
  $('.recipe-preset').click(selectPreset);
}

function selectFood(event) {
  $('.food-preset').removeClass('food-selected');
  $(this).addClass('food-selected');
  curId = $(this)[0].id;
  ind = curId.split('food-')[1]-1;
  console.log([curId, ind]);
  // initFood(ind);
}

function initFoodPresets(foods) {
  for (var i=0; i<foods.length; i++) {
    ind = (i+1).toString();
    btn = '<button id=food-' + ind + ' type="button" class="btn btn-default food-preset">' + foods[i] + '</button>';
    $('.food-presets').append(btn);
  }
  $('.food-preset').click(selectFood);
}

function toggleIngredient() {
  $(this).toggleClass('deselected');
  checkOutOfBoundsIngredients(curRecipe, ranges);
}

function getDeselectedIngredients() {
  uningreds = [];
  objs = $('.deselected').parent().children('.values').children('.item').each(function () {
    uningreds.push($(this).text());
  });
  return uningreds;
}

function init() {
  initFoodPresets(allFoods);
  $('#food-1').click();
  initPresets(curRecipes);
  $('#recipe-1').click();
}

$(document).ready(init);
