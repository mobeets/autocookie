
var curRecipes = [];
var ranges;
var curRecipe;
var curFood;
var curFoodInd;
var maxValDefault = 5*16*3;
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
  if (itemName in ranges.maxValsTsp) {
    mx = ranges.maxValsTsp[itemName];
    return Math.max(3, 2*mx);
  }
  return maxValDefault;
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
  bar = $('div[id^="item-' + (item.name).replaceAll(" ", "-") + '"] .progress');
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

function updateSlider(curRecipe, itemInd, val, valSel, unitSel, ranges) {
  updateMeasurement(val, curRecipe[itemInd].unit, valSel, unitSel);
  var nmKey = curRecipe[itemInd].name.replaceAll(" ","-");
  $('#item-' + nmKey).removeClass("closed")
  $('#item-' + nmKey + ' .close').removeClass("rotate");
  curRecipe[itemInd].qtyRaw = val;
  return checkOutOfBoundsIngredients(curRecipe, ranges);
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
      updateSlider(curRecipe, itemIndex, ui.value, valSel, unitSel, ranges);
    }
  });
  // $(slideSel).slider("value", item.qtyRaw);
  val = $(slideSel).slider("value");
  // val = item.qtyRaw;
  // console.log([item.name, item.qtyRaw, val, maxVal, stepSize]);
  updateSlider(curRecipe, itemIndex, val, valSel, unitSel, ranges);
}

function initIngredient(item, i) {
  ind = i.toString();
  var line = 
      '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 ingred-container">' +
      '<div id="item-' + (item.name).replaceAll(" ", "-") + '" class="ingredient">' +
        initProgressBar() + 
        '<div id="slider' + ind + '" class="slider"></div>' +
        '<div class="values">' +
          '<div class="glyphs"> </div>' + 
          '<span id="val' + ind + '" class="amount"></span>' + 
          ' <span id="unit' + ind + '" class="unit">tsp</span>' + 
          ' <span class="item">' + item.name + '</span>' + 
          ' <span class="close">&#10006;</span>' + 
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

function initRecipePresets(n, i1) {
  var maxPresetCount = 5;
  var i2 = Math.min(i1-1+maxPresetCount, n);

  $('.recipe-presets').html('');

  var prevLink = '<span aria-hidden="true">&laquo;</span>';
  var prev = '<li id="prev-recipe">' + prevLink + '</li>';
  $('.recipe-presets').append(prev);

  for (var i=(i1-1); i<i2; i++) {
    ind = (i+1).toString();
    btn = '<li id=recipe-' + ind + ' class="recipe-preset"><span>' + ind + '</span></li>';
    $('.recipe-presets').append(btn);
  }

  var nextLink = '<span aria-hidden="true">&raquo;</span>';
  var next = '<li id="next-recipe">' + nextLink + '</li>';
  $('.recipe-presets').append(next);

  $('.recipe-preset').click(selectRecipePreset);
  if (i1 > 1) {
    $('#prev-recipe').click(function(){initRecipePresets(n,i1-maxPresetCount);});
  }
  if (i2 < n) {
    $('#next-recipe').click(function(){initRecipePresets(n,i1+maxPresetCount);});
  }
}

function initFood(ind) {
  food = allRecipes[ind-1];
  $('.food-name').text(food.name);
  prepRecipeData(food.recipes);
  initRecipePresets(curRecipes.length, 1);
  curFood = food;
  curFoodInd = ind;
  $('#recipe-1').click();
  autoRecipe();
  // autoRecipe(curRecipe, validRanges);
  $('.recipe-preset').removeClass('active');
}

function selectFood(event) {
  $('.food-preset').removeClass('active');
  $(this).addClass('active');
  curId = $(this)[0].id;
  ind = curId.split('food-')[1];
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
  var uningreds = [];
  for (var i=0; i<curRecipe.length; i++) {
    if (curRecipe[i].qtyRaw == 0) {
      var nmKey = curRecipe[i].name.replaceAll(" ","-");
      makeClosed(curRecipe[i].name, false);
    }
  }
  objs = $('.deselected').parent().children('.values').children('.item').each(function () {
    uningreds.push($(this).text());
  });
  objs = $('.closed').children('.values').children('.item').each(function () {
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

function addNewIngred() {
  var nm = $(this).text();
  var ex = findExemplar(nm, curRecipes);  
  var item = {'name': nm, 'qty': 0, 'qtyRaw': 0, 'unit': ex.unit};
  curRecipe.push(item);
  initIngredient(item, curRecipe.length-1);
  $('.progress').click(toggleIngredient);
}

function makeClosed(nm, rotateX) {
  // console.log(nm);
  var nmKey = nm.replaceAll(" ", "-");
  var itemSel = $('#item-' + nmKey);
  var closeSel = $('#item-' + nmKey + ' .close');
  if (!closeSel.hasClass("rotate")) {
    itemSel.addClass("closed");
    if (rotateX) {
      closeSel.addClass("rotate");
    }
  } else {
    itemSel.removeClass("closed");
    closeSel.removeClass("rotate");
  }
}

function removeIngred() {
  // console.log("REMOVING");
  var nm = $(this).prev().text();
  var nmKey = nm.replaceAll(" ", "-");
  for (var i=0; i<curRecipe.length; i++) {
    if (curRecipe[i].name === nm) {
      makeClosed(nm, true);
      break;
    }
  }
  checkOutOfBoundsIngredients(curRecipe, ranges);
}

function init() {
  $('.help-info').click(function(){$('.more-info').toggle();});
  initFoodPresets();
  $('#food-1').click();
  $('#export').click(exportRecipe);
  $('#randomize').click(autoRecipe);
  $('.close').click(removeIngred);
}

$(document).ready(init);
