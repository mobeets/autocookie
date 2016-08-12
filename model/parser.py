import string
from fractions import Fraction
from unidecode import unidecode

table = string.maketrans("","")

UNIT_LOOKUP = {
    'g': 'grams',
    'oz': 'ounces',
    'ozs': 'ounces',
    'oz.': 'ounces',
    'ozs.': 'ounces',
    'ounce': 'ounces',
    'ounces': 'ounces',
    'C': 'cup',
    'c': 'cup',
    'cup': 'cup',
    'cups': 'cup',
    'teaspoon': 'tsp',
    'teaspoons': 'tsp',
    't': 'tsp',
    'tsp': 'tsp',
    'tsp.': 'tsp',
    'T': 'Tbsp',
    'tablespoon': 'Tbsp',
    'tablespoons': 'Tbsp',
    'Tbsp.': 'Tbsp',
    'Tbsp': 'Tbsp',
    'tbsp': 'Tbsp',
    'tbsp.': 'Tbsp',
    'bag': 'package',
    'pkg': 'package',
    'package': 'package',
    'can': 'package',
}
STOPWORDS = ['small', 'medium', 'creamy', 'large', 'of', 'packed', 'chopped', 'mini', 'softened', 'pure', 'firmly', 'melted', 'slightly', 'cooled', 'granulated', 'cut', 'lightly', 'grated', 'into', 'and', 'vegan', 'caster', 'refined', 'semisweet', 'kosher', 'natural', 'coarse', 'coarsely', 'crunchy', 'light', 'high-quality', 'smooth', 'beaten', 'dark']

def frac_from_str(num):
    num = num.strip()
    if len(num.split()) > 1 and '/' not in num:
        # things like '1 12'
        raise
    return float(sum(Fraction(s) for s in num.split()))

def read_until_numbers_end(line):
    is_num = [x.isdigit() or x=='/' or x==' ' for x in line]
    ind = is_num.index(False)
    return line[:ind].strip(), line[ind:].strip()

def read_until_units_found(line, units=UNIT_LOOKUP):
    matches = [units[unit] for unit in units if unit == line.split()[0]]
    if matches:
        return (matches[0], ' '.join(line.split()[1:]))
    return ('', line)

def remove_parens(line):
    while '(' in line and ')' in line:
        ind1 = line.index('(')
        ind2 = line.index(')')
        line = line[:ind1] + line[ind2+1:]
    return line

def remove_stop_words(line, stopwords=STOPWORDS):
    line = ' '.join([word for word in line.split() if word not in stopwords])
    return line.split(' or ')[0].strip()

def remove_punctuation(line):
    return line.translate(table, string.punctuation.replace('-',''))

def get_errors(line):
    still_has_num = [x.isdigit() for x in line]
    return 'plus' in line or 'minus' in line or any(still_has_num)

def simple(line):
    line_og = line
    line = line.replace(u'\xbe', ' 3/4')
    line = line.replace(u'\xbd', ' 1/2')
    line = line.replace(u'\xbc', ' 1/4')
    line = unidecode(line)
    line = remove_parens(line)
    nums, line = read_until_numbers_end(line)
    units, line = read_until_units_found(line)
    line = line.lower()
    line = remove_stop_words(line)
    line = remove_punctuation(line)
    has_error = get_errors(line)
    try:
        nums = frac_from_str(nums)
    except:
        has_error = True
    return {'qty': nums, 'unit': units, 'name': line, 'has_error': has_error, 'input': line_og}
