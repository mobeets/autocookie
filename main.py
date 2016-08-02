import json
from yummly import Client
from unidecode import unidecode
from env import YUMMLY_API_ID, YUMMLY_API_KEY
import parse_ingredients

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
    return {'name': name, 'url': url, 'ingredients': ings}

def parse_recipes(infile, outfile=None):
    with open(infile) as f:
        recipes = json.load(f)
    print recipes[0].keys()
    recipes = parse_ingreds(recipes)
    recipes = [get_simple_recipe(recipe) for recipe in recipes]
    print json.dumps(recipes[0], indent=4)
    if outfile is None:
        return recipes
    with open(outfile, 'w') as f:
        json.dump(recipes, f, indent=4)
    return recipes

def recipe_ratios(infile, outfile):
    with open(infile) as f:
        recipes = json.load(f)
    
    return recipes

if __name__ == '__main__':
    # gather_recipes('yellow cake', 'data/yellow-cake.json')
    parse_recipes('data/yellow-cake.json', 'data/yellow-cake_clean.json')
