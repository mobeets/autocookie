// var allRecipes = [
//     {
//         "url": "http://food52.com/blog/2262_tender_yellow_cake", 
//         "name": "Tender Yellow Cake", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 3, 'unit': ''},
//             {'name': 'sugar', 'qty': 1.5, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 2.25, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 3, 'unit': 'tsp'},
//             {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
//             {'name': 'milk', 'qty': 1, 'unit': 'cup'},
//             {'name': 'vanilla', 'qty': 1.5, 'unit': 'tsp'}
//         ]
//     }, 
//     {
//         "url": "http://www.funteapartyideas.com/basic-yellow-cake-recipe.html", 
//         "name": "Basic Yellow Cake", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 5, 'unit': ''},
//             {'name': 'sugar', 'qty': 2.5, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 3, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 1, 'unit': 'tsp'},
//             {'name': 'salt', 'qty': 0.25, 'unit': 'tsp'},
//             {'name': 'butter', 'qty': 1.5, 'unit': 'cup'},
//             {'name': 'milk', 'qty': 1, 'unit': 'cup'},
//             {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'}
//         ]
//     },
//     {
//         "url": "http://thecakeblog.com/2014/05/classic-yellow-cake-with-fudge-frosting.html", 
//         "name": "Classic Yellow Cake with Fudge Frosting", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 5, 'unit': ''},
//             {'name': 'sugar', 'qty': 1.75, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 3, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 1, 'unit': 'Tbsp'},
//             {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
//             {'name': 'butter', 'qty': 1, 'unit': 'cup'},
//             {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'}
//         ]
//     }, 
//     {
//         "url": "http://www.thevintagemixer.com/2014/01/yellow-cake-with-chocolate-frosting-recipe/", 
//         "name": "Perfect Yellow Cake", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 4, 'unit': ''},
//             {'name': 'sugar', 'qty': 2, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 2.67, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 2, 'unit': 'tsp'},
//             {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
//             {'name': 'butter', 'qty': 1, 'unit': 'cup'},
//             {'name': 'milk', 'qty': 1, 'unit': 'cup'},
//             {'name': 'vanilla', 'qty': 1.5, 'unit': 'tsp'}
//         ]
//     }, 
//     {
//         "url": "http://lovefoodies.com/home-made-yellow-cake-mix.html", 
//         "name": "Home Made Yellow Cake Mix", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 3, 'unit': ''},
//             {'name': 'sugar', 'qty': 2.25, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 2.5, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 2, 'unit': 'tsp'},
//             {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
//             {'name': 'butter', 'qty': 0.33, 'unit': 'cup'},
//             {'name': 'milk', 'qty': 1, 'unit': 'cup'},
//         ]
//     }, 
//     {
//         "url": "http://onetoughcookienyc.com/2010/03/cake-is-the-new-denim/", 
//         "name": "Yellow Butter Cake", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 6, 'unit': ''},
//             {'name': 'sugar', 'qty': 1.5, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 3, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 1.33, 'unit': 'Tbsp'},
//             {'name': 'salt', 'qty': 0.75, 'unit': 'tsp'},
//             {'name': 'butter', 'qty': 0.75, 'unit': 'cup'},
//             {'name': 'milk', 'qty': 1, 'unit': 'cup'},
//             {'name': 'vanilla', 'qty': 2.25, 'unit': 'tsp'}
//         ]
//     },
//     {
//         "url": "http://allrecipes.com.au/recipe/20598/plain-yellow-cake.aspx", 
//         "name": "Plain Yellow Cake", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 2, 'unit': ''},
//             {'name': 'sugar', 'qty': 1.67, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 3, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 2.25, 'unit': 'tsp'},
//             {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
//             {'name': 'butter', 'qty': 1, 'unit': 'cup'},
//             {'name': 'milk', 'qty': 1.33, 'unit': 'cup'},
//             {'name': 'vanilla', 'qty': 2, 'unit': 'tsp'}
//         ]
//     }, 
//     {
//         "url": "http://www.thekitchn.com/recipe-diy-yell-1-14637", 
//         "name": "Quick Yellow Cake", 
//         "ingredients": [
//             {'name': 'eggs', 'qty': 3, 'unit': ''},
//             {'name': 'sugar', 'qty': 1.5, 'unit': 'cup'},
//             {'name': 'flour', 'qty': 2.25, 'unit': 'cup'},
//             {'name': 'baking powder', 'qty': 3.5, 'unit': 'tsp'},
//             {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
//             {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
//             {'name': 'milk', 'qty': 1.25, 'unit': 'cup'},
//             {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'}
//         ]
//     }
// ];

// var recipe1 = [
//   {'name': 'flour', 'qty': 2, 'unit': 'cup'},
//   {'name': 'sugar', 'qty': 1, 'unit': 'cup'},
//   {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
// ];
// var recipe2 = [
//   {'name': 'flour', 'qty': 3, 'unit': 'cup'},
//   {'name': 'sugar', 'qty': 1, 'unit': 'cup'},
//   {'name': 'butter', 'qty': 1, 'unit': 'cup'},
// ];
// var recipe3 = [
//   {'name': 'flour', 'qty': 2, 'unit': 'cup'},
//   {'name': 'sugar', 'qty': 0.5, 'unit': 'cup'},
//   {'name': 'butter', 'qty': 0.25, 'unit': 'cup'},
// ];
// var recipe4 = [
//   {'name': 'flour', 'qty': 2, 'unit': 'cup'},
//   {'name': 'sugar', 'qty': 0.5, 'unit': 'cup'},
//   {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
// ];

// var recipes = addAllRawQtys([recipe1, recipe2, recipe3, recipe4]);
// var recipes = addAllRawQtys(recipes);
// var ranges = allRatioRanges(recipes);
// var recipe = recipes[0];

var recipes = [];
for (var i=0; i<allRecipes.length; i++) {
  recipes.push(allRecipes[i].ingredients);
}

var recipes = addAllRawQtys(recipes);
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
    tooHigh.push(nm1);
    tooLow.push(nm2);
  }

  for (var i=0; i<recipe.length; i++) {
    key = 'background';
    val = 'none';
    nm = recipe[i].name;
    if ($.inArray(nm, tooLow) > -1 && $.inArray(nm, tooHigh) > -1) {
      val = 'ban-circle';
    } else if ($.inArray(nm, tooLow) > -1) {
      val = 'arrow-up';
    } else if ($.inArray(nm, tooHigh) > -1) {
      val = 'arrow-down';
    } else {
      val = '';
    }
    if (val.length > 0) {
      glyph = '<span class="glyphicon glyphicon-' + val + '" aria-hidden="true"></span>';
    } else {
      glyph = '';
    }
    $('#item-' + nm + ' .glyphs').html(glyph);
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
      // $('.errors').html(msgs.join('<br>'));
      oobsToColors(oobs);
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

function initPresets(recipes) {
  for (var i=0; i<recipes.length; i++) {
    btn = '<button type="button" class="btn btn-default">' + i.toString() + '</button>';
    $('.recipe-presets').append(btn);
  }
}

function init() {
  // todo: handle ingredients in recipes
  
  initPresets(recipes);
  initRecipe(recipe);
}
// var recipes = addAllRawQtys(recipes);
// var ranges = allRatioRanges(recipes);
// var recipe = recipes[0];

$(document).ready(init);
