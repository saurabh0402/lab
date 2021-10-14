"""
Finds and prints all the palindromes in the words list
"""

from helpers.load_dictionary import load

def main():
    """
    The main function that does all the work
    """
    words = load('words.txt')
    palindromes = [word for word in words if len(word) > 1 and word == word[::-1]]
    print(f'Total palindromes found {len(palindromes)}')
    print(*palindromes, sep='\n')

if __name__ == '__main__':
    main()
