
- get a list of recipes for yellow cake
- for each recipe, get a list of ingredient strings (e.g., "2 cups flour"
- write an ingredient string parser


- tag ingredients with NYTimes POS tagger: https://github.com/NYTimes/ingredient-phrase-tagger
- scrape nytimes recipes (these include quantities and measurements!)

python main.py
cd ingredient-phrase-tagger
python bin/parse-ingredients.py ../data/lines.txt > ../data/results.txt
python bin/convert-to-json.py ../data/results.txt > ../data/results.json
