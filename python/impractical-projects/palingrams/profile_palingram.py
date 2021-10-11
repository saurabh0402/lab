"""
The script is used to profile the palingrams code
"""

import cProfile
import palingrams

if __name__ == '__main__':
    cProfile.run('palingrams.find_palingrams()')
    