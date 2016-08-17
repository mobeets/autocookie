
## What's an Autocookie?

[Autocookie](http://www.jehosafet.com/autocookie) collects a bunch of recipes for the same type of food--chocolate chip cookies, to start--and finds the range of acceptable ingredient ratios. To continue my flour and baking soda example, if one recipe called for 2 cups of flour and 1 tsp of baking soda, that's a ratio of 2.0 cups/tsp. If another recipe called for 1.5 cups of flour and 2 tsp of baking soda, that's a ratio of 0.75 cups/tsp. All Autocookie does, then, is suggest proportions of baking soda and flour that stay within this range of 0.75-2.0 cups/tsp. Just expand this same idea to all ingredient combinations, across multiple recipes.

More information [here](http://www.jehosafet.com/autocookie/about.html).

## Adding new recipe types

1. Find recipes for a dessert, e.g., "chocolate chip cookies"
2. Parse/clean the recipe ingredients
3. Add to Autocookie

### 1. Find recipes

`python model/search.py chocolate chip cookies > rawdata/choc-chip-cookies.json`

Note: this step requires the Yummly [https://developer.yummly.com](recipe API).

### 2. Parse/clean the recipe ingredients

`python model/clean.py rawdata/choc-chip-cookies.json > rawdata/choc-chip-cookies_clean.json`

Note: you might need to adjust the `STOPWORDS` variable in `model/clean.py`.

### 3. Create a new recipe

* Add the contents of the file you created in step 2 to the `allRecipes` variable in the file `static/data/recipes.js`.
* Open `index.html`.
