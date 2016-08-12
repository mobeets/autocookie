import json
from yummly import Client
from env import YUMMLY_API_ID, YUMMLY_API_KEY

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

def remove_extra_stuff(recipes):
    rs = []
    for r in recipes:
        rs.append({
            'url_ymly': r['attribution']['url'],
            'url_og': r['source']['sourceRecipeUrl'],
            'num': r['numberOfServings'],
            'yld': r['yields'],
            'id': r['id'],
            'name': r['name'],
            'ingredientLines': r['ingredientLines'],
        })
    return rs

def gather_recipes(query, outfile=None):
    client = init()
    recipes = get_recipes(query, client=client)
    recipes = remove_extra_stuff(recipes)
    return json.dumps(recipes)

if __name__ == '__main__':
    import sys
    import os.path
    query = ' '.join(sys.argv[1:])
    print gather_recipes(query)
