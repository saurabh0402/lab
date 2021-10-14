"""
Finds anagrams
"""

from helpers.load_dictionary import load

def main():
    """
    Takes a word as user input and find all its anagrams and print it.
    """
    anagrams = []
    words_list = load('words.txt')

    word_to_find_anagram_for = input('Enter the word to find the anagrams for: ')
    word_to_find_anagram_for = word_to_find_anagram_for.lower()

    for word in words_list:
        word = word.lower()
        if (word != word_to_find_anagram_for and
            sorted(word) == sorted(word_to_find_anagram_for)):
            anagrams.append(word)

    print("Anagrams:", *anagrams, sep='\n\t')

if __name__ == '__main__':
    main()
