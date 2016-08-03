
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

function oobsToColors(oobs) {
  tooLow = [];
  tooHigh = [];
  for (var i=0; i<oobs.length; i++) {
    oob = oobs[i];
    nm1 = oob.ratio.a;
    nm2 = oob.ratio.b;
    if (oob.ratio.r < oob.minVal) {
      nm3 = nm1; nm1 = nm2; nm2 = nm3;
    }
    tooLow.push(nm1);
    tooHigh.push(nm2);
  }

  for (var i=0; i<recipe.length; i++) {
    key = 'background';
    val = 'none';
    nm = recipe[i].name;
    if ($.inArray(nm, tooLow) > -1 && $.inArray(nm, tooHigh) > -1) {
      val = 'pink';
    } else if ($.inArray(nm, tooLow) > -1) {
      val = 'red';
    } else if ($.inArray(nm, tooHigh) > -1) {
      val = 'gray';
    }
    $('#item-' + nm).css(key, val);
  }
  
}

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
      msgs = oobsToMsgs(oobs, recipes.length);
      $('.errors').html(msgs.join('<br>'));
      oobsToColors(oobs);
    }
  });
  val = $(selector).slider("value");
  $(valSelector).text(val);
}

function initIngredient(item, i) {
  ind = i.toString();
  var line = '<div class="col-lg-2"></div>' +
      '<div id="item-' + item.name + '" class="ingredient col-lg-8">' +
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
