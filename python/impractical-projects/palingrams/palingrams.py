"""
Finds all the two-word palingrams from the list of words and prints them.
"""

from ..helpers import load_dictionary

def find_palingrams():
    """
    The main function used to find the plaingrams.
    """
    words = load_dictionary.load('words.txt')
    words = set(words)
    palingram_list = []

    for word in words:
        end = len(word)
        rev_word = word[::-1]

        if end > 1:
            for i in range(end):
                if word[i:] == rev_word[:end-i] and word[:i] in words:
                    palingram_list.append((word, rev_word[end-i:]))
                if word[:i] == rev_word[end-i:] and rev_word[:end-i] in words:
                    palingram_list.append((rev_word[:end-i], word))

    palingram_list = sorted(palingram_list)
    return palingram_list

if __name__ == '__main__':
    palingrams = find_palingrams()
    for (first, second) in palingrams:
        print(f'{first} {second}')
        