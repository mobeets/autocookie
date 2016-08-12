
## Overview

1. Find recipes for a dessert, e.g., "yellow cake"
2. Parse/clean the recipe ingredients
3. Create a new recipe by staying within the ranges of ingredient ratios in the recipes you found

### 1. Find recipes

`python model/search.py chocolate chip cookies > rawdata/choc-chip-cookies.json`

### 2. Parse/clean the recipe ingredients

`python model/clean.py rawdata/choc-chip-cookies.json > rawdata/choc-chip-cookies_clean.json`

### 3. Create a new recipe

* Add the contents of the file you created in step 2 to the file `static/data/recipes.js`
* Open `index.html`.
