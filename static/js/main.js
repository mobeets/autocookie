
var recipes = [];
for (var i=0; i<allRecipes.length; i++) {
  recipes.push(allRecipes[i].ingredients);
}

var recipes = addAllRawQtys(recipes);
var ranges = allRatioRanges(recipes);
var recipe = recipes[0];

function initSlider(selector, valSelector, initVal, itemName, itemIndex) {
  $(selector).slider({
    value: initVal,
    min: 0,
    max: 200,
    step: 1,
    slide: function( event, ui ) {
      $(valSelector).text(ui.value);
      // update value in recipe
      recipe[itemIndex].qtyRaw = ui.value;
      checkOutOfBoundsIngrients(recipe, ranges);
      // oobs = outOfBoundsRatiosInRecipe(recipe, ranges);
      // msgs = oobsToMsgs(oobs, recipes.length);
      // $('.errors').html(msgs.join('<br>'));
      // oobsToColors(oobs);
    }
  });
  val = $(selector).slider("value");
  $(valSelector).text(val);
}

function initIngredient(item, i) {
  ind = i.toString();
  var line = 
      '<div class="col-lg-2"></div>' +
      '<div id="item-' + item.name + '" class="ingredient col-lg-4">' +
        '<div id="slider' + ind + '" class="slider"></div>' +
        '<div class="values">' +
          '<div class="glyphs"> </div>' + 
          '<span id="val' + ind + '" class="amount"></span>' + 
          ' <span class="unit">Tbsp</span>' + 
          ' <span class="item">' + item.name + '</span>' + 
        '</div>' + 
      '</div>';
  $('.ingredients').append(line);
  initSlider('#slider' + ind, '#val' + ind, item.qtyRaw, item.name, i);
}
function initRecipe(recipe) {
  for (var i=0; i<recipe.length; i++) {
    initIngredient(recipe[i], i);
  }
}

function selectPreset(event) {
  $('.ingredients').html('');
  curId = event.target.id;
  initRecipe(recipes[curId.split('recipe-')[1]]);
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
  initRecipe(recipe);
  $('.recipe-preset').click(selectPreset);
}

$(document).ready(init);
