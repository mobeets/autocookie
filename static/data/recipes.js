var defaultStepSizes = [
    {'unit': 'tsp', 'stepSizeTsp': 0.125},
    {'unit': 'Tbsp', 'stepSizeTsp': 1.5},
    {'unit': 'cup', 'stepSizeTsp': 3},
];

var cakeRecipes = [
    {
        "url": "http://food52.com/blog/2262_tender_yellow_cake", 
        "name": "Tender Yellow Cake", 
        "ingredients": [
            {'name': 'eggs', 'qty': 3, 'unit': ''},
            {'name': 'white sugar', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.25, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 3, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'milk', 'qty': 1, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 1.5, 'unit': 'tsp'}
        ]
    }, 
    {
        "url": "http://www.funteapartyideas.com/basic-yellow-cake-recipe.html", 
        "name": "Basic Yellow Cake", 
        "ingredients": [
            {'name': 'eggs', 'qty': 5, 'unit': ''},
            {'name': 'white sugar', 'qty': 2.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 1, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.25, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'milk', 'qty': 1, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'}
        ]
    },
    {
        "url": "http://thecakeblog.com/2014/05/classic-yellow-cake-with-fudge-frosting.html", 
        "name": "Classic Yellow Cake with Fudge Frosting", 
        "ingredients": [
            {'name': 'eggs', 'qty': 5, 'unit': ''},
            {'name': 'white sugar', 'qty': 1.75, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 1, 'unit': 'Tbsp'},
            {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 1, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'}
        ]
    }, 
    {
        "url": "http://www.thevintagemixer.com/2014/01/yellow-cake-with-chocolate-frosting-recipe/", 
        "name": "Perfect Yellow Cake", 
        "ingredients": [
            {'name': 'eggs', 'qty': 4, 'unit': ''},
            {'name': 'white sugar', 'qty': 2, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.67, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 2, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 1, 'unit': 'cup'},
            {'name': 'milk', 'qty': 1, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 1.5, 'unit': 'tsp'}
        ]
    }, 
    {
        "url": "http://lovefoodies.com/home-made-yellow-cake-mix.html", 
        "name": "Home Made Yellow Cake Mix", 
        "ingredients": [
            {'name': 'eggs', 'qty': 3, 'unit': ''},
            {'name': 'white sugar', 'qty': 2.25, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.5, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 2, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 0.33, 'unit': 'cup'},
            {'name': 'milk', 'qty': 1, 'unit': 'cup'},
        ]
    }, 
    {
        "url": "http://onetoughcookienyc.com/2010/03/cake-is-the-new-denim/", 
        "name": "Yellow Butter Cake", 
        "ingredients": [
            {'name': 'eggs', 'qty': 6, 'unit': ''},
            {'name': 'white sugar', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 1.33, 'unit': 'Tbsp'},
            {'name': 'salt', 'qty': 0.75, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'milk', 'qty': 1, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 2.25, 'unit': 'tsp'}
        ]
    },
    {
        "url": "http://allrecipes.com.au/recipe/20598/plain-yellow-cake.aspx", 
        "name": "Plain Yellow Cake", 
        "ingredients": [
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'white sugar', 'qty': 1.67, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 2.25, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 1, 'unit': 'cup'},
            {'name': 'milk', 'qty': 1.33, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 2, 'unit': 'tsp'}
        ]
    }, 
    {
        "url": "http://www.thekitchn.com/recipe-diy-yell-1-14637", 
        "name": "Quick Yellow Cake", 
        "ingredients": [
            {'name': 'eggs', 'qty': 3, 'unit': ''},
            {'name': 'white sugar', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.25, 'unit': 'cup'},
            {'name': 'baking powder', 'qty': 3.5, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
            {'name': 'milk', 'qty': 1.25, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'}
        ]
    }
];

var ccCookies = [
    {
        "url": "https://www.verybestbaking.com/recipes/18476/original-nestle-toll-house-chocolate-chip-cookies/",
        "name": "Original Nestle Toll House Chocolate Chip Cookies",
        "ingredients": [
            {'name': 'butter', 'qty': 1, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 1, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 2.25, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 2, 'unit': 'cup'},
        ]
    },
    {
        "url": "http://www.cookingwithvinyl.com/duet-chocolate-chip-cookies/", 
        "name": "Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 1, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 1, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 1, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'vanilla', 'qty': 2, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 1, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 2.5, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 2, 'unit': 'cup'},
        ]
    }, 
    {
        "url": "http://www.bakedbyrachel.com/2013/08/soft-batch-chocolate-chip-cookie-recipe/", 
        "name": "Soft Batch Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 0.625, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.5, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 0.5, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'vanilla', 'qty': 1.5, 'unit': 'tsp'},
            {'name': 'baking powder', 'qty': 0.75, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 0.5, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.75, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 2, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 1.5, 'unit': 'cup'},
        ]
    },
    {
        "url": "http://24carrotkitchen.com/chocolate-chip-cookies/", 
        "name": "Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 0.625, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.33, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 1, 'unit': ''},
            {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 0.75, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 1.25, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 1, 'unit': 'cup'},
        ]
    },
    {
        "url": "http://flour-and-butter.blogspot.com/2011/07/chocolate-chip-cookies.html", 
        "name": "Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.25, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 0.5, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 1, 'unit': ''},
            {'name': 'vanilla', 'qty': 0.25, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 0.25, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.25, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 1, 'unit': 'cup'},
        ]
    },
    {
        "url": "https://julienne.red/2016/08/06/chocolate-chip-cookies/", 
        "name": "Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 1, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'vanilla', 'qty': 1.75, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 1, 'unit': 'tsp'},
            {'name': 'baking powder', 'qty': 2, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 2.66, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 2, 'unit': 'cup'},
        ]
    },
    {
        "url": "http://baking.we-wish.net/2011/12/crispy-chocolate-chip-cookies/", 
        "name": "Crispy Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 1, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'water', 'qty': 1, 'unit': 'tsp'},
            {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 1, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 2, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 1.75, 'unit': 'cup'}
        ]
    },  
    {
        "url": "http://tarateaspoon.com/2014/09/taras-chocolate-chip-cookies/", 
        "name": "Tara\u2019s Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 1, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'vanilla', 'qty': 1, 'unit': 'Tbsp'},
            {'name': 'baking soda', 'qty': 1, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 4, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 4, 'unit': 'cup'},
        ]
    },
    {
        "url": "http://collectingmemoriess.blogspot.com/2014/01/perfect-chocolate-chip-cookies.html", 
        "name": "Perfect Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.25, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 1, 'unit': ''},
            {'name': 'vanilla', 'qty': 2, 'unit': 'tsp'},
            {'name': 'cornstarch', 'qty': 2, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 1, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.5, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 2, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 1.29, 'unit': 'cup'},
        ]
    },
    {
        "url": "http://www.ashleymarieskitchen.com/2013/06/chocolate-chip-cookies.html", 
        "name": "Chocolate Chip Cookies", 
        "ingredients": [
            {'name': 'butter', 'qty': 0.75, 'unit': 'cup'},
            {'name': 'white sugar', 'qty': 0.5, 'unit': 'cup'},
            {'name': 'brown sugar', 'qty': 1, 'unit': 'cup'},
            {'name': 'eggs', 'qty': 2, 'unit': ''},
            {'name': 'vanilla', 'qty': 2, 'unit': 'tsp'},
            {'name': 'baking soda', 'qty': 0.5, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 0.25, 'unit': 'tsp'},
            {'name': 'flour', 'qty': 2.125, 'unit': 'cup'},
            {'name': 'chocolate chips', 'qty': 2, 'unit': 'cup'},
        ]
    }
];

