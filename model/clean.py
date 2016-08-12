import json
import parser

INGREDS_KEY = 'ingredients'

def show_ings(ings):
    print '--------'
    for ing in ings:
        if 'has_error' in ing:
            ing.pop('has_error')
        if 'input' in ing:
            inp = ing.pop('input')
            print inp
        print ing

def parse_recipe_ingreds(recipe):
    ings = []
    for ing in recipe['ingredientLines']:
        ings.append(parser.simple(ing))
    keep = not(any([ing['has_error'] for ing in ings]))
    [(ing.pop('has_error'), ing.pop('input')) for ing in ings]
    if keep:
        recipe[INGREDS_KEY] = ings
    return recipe, keep

def all_ingreds_in_recipes(recipes):
    # get master list of all ings
    all_ings = []
    for r in recipes:
        all_ings.extend([i['name'] for i in r[INGREDS_KEY]])
    return all_ings

def count_ingreds(recipes):
    all_ings = all_ingreds_in_recipes(recipes)
    ings_set = list(set(all_ings))
    return dict([(ing, all_ings.count(ing)) for ing in ings_set])

def prune_recipes_with_unique_items(recipes, counts, max_unique=1):
    rs = []
    for r in recipes:
        ignores = [i['name'] for i in r[INGREDS_KEY] if counts[i['name']] <= 1]
        if len(ignores) <= max_unique:
            rs.append(r)
    return rs

def parse_and_prune_recipes(infile, outfile=None):
    with open(infile) as f:
        recipes = json.load(f)
    rs = []
    for recipe in recipes:
        recipe, keep = parse_recipe_ingreds(recipe)
        if keep:
            rs.append(recipe)
    
    # remove recipes with more than one unique ingred
    counts = count_ingreds(rs)
    rs = prune_recipes_with_unique_items(rs, counts, max_unique=1)

    # print recipes with non-unique ings
    # for r in rs:
    #     show_ings(r[INGREDS_KEY])
    return json.dumps(rs)

if __name__ == '__main__':
    import sys
    infile = sys.argv[1]
    print parse_and_prune_recipes(infile)
