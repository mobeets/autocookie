
var recipe1 = [
  {'name': 'flour', 'qty': 2, 'unit': 'cup'},
  {'name': 'sugar', 'qty': 1, 'unit': 'cup'},
  {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
];
var recipe2 = [
  {'name': 'flour', 'qty': 3, 'unit': 'cup'},
  {'name': 'sugar', 'qty': 1, 'unit': 'cup'},
  {'name': 'butter', 'qty': 1, 'unit': 'cup'},
];
var recipe3 = [
  {'name': 'flour', 'qty': 2, 'unit': 'cup'},
  {'name': 'sugar', 'qty': 0.5, 'unit': 'cup'},
  {'name': 'butter', 'qty': 0.25, 'unit': 'cup'},
];
var recipe4 = [
  {'name': 'flour', 'qty': 2, 'unit': 'cup'},
  {'name': 'sugar', 'qty': 0.5, 'unit': 'cup'},
  {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
];

var recipes = addAllRawQtys([recipe1, recipe2, recipe3, recipe4]);
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
      oobs = outOfBoundsRatiosInRecipe(recipe, ranges);
      msgs = oobsToMsgs(oobs);
      $('.errors').html(msgs.join('<br>'));
      console.log(oobs);
    }
  });
  val = $(selector).slider("value");
  $(valSelector).text(val);
}

function initIngredient(item, i) {
  ind = i.toString();
  var line = '<div class="col-lg-2"></div>' +
      '<div class="ingredient col-lg-8">' +
        '<div id="slider' + ind + '" class="slider"></div>' +
        '<div class="values">' +
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

function init() {
  initRecipe(recipe);
}

$(document).ready(init);