var pbCookies = [
  {
    "ingredientLines": [
      "1 cup peanut butter (any kind you like-storebought, homemade, natural, smooth, chunky, etc.)",
      "1\/2 cup brown sugar",
      "1\/2 cup granulated sugar",
      "1 egg",
      "1 tsp. baking soda"
    ],
    "name": "Flourless Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      }
    ],
    "url": "http:\/\/www.cookingactress.com\/2014\/12\/flourless-peanut-butter-cookies.html",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Flourless-Peanut-Butter-Cookies-1799937",
    "yld": "makes about 52 small cookies",
    "num": 26,
    "id": "Flourless-Peanut-Butter-Cookies-1799937"
  },
  {
    "ingredientLines": [
      "1\/2 cup butter, softened",
      "1 cup peanut butter",
      "3\/4 cup white sugar",
      "1\/2 cup firmly packed brown sugar",
      "1 egg",
      "1 tablespoon milk",
      "1 teaspoon vanilla extract",
      "1 1\/4 cup all-purpose flour",
      "3\/4 teaspoon baking soda",
      "1\/2 teaspoon baking powder",
      "1\/4 teaspoon salt"
    ],
    "name": "Soft & Chewy Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "white sugar",
        "unit": "cup",
        "qty": 0.75
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "milk",
        "unit": "Tbsp",
        "qty": 1
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "all-purpose flour",
        "unit": "cup",
        "qty": 1.25
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 0.75
      },
      {
        "name": "baking powder",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 0.25
      }
    ],
    "url": "http:\/\/www.everydayhomecook.com\/2011\/08\/soft-chewy-peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Soft-_-Chewy-Peanut-Butter-Cookies-1753406",
    "yld": "4 to 4 1\/2 dozen",
    "num": 4,
    "id": "Soft-_-Chewy-Peanut-Butter-Cookies-1753406"
  },
  {
    "ingredientLines": [
      "\u00be cup (180 g) of butter",
      "1 cup (180 g) light brown sugar",
      "\u00bc cup (50 g) white sugar",
      "1 cup (240 ml) of high-quality peanut butter (ingredients should list just peanuts!)",
      "2 tsp (10 ml) vanilla",
      "2 eggs",
      "1 \u00bd cup (180 g) flour",
      "1 tsp (5 ml) baking soda",
      "1 tsp (5 ml) salt"
    ],
    "name": "Beth's Classic Peanut Butter Cookie",
    "ingredients": [
      {
        "name": "butter",
        "unit": "cup",
        "qty": 0.75
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "white sugar",
        "unit": "cup",
        "qty": 0.25
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "vanilla",
        "unit": "tsp",
        "qty": 2
      },
      {
        "name": "eggs",
        "unit": "",
        "qty": 2
      },
      {
        "name": "flour",
        "unit": "cup",
        "qty": 1.5
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 1
      }
    ],
    "url": "http:\/\/entertainingwithbeth.com\/beths-classic-peanut-butter-cookie-recipe\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Beth_s-Classic-Peanut-Butter-Cookie-1774123",
    "yld": "18 cookies",
    "num": 9,
    "id": "Beth_s-Classic-Peanut-Butter-Cookie-1774123"
  },
  {
    "ingredientLines": [
      "1\/2 cup butter, softened",
      "1\/2 cup peanut butter",
      "1\/2 cup granulated sugar",
      "1\/2 cup packed brown sugar or 1\/4 cup honey",
      "1\/2 teaspoon baking soda",
      "1\/2 teaspoon baking powder",
      "1 egg",
      "1\/2 teaspoon vanilla",
      "1 1\/4 cups all-purpose flour"
    ],
    "name": "Classic Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "baking powder",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "vanilla",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "all-purpose flour",
        "unit": "cup",
        "qty": 1.25
      }
    ],
    "url": "http:\/\/www.bhg.com\/recipe\/cookies\/classic-peanut-butter-cookies\/?socsrc=bhg_facebook_20160619135000_495633086",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Classic-Peanut-Butter-Cookies-1708448",
    "yld": "about 36 cookies",
    "num": 18,
    "id": "Classic-Peanut-Butter-Cookies-1708448"
  },
  {
    "ingredientLines": [
      "1 cup peanut butter (I use chunky)",
      "1\/2 cup white sugar",
      "1\/2 cup brown sugar",
      "1 egg",
      "1 teaspoon baking soda",
      "1 pinch salt",
      "1 teaspoon vanilla extract"
    ],
    "name": "Best Ever Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "white sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "pinch salt",
        "unit": "",
        "qty": 1
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "qty": 1
      }
    ],
    "url": "http:\/\/iambaker.net\/peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Best-Ever-Peanut-Butter-Cookies-677682",
    "yld": null,
    "num": 4,
    "id": "Best-Ever-Peanut-Butter-Cookies-677682"
  },
  {
    "ingredientLines": [
      "1 cup creamy peanut butter ( Sunbutter works too)",
      "1\/2 cup granulated sugar",
      "1\/2 cup packed light brown sugar",
      "1 large egg",
      "3 tablespoons cocoa powder",
      "1 teaspoon vanilla extract",
      "3\/4 cup semisweet chocolate chips"
    ],
    "name": "Double Chocolate Flourless Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "cocoa powder",
        "unit": "Tbsp",
        "qty": 3
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "chocolate chips",
        "unit": "cup",
        "qty": 0.75
      }
    ],
    "url": "http:\/\/www.lynnskitchenadventures.com\/2016\/08\/double-chocolate-flourless-peanut-butter-cookies.html",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Double-Chocolate-Flourless-Peanut-Butter-Cookies-1817870",
    "yld": "makes about 12 cookies.",
    "num": 6,
    "id": "Double-Chocolate-Flourless-Peanut-Butter-Cookies-1817870"
  },
  {
    "ingredientLines": [
      "1 1\/4 cups all-purpose flour",
      "1 tbsp baking powder",
      "1\/4 tsp salt",
      "1\/2 cup unsalted butter, melted",
      "1\/2 cup granulated sugar",
      "1\/2 cup packed brown sugar",
      "1 cup crunchy peanut butter",
      "1 egg"
    ],
    "name": "Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "all-purpose flour",
        "unit": "cup",
        "qty": 1.25
      },
      {
        "name": "baking powder",
        "unit": "Tbsp",
        "qty": 1
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 0.25
      },
      {
        "name": "unsalted butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      }
    ],
    "url": "http:\/\/sweetandsavorytooth.com\/?p=655",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Peanut-Butter-Cookies-1752819",
    "yld": "makes about 40 cookies.",
    "num": 20,
    "id": "Peanut-Butter-Cookies-1752819"
  },
  {
    "ingredientLines": [
      "\u00bd cup unsalted butter, softened",
      "\u00bd cup sugar",
      "\u00bd cup light brown sugar",
      "1 large egg",
      "1 tsp vanilla extract",
      "\u00be cup smooth peanut butter (not natural or homemade peanut butter)",
      "1\u00bd cups all-purpose flour",
      "1 tsp baking soda",
      "\u00bd tsp salt"
    ],
    "name": "Classic Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "unsalted butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 0.75
      },
      {
        "name": "all-purpose flour",
        "unit": "cup",
        "qty": 1.5
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 0.5
      }
    ],
    "url": "http:\/\/www.ilovemydisorganizedlife.com\/classic-peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Classic-Peanut-Butter-Cookies-1693279",
    "yld": "2 dozen cookies",
    "num": 12,
    "id": "Classic-Peanut-Butter-Cookies-1693279"
  },
  {
    "ingredientLines": [
      "1 cup creamy peanut butter",
      "1 cup firmly packed brown sugar",
      "1 large egg",
      "1 teaspoon baking soda",
      "*dark chocolate for drizzling"
    ],
    "name": "Four-Ingredient Chewy Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "dark chocolate for drizzling",
        "unit": "",
        "qty": 0
      }
    ],
    "url": "http:\/\/www.culinarycoutureblog.com\/2013\/01\/four-ingredient-chewy-peanut-butter-cookies.html",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Four-Ingredient-Chewy-Peanut-Butter-Cookies-1804324",
    "yld": "yield: 1 dozen small cookies",
    "num": 6,
    "id": "Four-Ingredient-Chewy-Peanut-Butter-Cookies-1804324"
  },
  {
    "ingredientLines": [
      "1 cup peanut butter",
      "1 cup packed brown sugar",
      "1 egg",
      "1 tsp baking powder",
      "3\/4 cup semi-sweet chocolate chips"
    ],
    "name": "5 Ingredient Peanut Butter Chocolate Chip Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking powder",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "semi-sweet chocolate chips",
        "unit": "cup",
        "qty": 0.75
      }
    ],
    "url": "http:\/\/mommahenskitchen.blogspot.com\/2010\/10\/5-ingredient-peanut-butter-chocolate.html",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/5-Ingredient-Peanut-Butter-Chocolate-Chip-Cookies-1753644",
    "yld": null,
    "num": 4,
    "id": "5-Ingredient-Peanut-Butter-Chocolate-Chip-Cookies-1753644"
  },
  {
    "ingredientLines": [
      "1 cup natural peanut butter {creamy or chunky}",
      "\u00bd cup brown sugar",
      "\u00bd cup granulated sugar",
      "1 large egg, slightly beaten",
      "1 teaspoon baking soda",
      "1 teaspoon vanilla extract",
      "1 cup semi-sweet chocolate chips"
    ],
    "name": "Flourless Peanut Butter Chocolate Chip Cookies",
    "ingredients": [
      {
        "name": "peanut butter creamy",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "semi-sweet chocolate chips",
        "unit": "cup",
        "qty": 1
      }
    ],
    "url": "http:\/\/www.simplyhappenstance.com\/flourless-peanut-butter-chocolate-chip-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Flourless-Peanut-Butter-Chocolate-Chip-Cookies-1746009",
    "yld": "serves: 18",
    "num": 18,
    "id": "Flourless-Peanut-Butter-Chocolate-Chip-Cookies-1746009"
  },
  {
    "ingredientLines": [
      "1 1\/2 cup flour",
      "1\/2 cup butter, room temperature",
      "1\/2 cup brown sugar",
      "1\/2 cup white sugar",
      "1 tsp baking soda",
      "1\/2 tsp salt",
      "1 egg",
      "1 tsp vanilla extract",
      "1 cup smooth peanut butter"
    ],
    "name": "Soft and Rich Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "flour",
        "unit": "cup",
        "qty": 1.5
      },
      {
        "name": "butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "white sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      }
    ],
    "url": "http:\/\/domesticbatch.com\/rich-and-soft-peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Soft-and-Rich-Peanut-Butter-Cookies-1537708",
    "yld": null,
    "num": 4,
    "id": "Soft-and-Rich-Peanut-Butter-Cookies-1537708"
  },
  {
    "ingredientLines": [
      "1 cup peanut butter",
      "1\/2 cup white sugar",
      "1\/2 cup brown sugar",
      "1 egg",
      "1 teaspoon baking soda",
      "1 teaspoon vanilla",
      "pinch of salt"
    ],
    "name": "The Best Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "white sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "vanilla",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "pinch salt",
        "unit": "",
        "qty": 0
      }
    ],
    "url": "http:\/\/inspirationformoms.porch.com\/2016\/03\/the-best-peanut-butter-cookies.html",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/The-Best-Peanut-Butter-Cookies-1536646",
    "yld": "makes about 30 cookies",
    "num": 15,
    "id": "The-Best-Peanut-Butter-Cookies-1536646"
  },
  {
    "ingredientLines": [
      "1 C Peanut Butter",
      "1 egg",
      "1 C Sugar",
      "Hershey Kisses (optional)"
    ],
    "name": "Easy Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "hershey kisses",
        "unit": "",
        "qty": 0
      }
    ],
    "url": "http:\/\/www.splendry.com\/food\/recipes-food\/easy-peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Easy-Peanut-Butter-Cookies-1814930",
    "yld": null,
    "num": 4,
    "id": "Easy-Peanut-Butter-Cookies-1814930"
  },
  {
    "ingredientLines": [
      "1 cup granulated sugar",
      "1 egg",
      "1 teaspoon baking soda",
      "1\/2 teaspoon vanilla extract",
      "1 cup peanut butter (chunky for crunchier cookies, smooth for slightly softer)",
      "1 cup chopped peanuts (optional)"
    ],
    "name": "Flourless Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "peanuts",
        "unit": "cup",
        "qty": 1
      }
    ],
    "url": "http:\/\/appetiteforchina.com\/recipes\/flourless-peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Flourless-Peanut-Butter-Cookies-1781367",
    "yld": "makes 40 small cookies",
    "num": 20,
    "id": "Flourless-Peanut-Butter-Cookies-1781367"
  },
  {
    "ingredientLines": [
      "1\tcup\tcrunchy peanut butter",
      "1\/2\tcup\tlight brown sugar",
      "1\t\tegg",
      "1\/2\ttsp.\tbaking soda",
      "1\/4\tcup\tchopped peanut"
    ],
    "name": "Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "peanut",
        "unit": "cup",
        "qty": 0.25
      }
    ],
    "url": "http:\/\/www.diabetesforecast.org\/2011\/feb\/recipes\/peanut-butter-cookies.html",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Peanut-Butter-Cookies-1820964",
    "yld": null,
    "num": 4,
    "id": "Peanut-Butter-Cookies-1820964"
  },
  {
    "ingredientLines": [
      "\u00bd cup butter",
      "\u00bd cup peanut butter",
      "\u00bd cup white sugar",
      "\u00bd cup brown sugar",
      "1 egg",
      "2 Tbsp milk",
      "\u00bd tsp baking soda",
      "\u00bd tsp baking powder",
      "\u00bd tsp salt",
      "\u00bd tsp vanilla",
      "1 \u00be cups flour",
      "\u00bd cup white chocolate morsels"
    ],
    "name": "Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "white sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "milk",
        "unit": "Tbsp",
        "qty": 2
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "baking powder",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "vanilla",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "flour",
        "unit": "cup",
        "qty": 1.75
      },
      {
        "name": "white chocolate morsels",
        "unit": "cup",
        "qty": 0.5
      }
    ],
    "url": "http:\/\/www.pinaycookingcorner.com\/2011\/05\/peanut-butter-cookies.html",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Peanut-Butter-Cookies-1759929",
    "yld": "yield: 36 pcs.                     ",
    "num": 36,
    "id": "Peanut-Butter-Cookies-1759929"
  },
  {
    "ingredientLines": [
      "1 cup creamy peanut butter",
      "\u2154 cup packed dark brown sugar",
      "1\u00bd teaspoons vanilla",
      "2 large eggs",
      "\u2154 cup rolled oats",
      "1 teaspoon baking soda",
      "\u2154 cup chocolate chips"
    ],
    "name": "Healthy Peanut Butter Oatmeal Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.66666666666667
      },
      {
        "name": "vanilla",
        "unit": "tsp",
        "qty": 1.5
      },
      {
        "name": "eggs",
        "unit": "",
        "qty": 2
      },
      {
        "name": "rolled oats",
        "unit": "cup",
        "qty": 0.66666666666667
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 1
      },
      {
        "name": "chocolate chips",
        "unit": "cup",
        "qty": 0.66666666666667
      }
    ],
    "url": "http:\/\/www.primaverakitchen.com\/healthy-peanut-butter-oatmeal-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Healthy-Peanut-Butter-Oatmeal-Cookies-1823613",
    "yld": "16-20",
    "num": 18,
    "id": "Healthy-Peanut-Butter-Oatmeal-Cookies-1823613"
  },
  {
    "ingredientLines": [
      "1\/2 cup sugar",
      "1\/2 cup packed brown sugar",
      "1\/2 cup butter (1 stick, 4 ounces), room temperature",
      "1\/2 cup peanut butter",
      "1 egg",
      "1 1\/4 cup all purpose flour",
      "3\/4 teaspoon baking soda",
      "1\/2 teaspoon baking powder",
      "1\/4 teaspoon salt"
    ],
    "name": "Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "all-purpose flour",
        "unit": "cup",
        "qty": 1.25
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 0.75
      },
      {
        "name": "baking powder",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 0.25
      }
    ],
    "url": "http:\/\/www.simplyrecipes.com\/recipes\/peanut_butter_cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Peanut-Butter-Cookies-993791",
    "yld": "Makes about 2 dozen cookies.",
    "num": 12,
    "id": "Peanut-Butter-Cookies-993791"
  },
  {
    "ingredientLines": [
      "1\/2 cup butter, softened",
      "1\/2 cup peanut butter",
      "1\/2 cup granulated sugar",
      "1\/2 cup packed brown sugar or 1\/4 cup honey",
      "1\/2 teaspoon baking soda",
      "1\/2 teaspoon baking powder",
      "1 egg",
      "1\/2 teaspoon vanilla",
      "1 1\/4 cups all-purpose flour",
      "Granulated sugar"
    ],
    "name": "Classic Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 0.5
      },
      {
        "name": "baking soda",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "baking powder",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "egg",
        "unit": "",
        "qty": 1
      },
      {
        "name": "vanilla",
        "unit": "tsp",
        "qty": 0.5
      },
      {
        "name": "all-purpose flour",
        "unit": "cup",
        "qty": 1.25
      },
      {
        "name": "sugar",
        "unit": "",
        "qty": 0
      }
    ],
    "url": "http:\/\/www.bhg.com\/recipe\/cookies\/classic-peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Classic-Peanut-Butter-Cookies-1519683",
    "yld": "about 36 cookies",
    "num": 18,
    "id": "Classic-Peanut-Butter-Cookies-1519683"
  },
  {
    "ingredientLines": [
      "2 C peanut butter (I used Jif creamy, as usual. If you\u2019re eschewing corn syrup for Passover or just generally, use a peanut butter without corn syrup.)",
      "1 C packed dark brown sugar",
      "1 C granulated sugar",
      "1 1\/2 t salt",
      "2 eggs",
      "1 T vanilla"
    ],
    "name": "Passover Peanut Butter Cookies",
    "ingredients": [
      {
        "name": "peanut butter",
        "unit": "cup",
        "qty": 2
      },
      {
        "name": "brown sugar",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "sugar",
        "unit": "cup",
        "qty": 1
      },
      {
        "name": "salt",
        "unit": "tsp",
        "qty": 1.5
      },
      {
        "name": "eggs",
        "unit": "",
        "qty": 2
      },
      {
        "name": "vanilla",
        "unit": "Tbsp",
        "qty": 1
      }
    ],
    "url": "http:\/\/fourntwentyblackbirds.wordpress.com\/2012\/04\/10\/passover-peanut-butter-cookies\/",
    "url_ymly": "http:\/\/www.yummly.com\/recipe\/Passover-Peanut-Butter-Cookies-1758931",
    "yld": null,
    "num": 4,
    "id": "Passover-Peanut-Butter-Cookies-1758931"
  }
];

