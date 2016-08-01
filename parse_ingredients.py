#!/usr/bin/env python
import os
import json
import tempfile
import subprocess
from ingredient_phrase_tagger.ingredient_phrase_tagger.training import utils

def parse(data, mdlfile = "ingredient_phrase_tagger/tmp/model_file"):
    mdlfile = os.path.abspath(mdlfile)

    # preprocess data, write to tmpfile
    data = utils.export_data(data)
    _, tmpfile = tempfile.mkstemp()
    with open(tmpfile, 'w') as g:
        g.write(data)

    # run model, get results
    proc = subprocess.Popen(["crf_test", "-v", "1", "-m", mdlfile, tmpfile], stdout=subprocess.PIPE)
    (out, err) = proc.communicate()
    return utils.import_data(out.split('\n'))
