
var recipe1 = [
  {'name': 'flour', 'qty': 2, 'unit': 'cups'},
  {'name': 'sugar', 'qty': 1, 'unit': 'cups'},
  {'name': 'butter', 'qty': 0.5, 'unit': 'cups'},
];
var recipe2 = [
  {'name': 'flour', 'qty': 3, 'unit': 'cups'},
  {'name': 'sugar', 'qty': 1, 'unit': 'cups'},
  {'name': 'butter', 'qty': 1, 'unit': 'cups'},
];
var recipe3 = [
  {'name': 'flour', 'qty': 2, 'unit': 'cups'},
  {'name': 'sugar', 'qty': 0.5, 'unit': 'cups'},
  {'name': 'butter', 'qty': 0.25, 'unit': 'cups'},
];
var recipe4 = [
  {'name': 'flour', 'qty': 2, 'unit': 'cups'},
  {'name': 'sugar', 'qty': 0.5, 'unit': 'cups'},
  {'name': 'butter', 'qty': 0.5, 'unit': 'cups'},
];

var recipes = addAllRawQtys([recipe1, recipe2, recipe3, recipe4]);

function initSlider(selector, valSelector, initVal) {
  $(selector).slider({
    value: initVal,
    min: 0,
    max: 50,
    step: 1,
    slide: function( event, ui ) {
      $(valSelector).text(ui.value);
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
  initSlider('#slider' + ind, '#val' + ind, item.qtyRaw);
}
function initRecipe(recipe) {
  for (var i=0; i<recipe.length; i++) {
    initIngredient(recipe[i], i);
  }
}

function init() {
  initRecipe(recipes[0]);
}

$(document).ready(init);