var sugarCookies = [
  {
    "ingredientLines": [
      "2 3/4 cups all-purpose flour", 
      "1 teaspoon baking soda", 
      "1/2 teaspoon baking powder", 
      "1/2 teaspoon salt", 
      "1 cup butter, softened", 
      "1 1/2 cups white sugar", 
      "1 egg", 
      "1 1/2 teaspoons vanilla extract", 
      "1/2 cup sugar for rolling cookies"
    ], 
    "name": "Chewy Sugar Cookies", 
    "ingredients": [
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.75
      }, 
      {
        "name": "baking soda", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "white sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.5
      }, 
      {
        "name": "sugar for rolling cookies", 
        "unit": "cup", 
        "qty": 0.5
      }
    ], 
    "url": "http://cozinharforall.blogspot.com/2016/08/how-to-make-chewy-sugar-cookies.html", 
    "url_ymly": "http://www.yummly.com/recipe/Chewy-Sugar-Cookies-1830365", 
    "yld": null, 
    "num": 4, 
    "id": "Chewy-Sugar-Cookies-1830365"
  }, 
  {
    "ingredientLines": [
      "1 cup (2 sticks) butter, softened", 
      "1\u00bd cups granulated sugar", 
      "1 egg", 
      "2\u00bc cups all-purpose flour", 
      "\u00bd teaspoon baking powder", 
      "\u00bd teaspoon Kosher salt", 
      "1 teaspoon vanilla", 
      "\u00bc cup granulated sugar for rolling cookies"
    ], 
    "name": "Chewy Sugar Cookies", 
    "ingredients": [
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.25
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "vanilla", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "sugar for rolling cookies", 
        "unit": "cup", 
        "qty": 0.25
      }
    ], 
    "url": "http://addapinch.com/chewy-sugar-cookies-recipe/#.Usbj2PRDuSo", 
    "url_ymly": "http://www.yummly.com/recipe/Chewy-Sugar-Cookies-1814030", 
    "yld": "36 cookies", 
    "num": 18, 
    "id": "Chewy-Sugar-Cookies-1814030"
  }, 
  {
    "ingredientLines": [
      "\u00bd cup unsalted butter", 
      "1 cup white sugar", 
      "1 egg", 
      "1 tsp. vanilla extract", 
      "\u00bd tsp. baking powder", 
      "\u00bc tsp. salt", 
      "2 cups all-purpose flour"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "unsalted butter", 
        "unit": "cup", 
        "qty": 0.5
      }, 
      {
        "name": "white sugar", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.25
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.0
      }
    ], 
    "url": "http://www.aheadofthyme.com/2015/12/sugar-cookies", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-1778392", 
    "yld": "24 cookies", 
    "num": 12, 
    "id": "Sugar-Cookies-1778392"
  }, 
  {
    "ingredientLines": [
      "1 cup (2 sticks) butter, softened", 
      "1\u00bd cups granulated sugar", 
      "1 egg", 
      "2\u00bc cups all-purpose flour", 
      "\u00bd teaspoon baking powder", 
      "\u00bd teaspoon Kosher salt", 
      "1 teaspoon vanilla", 
      "\u00bc cup granulated sugar for rolling cookies"
    ], 
    "name": "Chewy Sugar Cookies", 
    "ingredients": [
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.25
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "vanilla", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "sugar for rolling cookies", 
        "unit": "cup", 
        "qty": 0.25
      }
    ], 
    "url": "http://addapinch.com/chewy-sugar-cookies-recipe/", 
    "url_ymly": "http://www.yummly.com/recipe/Chewy-Sugar-Cookies-1547029", 
    "yld": "36 cookies", 
    "num": 18, 
    "id": "Chewy-Sugar-Cookies-1547029"
  }, 
  {
    "ingredientLines": [
      "2 3/4 cups all-purpose flour", 
      "1 teaspoon baking soda", 
      "1/2 teaspoon baking powder", 
      "1 cup butter, softened", 
      "1 1/2 cups white sugar", 
      "1 egg", 
      "1 teaspoon vanilla extract", 
      "Assorted sprinkles"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.75
      }, 
      {
        "name": "baking soda", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "white sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "assorted sprinkles", 
        "unit": "", 
        "qty": 0.0
      }
    ], 
    "url": "http://highheelstohotwheels.com/2013/07/sugar-cookies/", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-1746230", 
    "yld": "48 cookies", 
    "num": 24, 
    "id": "Sugar-Cookies-1746230"
  }, 
  {
    "ingredientLines": [
      "1 cup unsalted butter, softened", 
      "1 cup white sugar", 
      "1 egg", 
      "1 tsp vanilla extract", 
      "2 3/4 cups all-purpose flour", 
      "2 tsp baking soda", 
      "frosting"
    ], 
    "name": "Apple Sugar Back to School Cookies", 
    "ingredients": [
      {
        "name": "unsalted butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "white sugar", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.75
      }, 
      {
        "name": "baking soda", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "frosting", 
        "unit": "", 
        "qty": 0.0
      }
    ], 
    "url": "http://theantijunecleaver.com/2016/08/apple-sugar-back-school-cookies/", 
    "url_ymly": "http://www.yummly.com/recipe/Apple-Sugar-Back-to-School-Cookies-1827037", 
    "yld": null, 
    "num": 4, 
    "id": "Apple-Sugar-Back-to-School-Cookies-1827037"
  }, 
  {
    "ingredientLines": [
      "2 sticks unsalted butter, softened", 
      "1\u00bd cups sugar", 
      "1 egg", 
      "3 cups all-purpose flour", 
      "\u00bd teaspoon baking powder", 
      "\u00bd teaspoon Kosher salt", 
      "2 teaspoon vanilla", 
      "2 tbsp sugar for rolling cookies"
    ], 
    "name": "Chewy Sugar Cookies", 
    "ingredients": [
      {
        "name": "sticks unsalted butter", 
        "unit": "", 
        "qty": 2.0
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 3.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "vanilla", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "sugar for rolling cookies", 
        "unit": "Tbsp", 
        "qty": 2.0
      }
    ], 
    "url": "http://littlebcooks.blogspot.com/2013/12/chewy-sugar-cookies.html", 
    "url_ymly": "http://www.yummly.com/recipe/Chewy-Sugar-Cookies-1759108", 
    "yld": "makes 24 cookies.", 
    "num": 12, 
    "id": "Chewy-Sugar-Cookies-1759108"
  }, 
  {
    "ingredientLines": [
      "3/4 cup (170 grams) butter", 
      "1 cup (200 grams) granulated sugar", 
      "2 large eggs", 
      "2 teaspoons vanilla extract", 
      "2 1/2 cups (315 grams) all-purpose flour", 
      "1 teaspoon baking powder", 
      "1/2 teaspoon salt"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 0.75
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "eggs", 
        "unit": "", 
        "qty": 2.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.5
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.5
      }
    ], 
    "url": "http://www.pastryaffair.com/blog/christmas-sugar-cookies.html", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-1757866", 
    "yld": "yields 2-3 dozen, depending on size of the cookie", 
    "num": 30, 
    "id": "Sugar-Cookies-1757866"
  }, 
  {
    "ingredientLines": [
      "3/4 cup granulated sugar", 
      "1/3 cup shortening", 
      "6 tablespoons unsalted butter, softened", 
      "1 large egg", 
      "1 tablespoon milk", 
      "1 teaspoon vanilla extract", 
      "2 cups all-purpose flour", 
      "1 1/2 teaspoons baking powder", 
      "1/4 teaspoon salt"
    ], 
    "name": "Classic Sugar Cookie", 
    "ingredients": [
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 0.75
      }, 
      {
        "name": "shortening", 
        "unit": "cup", 
        "qty": 0.3333333333333333
      }, 
      {
        "name": "unsalted butter", 
        "unit": "Tbsp", 
        "qty": 6.0
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "milk", 
        "unit": "Tbsp", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 1.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.25
      }
    ], 
    "url": "http://www.ladybehindthecurtain.com/classic-sugar-cookie-recipe/", 
    "url_ymly": "http://www.yummly.com/recipe/Classic-Sugar-Cookie-1714607", 
    "yld": "Makes 10 Medium Cookies or 7 Large", 
    "num": 5, 
    "id": "Classic-Sugar-Cookie-1714607"
  }, 
  {
    "ingredientLines": [
      "2 3/4 C all-purpose flour", 
      "1 t baking soda", 
      "1/2 t baking powder", 
      "1 cup butter, SOFTENED", 
      "1 1/2 C white sugar", 
      "1 egg", 
      "1 t vanilla extract"
    ], 
    "name": "Easy Sugar Cookies", 
    "ingredients": [
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.75
      }, 
      {
        "name": "baking soda", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "white sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }
    ], 
    "url": "http://realmomkitchen.com/413/easy-sugar-cookies/", 
    "url_ymly": "http://www.yummly.com/recipe/Easy-sugar-cookies-369923", 
    "yld": null, 
    "num": 4, 
    "id": "Easy-sugar-cookies-369923"
  }, 
  {
    "ingredientLines": [
      "\u00bd cup unsalted butter", 
      "1 cup white sugar", 
      "1 egg", 
      "1 tsp. vanilla extract", 
      "\u00bd tsp. baking powder", 
      "\u00bc tsp. salt", 
      "2 cups all-purpose flour"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "unsalted butter", 
        "unit": "cup", 
        "qty": 0.5
      }, 
      {
        "name": "white sugar", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.25
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.0
      }
    ], 
    "url": "http://www.aheadofthyme.com/2015/12/sugar-cookies/", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-1431431", 
    "yld": "24 cookies", 
    "num": 12, 
    "id": "Sugar-Cookies-1431431"
  }, 
  {
    "ingredientLines": [
      "2 \u00bd cups all-purpose flour", 
      "1 teaspoon salt", 
      "2 sticks (\u00bd pound) unsalted butter, softened", 
      "1 cup confectioners\u2019 sugar", 
      "1 egg", 
      "1 teaspoon vanilla", 
      "rainbow sprinkles"
    ], 
    "name": "Confetti Sugar Cookies", 
    "ingredients": [
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 2.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "sticks unsalted butter", 
        "unit": "", 
        "qty": 2.0
      }, 
      {
        "name": "confectioners sugar", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "egg", 
        "unit": "", 
        "qty": 1.0
      }, 
      {
        "name": "vanilla", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "rainbow sprinkles", 
        "unit": "", 
        "qty": 0.0
      }
    ], 
    "url": "http://neuroticbaker.com/2016/07/confetti-sugar-cookies-2/", 
    "url_ymly": "http://www.yummly.com/recipe/Confetti-Sugar-Cookies-1735045", 
    "yld": null, 
    "num": 4, 
    "id": "Confetti-Sugar-Cookies-1735045"
  }, 
  {
    "ingredientLines": [
      "3 cups all-purpose flour", 
      "1/2 teaspoon baking powder", 
      "1/2 teaspoon salt", 
      "1 cup (2 sticks) butter, softened (do not use margarine)", 
      "1 1/2 cups sugar", 
      "2 large eggs", 
      "1 teaspoon vanilla extract"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 3.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "eggs", 
        "unit": "", 
        "qty": 2.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }
    ], 
    "url": "http://browniesfordinner.com/2009/12/16/sugar-cookies/", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-1792354", 
    "yld": "makes about 6 dozen cookies (with 3-4 inch cookie cutters)", 
    "num": 36, 
    "id": "Sugar-Cookies-1792354"
  }, 
  {
    "ingredientLines": [
      "1 cup butter", 
      "1 1/2 cups sugar", 
      "2 eggs", 
      "1 tsp vanilla essence", 
      "3 1/2 cups flour", 
      "1 tsp baking powder"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "eggs", 
        "unit": "", 
        "qty": 2.0
      }, 
      {
        "name": "vanilla essence", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "flour", 
        "unit": "cup", 
        "qty": 3.5
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 1.0
      }
    ], 
    "url": "http://ovenhaven.wordpress.com/2010/08/04/our-own-love-story/", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-1758348", 
    "yld": null, 
    "num": 4, 
    "id": "Sugar-Cookies-1758348"
  }, 
  {
    "ingredientLines": [
      "3 cups flour", 
      "\u00bd teaspoon baking powder", 
      "1 cup salted butter, softened", 
      "1\u00bd cups sugar", 
      "2 large eggs", 
      "2 teaspoons vanilla extract", 
      "\u2154 cup unsweetened cocoa powder"
    ], 
    "name": "Chocolate Sugar Cookies", 
    "ingredients": [
      {
        "name": "flour", 
        "unit": "cup", 
        "qty": 3.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 0.5
      }, 
      {
        "name": "salted butter", 
        "unit": "cup", 
        "qty": 1.0
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "eggs", 
        "unit": "", 
        "qty": 2.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "unsweetened cocoa powder", 
        "unit": "cup", 
        "qty": 0.6666666666666666
      }
    ], 
    "url": "http://www.orwhateveryoudo.com/2014/02/chocolate-sugar-cookies.html", 
    "url_ymly": "http://www.yummly.com/recipe/Chocolate-Sugar-Cookies-1755297", 
    "yld": null, 
    "num": 4, 
    "id": "Chocolate-Sugar-Cookies-1755297"
  }, 
  {
    "ingredientLines": [
      "2 sticks (1 cup/226g) butter", 
      "2/3 cup (145g) sugar", 
      "2 tsp vanilla extract", 
      "1/3 cup (80ml) milk", 
      "3 cups (300g) all-purpose flour", 
      "Sugar sprinkles, any color"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "sticks butter", 
        "unit": "", 
        "qty": 2.0
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 0.6666666666666666
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "milk", 
        "unit": "cup", 
        "qty": 0.3333333333333333
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 3.0
      }, 
      {
        "name": "sugar sprinkles any color", 
        "unit": "", 
        "qty": 0.0
      }
    ], 
    "url": "http://www.rotinrice.com/2014/09/sugar-cookies/", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-709426", 
    "yld": "40 cookies", 
    "num": 20, 
    "id": "Sugar-Cookies-709426"
  }, 
  {
    "ingredientLines": [
      "1 1/2 cups butter, softened", 
      "2 cups white sugar", 
      "4 eggs", 
      "1 teaspoon vanilla extract", 
      "5 cups all-purpose flour", 
      "2 teaspoons baking powder", 
      "1 teaspoon salt", 
      "4 cups confectioners' sugar", 
      "1/2 cup butter", 
      "5 tablespoons milk", 
      "1 teaspoon vanilla extract", 
      "food coloring"
    ], 
    "name": "Sugar Cookies", 
    "ingredients": [
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "white sugar", 
        "unit": "cup", 
        "qty": 2.0
      }, 
      {
        "name": "eggs", 
        "unit": "", 
        "qty": 4.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "all-purpose flour", 
        "unit": "cup", 
        "qty": 5.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "confectioners sugar", 
        "unit": "cup", 
        "qty": 4.0
      }, 
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 0.5
      }, 
      {
        "name": "milk", 
        "unit": "Tbsp", 
        "qty": 5.0
      }, 
      {
        "name": "vanilla extract", 
        "unit": "tsp", 
        "qty": 1.0
      }, 
      {
        "name": "food coloring", 
        "unit": "", 
        "qty": 0.0
      }
    ], 
    "url": "http://sweetcakesbakeshop.blogspot.com/2008/10/halloween-sugar-cookies.html", 
    "url_ymly": "http://www.yummly.com/recipe/Sugar-Cookies-1758955", 
    "yld": null, 
    "num": 4, 
    "id": "Sugar-Cookies-1758955"
  }, 
  {
    "ingredientLines": [
      "5 cups flour", 
      "2 teaspoons baking powder", 
      "2 teaspoons salt", 
      "1 1/2 cups (3 sticks) butter, softened", 
      "2 cups sugar", 
      "4 eggs", 
      "2 teaspoons vanilla"
    ], 
    "name": "Rolled Sugar Cookies", 
    "ingredients": [
      {
        "name": "flour", 
        "unit": "cup", 
        "qty": 5.0
      }, 
      {
        "name": "baking powder", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "salt", 
        "unit": "tsp", 
        "qty": 2.0
      }, 
      {
        "name": "butter", 
        "unit": "cup", 
        "qty": 1.5
      }, 
      {
        "name": "sugar", 
        "unit": "cup", 
        "qty": 2.0
      }, 
      {
        "name": "eggs", 
        "unit": "", 
        "qty": 4.0
      }, 
      {
        "name": "vanilla", 
        "unit": "tsp", 
        "qty": 2.0
      }
    ], 
    "url": "http://www.bakingdom.com/2013/03/rainbow-flower-cookies.html", 
    "url_ymly": "http://www.yummly.com/recipe/Rolled-Sugar-Cookies-1756273", 
    "yld": "makes 2 to 5 dozen, depending on size and thickness", 
    "num": 42, 
    "id": "Rolled-Sugar-Cookies-1756273"
  }
];

var allRecipes = [
    {
        "name": "chocolate chip cookies",
        "key": "choc-chip-cookies",
        "recipes": ccCookies,
        "instructions": "Bake at 375F for 8-10 minutes.",
    },
    {
        "name": "peanut butter cookies",
        "key": "pb-cookies",
        "recipes": pbCookies,
        "instructions": "Bake at 350F for 6-10 minutes.",
    },
    {
        "name": "sugar cookies",
        "key": "sugar-cookies",
        "recipes": sugarCookies,
        "instructions": "Bake at 350F for 8-10 minutes.",
    },
    {
        "name": "yellow cake",
        "key": "yellow-cake",
        "recipes": cakeRecipes,
        "instructions": "Bake at 350F for 30-35 minutes.",
    },
];

