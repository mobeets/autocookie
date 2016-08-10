var defaultStepSizes = [
    {'unit': 'tsp', 'stepSizeTsp': 0.125},
    {'unit': 'Tbsp', 'stepSizeTsp': 1.5},
    {'unit': 'cup', 'stepSizeTsp': 3},
];

var defaultRanges = [
    {'name': 'eggs', 'maxQty': 12},
    {'name': 'sugar', 'maxQty': 3*16*3},
    {'name': 'flour', 'maxQty': 5*16*3},
    {'name': 'baking-powder', 'maxQty': 12},
    {'name': 'salt', 'maxQty': 12},
    {'name': 'butter', 'maxQty': 2*16*3},
    {'name': 'milk', 'maxQty': 5*16*3},
    {'name': 'vanilla', 'maxQty': 12},
];

var allFoods = ["yellow cake", "cookies", "brownies"];

var cakeRecipes = [
    {
        "url": "http://food52.com/blog/2262_tender_yellow_cake", 
        "name": "Tender Yellow Cake", 
        "ingredients": [
            {'name': 'eggs', 'qty': 3, 'unit': ''},
            {'name': 'sugar', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.25, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 3, 'unit': 'tsp'},
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
            {'name': 'sugar', 'qty': 2.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 1, 'unit': 'tsp'},
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
            {'name': 'sugar', 'qty': 1.75, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 1, 'unit': 'Tbsp'},
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
            {'name': 'sugar', 'qty': 2, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.67, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 2, 'unit': 'tsp'},
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
            {'name': 'sugar', 'qty': 2.25, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.5, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 2, 'unit': 'tsp'},
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
            {'name': 'sugar', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 1.33, 'unit': 'Tbsp'},
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
            {'name': 'sugar', 'qty': 1.67, 'unit': 'cup'},
            {'name': 'flour', 'qty': 3, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 2.25, 'unit': 'tsp'},
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
            {'name': 'sugar', 'qty': 1.5, 'unit': 'cup'},
            {'name': 'flour', 'qty': 2.25, 'unit': 'cup'},
            {'name': 'baking-powder', 'qty': 3.5, 'unit': 'tsp'},
            {'name': 'salt', 'qty': 1, 'unit': 'tsp'},
            {'name': 'butter', 'qty': 0.5, 'unit': 'cup'},
            {'name': 'milk', 'qty': 1.25, 'unit': 'cup'},
            {'name': 'vanilla', 'qty': 1, 'unit': 'tsp'}
        ]
    }
];

var cookieRecipes = [
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

var allRecipes = [
    {
        "name": "yellow cake",
        "key": "yellow-cake",
        "recipes": cakeRecipes,
    },
    {
        "name": "chocolate chip cookies",
        "key": "choc-chip-cookies",
        "recipes": cookieRecipes,
    },
];
