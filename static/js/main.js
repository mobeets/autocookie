
var curRecipes = [];
var ranges;
var curRecipe;
var curFood;
var maxValDefault = 20;
var stepSizeDefault = 1; // tsp
var epsilon = 0.0001;

function copyForModifying(recipe) {
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
  bar = $('div[id^="item-' + (item.name).replace(" ", "-") + '"] .progress');
  maxVal = getMaxVal(item.name);
  pctStart = valToPercent(startVal, maxVal);
  pctEnd = valToPercent(endVal, maxVal);
  pctEnd = Math.max(0, pctEnd - pctStart);
  if (endVal - startVal < 0.2 && endVal >= startVal-epsilon) {
    // add padding for otherwise-invisible percentages
    pctEnd += 1;
  }

  if (endVal >= startVal-epsilon) {
    bar.children('.progress-bar-start').css('width', pctStart.toString() + '%');
    bar.children('.progress-bar-filled').css('width', pctEnd.toString() + '%');
  } else {
    // makes progress bar fully gray
    bar.children('.progress-bar-start').css('width', '0%');
    bar.children('.progress-bar-filled').css('width', '0%');
  }
}

function setProgressBars(recipe, validRanges) {
  for (var i=0; i<recipe.length; i++) {
    nm = recipe[i].name;
    setProgressBar(recipe[i], validRanges[nm][0], validRanges[nm][1]);
  }
}

function initProgressBar() {
  return `
    <div class="progress">
      <div class="progress-bar progress-bar-empty progress-bar-start" role="progressbar" style="width:0%"></div>
      <div class="progress-bar progress-bar-filled" role="progressbar" style="width:0%">
      </div>
      <div class="progress-bar progress-bar-empty progress-bar-end" role="progressbar" style="width:0%"></div>
    </div>`;
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
      // '<div class="col-lg-2"></div>' +
      '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 ingred-container">' +
      '<div id="item-' + (item.name).replace(" ", "-") + '" class="ingredient">' +
        initProgressBar() + 
        '<div id="slider' + ind + '" class="slider"></div>' +
        '<div class="values">' +
          '<div class="glyphs"> </div>' + 
          '<span id="val' + ind + '" class="amount"></span>' + 
          ' <span id="unit' + ind + '" class="unit">tsp</span>' + 
          ' <span class="item">' + item.name + '</span>' + 
        '</div>' + 
      '</div></div>';
  $('.ingredients').append(line);
  initSlider('#slider'+ind, '#val'+ind, '#unit'+ind, item, i);
}
function initRecipe(recipeInd, ranges) {
  curRecipe = copyForModifying(curRecipes[recipeInd]);
  $('.ingredients').html('');
  for (var i=0; i<curRecipe.length; i++) {
    initIngredient(curRecipe[i], i);
  }
  checkOutOfBoundsIngredients(curRecipe, ranges);
  $('.progress').click(toggleIngredient);
}

function selectRecipePreset(event) {
  $('.recipe-preset').removeClass('active');
  $(this).addClass('active');
  curId = $(this)[0].id;
  ind = curId.split('recipe-')[1]-1;
  initRecipe(ind, ranges);
}

function initRecipePresets(recipes) {
  $('.recipe-presets').html('');
  for (var i=0; i<recipes.length; i++) {
    ind = (i+1).toString();
    btn = '<li id=recipe-' + ind + ' class="recipe-preset"><span>' + ind + '</span></li>';
    $('.recipe-presets').append(btn);
  }
  $('.recipe-preset').click(selectRecipePreset);
}

function initFood(ind) {
  food = allRecipes[ind];
  $('.food-name').text(food.name);
  prepRecipeData(food.recipes);
  initRecipePresets(curRecipes);
  $('#recipe-1').click();
}

function selectFood(event) {
  $('.food-preset').removeClass('active');
  $(this).addClass('active');
  curId = $(this)[0].id;
  ind = curId.split('food-')[1]-1;
  initFood(ind);  
}

function initFoodPresets() {
  for (var i=0; i<allRecipes.length; i++) {
    ind = (i+1).toString();
    btn = '<li id=food-' + ind + ' class="food-preset"><a href="#">' + allRecipes[i].name + '</a></li>';
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

function prepRecipeData(newRecipes) {
  curRecipes = [];
  for (var i=0; i<newRecipes.length; i++) {
    curRecipes.push(newRecipes[i].ingredients);
  }
  curRecipes = addAllRawQtys(curRecipes);
  ranges = allRatioRanges(curRecipes);
}

function init() {
  $('.help-info').click(function(){$('.more-info').toggle();});
  initFoodPresets();
  $('#food-1').click();
}

$(document).ready(init);
