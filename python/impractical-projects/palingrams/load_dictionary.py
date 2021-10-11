"""
Loads a text file as a list.
"""

import sys

def load(file):
    """
    Loads the dictionary file and converts it to an array of words
    """
    try:
        with open(file) as words_dict:
            loaded_words = words_dict.read().strip().split('\n')
            return [word.lower() for word in loaded_words]
    except IOError as load_error:
        print(f'Error {load_error} in loading file {file}', file=sys.stderr)
        sys.exit(1)
  