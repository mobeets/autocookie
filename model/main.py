import json
from yummly import Client
from unidecode import unidecode
from env import YUMMLY_API_ID, YUMMLY_API_KEY
import parse_ingredients
import parser

# import os
# source .env
# YUMMLY_API_ID = os.environ.get("YUMMLY_API_ID")
# YUMMLY_API_KEY = os.environ.get("YUMMLY_API_KEY")

# def get_recipe(recipe_id):
#     recipe = client.recipe(recipe_id)
#     print('Recipe ID:', recipe.id)
#     print('Recipe:', recipe.name)
#     print('Rating:', recipe.rating)
#     print('Total Time:', recipe.totalTime)
#     print('Yields:', recipe.yields)
#     print('Ingredients:')
#     for ingred in recipe.ingredientLines:
#         print(ingred)

def init(RETRIES=0, TIMEOUT=5.0):
    return Client(api_id=YUMMLY_API_ID, api_key=YUMMLY_API_KEY, timeout=TIMEOUT, retries=RETRIES)

DEFAULT_PARAMS = {
    'allowedCourse[]': 'Dessert',
}
def get_recipes(query, params=DEFAULT_PARAMS, client=None):
    client = client if client is not None else init()
    if query is not None:
        params['q'] = query
    search = client.search(**params)
    recipes = []
    for match in search.matches:
        recipe = client.recipe(match.id)
        recipes.append(recipe)
    return recipes

def parse_ingreds(recipes):
    # gather all ingreds, keep recipe index
    Ingreds = []
    RecipInds = []
    for i, recipe in enumerate(recipes):
        ingreds = recipe['ingredientLines']
        ingreds = [unidecode(ing) for ing in ingreds]
        Ingreds.extend(ingreds)
        RecipInds.extend([i]*len(ingreds))
    # parse
    Ingreds = parse_ingredients.parse(Ingreds)
    # re-add to recipes
    for i in xrange(len(recipes)):
        recipes[i]['ingredientsParsed'] = [ingred for j,ingred in zip(RecipInds, Ingreds) if j == i]
    return recipes

def gather_recipes(query, outfile=None):
    client = init()
    recipes = get_recipes(query, client=client)
    # recipes = parse_ingreds(recipes)
    if outfile is None:
        return recipes
    with open(outfile, 'w') as f:
        json.dump(recipes, f)
    return recipes

def get_simple_recipe(recipe):
    name = recipe['name']
    url = recipe['source']['sourceRecipeUrl']
    for ing in recipe['ingredientsParsed']:
        ing.pop('display')
    ings = recipe['ingredientsParsed']
    ings = [ing['input'] for ing in recipe['ingredientsParsed']]
    return {'name': name, 'url': url, 'ingredients': ings}

def recipe_ingreds(allrecipes):

    print '--------'
    recipes = [r['ingredientsParsed'] for r in allrecipes if not [ing for ing in r['ingredientsParsed'] if 'name' not in ing]]
    
    ingreds = []
    for r in recipes:
        for ing in r:
            if 'name' in ing:
                ingreds.append(ing['name'])

    # ingreds = [ing['name'] for ing in r for r in recipes if 'name' in ing]
    ings = list(set(ingreds))
    print ings
    all_ingreds = [ing for ing in ings if ingreds.count(ing) > 1]
    print '--------'
    print all_ingreds
    print '--------'
    for r0 in allrecipes:
        r = r0['ingredientsParsed']
        keep_r = True
        for ing in r:
            # if 'comment' in ing and ing['comment']:
            #     print ing['comment']
            #     keep_r = False
            #     continue
            if 'name' not in ing:
                keep_r = False
                continue
            if ing['name'] not in all_ingreds:
                keep_r = False
                continue
            if 'qty' not in ing:
                keep_r = False
                continue
        if keep_r:
            print '______'
            # print r
            for ing in r:
                keys = ['name', 'qty', 'unit']
                print ', '.join([ing[k] for k in ing if k in keys])
    rs = [r for r in recipes if all([ing['name'] in all_ingreds for ing in r if 'name' in ing])]
    return

def parse_recipes(infile, outfile=None):
    with open(infile) as f:
        recipes = json.load(f)
    print recipes[0]['ingredientLines']
    recipes = parse_ingreds(recipes)
    # recipe_ingreds(recipes)
    # return
    recipes = [get_simple_recipe(recipe) for recipe in recipes]
    print json.dumps(recipes[0], indent=4)
    if outfile is None:
        return recipes
    with open(outfile, 'w') as f:
        json.dump(recipes, f, indent=4)
    return recipes

if __name__ == '__main__':
    # gather_recipes('chocolate chip cookies', 'rawdata/choc-chip-cookies.json')
    # parse_recipes('rawdata/choc-chip-cookies.json', 'rawdata/choc-chip-cookies_clean.json')
    parse_recipes_simple('rawdata/choc-chip-cookies.json')

    # gather_recipes('yellow cake', 'rawdata/yellow-cake.json')
    # parse_recipes('rawdata/yellow-cake.json', 'rawdata/yellow-cake_clean2.json')
