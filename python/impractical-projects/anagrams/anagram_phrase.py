"""
An interactive program that allows user to create an anagram phrase from their name
"""

from helpers.load_dictionary import load
from collections import Counter

def find_anagrams(name, words):
  anagrams = []
  name_counter = Counter(name)

  for word in words:
    failure = False
    word_counter = Counter(word)

    for letter in word:
      if letter not in name_counter or word_counter[letter] > name_counter[letter]:
        failure = True
        break
    
    if not failure:
      anagrams.append(word)
  
  return anagrams

def choice_handler(name, anagrams):
  print('Here are your choices:')
  for i, word in enumerate(anagrams):
    print(f'{i+1}. {word}')

  while True:
    try:
      choice = input('Enter your choice (Enter q to exit): ')
      if choice == 'q':
        break

      choice = int(choice)
      if choice <= len(anagrams):
        chosen_word = anagrams[choice-1]
        letters_in_name = list(name)
        for letter in chosen_word:
          letters_in_name.remove(letter)
        
        return (chosen_word, ''.join(letters_in_name))
      else:
        raise Exception('Invalid choice.')
    except Exception as e:
      print('Invalid choice! Please choose again')
      continue

def main():
  words = load('words.txt')
  inputName = input('Enter you name: ')
  inputName = inputName.lower().replace(' ', '')

  # Used for looping
  name = inputName
  phrase = ''

  while name:
    print(f'Remaining Letters in your name: {name}')
    anagrams = find_anagrams(name, words)
    (chosen_word, remaining_name) = choice_handler(name, anagrams)

    name = remaining_name
    phrase = f'{phrase} {chosen_word}'
  
    if len(name) == 0:
      print(f"Here's your awesome anagram: {phrase}")
      choice = input('Done or retry? (R for retry, anything else to exit): ')

      if choice.lower() == 'r':
        name = inputName
        phrase = ''
      else:
        break

if __name__ == '__main__':
  main()