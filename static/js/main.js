
var recipes = [];
for (var i=0; i<allRecipes.length; i++) {
  recipes.push(allRecipes[i].ingredients);
}
var recipes = addAllRawQtys(recipes);
var ranges = allRatioRanges(recipes);

var curRecipe = recipes[0];
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
  $(slideSel).slider({
    value: item.qtyRaw,
    min: 0,
    max: maxVal,
    step: 1,
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
function initRecipe(recipe, ranges) {  
  $('.ingredients').html('');
  for (var i=0; i<recipe.length; i++) {
    initIngredient(recipe[i], i);
  }
  checkOutOfBoundsIngredients(recipe, ranges);
  // setProgressBars(recipe, getAllowedRangesInRecipe(recipe, ranges));
}

function selectPreset(event) {
  curId = event.target.id;
  // need to make this the global recipe
  curRecipe = recipes[curId.split('recipe-')[1]-1];
  initRecipe(curRecipe, ranges);
}

function initPresets(recipes) {
  for (var i=0; i<recipes.length; i++) {
    btn = '<button id=recipe-' + (i+1).toString() + ' type="button" class="btn btn-default recipe-preset">' + (i+1).toString() + '</button>';
    $('.recipe-presets').append(btn);
  }
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
  // todo: handle ingredients in recipes
  
  initPresets(recipes);
  initRecipe(curRecipe, ranges);
  $('.recipe-preset').click(selectPreset);
  $('.progress').click(toggleIngredient);
  // checkOutOfBoundsIngredients(curRecipe, ranges);
}

$(document).ready(init);
