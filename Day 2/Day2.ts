const myInput: Array<Array<string>> = [
['A','Z'],
['C','Z'],
['A','X'],
['B','Z'],
['C','X'],
['A','X'],
['A','X'],
['A','Z'],
['C','Y'],
['A','X'],
['C','Z'],
['C','Y'],
['B','Z'],
['B','X'],
['A','X'],
['B','X'],
['C','X'],
['C','X'],
['C','Z'],
['B','Z'],
['B','Y'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','X'],
['A','Y'],
['B','Y'],
['C','Y'],
['C','Z'],
['B','Y'],
['B','X'],
['C','Z'],
['B','Z'],
['B','Y'],
['B','Y'],
['C','Z'],
['C','X'],
['C','Y'],
['B','Z'],
['B','Z'],
['A','X'],
['A','X'],
['C','Z'],
['C','X'],
['A','X'],
['B','Z'],
['C','X'],
['C','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['A','X'],
['A','X'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['B','Z'],
['A','X'],
['B','Y'],
['C','Z'],
['C','X'],
['B','Z'],
['C','X'],
['C','Y'],
['B','Z'],
['A','X'],
['B','Z'],
['A','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Y'],
['C','Z'],
['C','Y'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['B','Z'],
['B','X'],
['C','X'],
['C','Z'],
['C','Z'],
['A','Y'],
['C','Z'],
['C','X'],
['B','Y'],
['B','Z'],
['C','Z'],
['C','X'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','X'],
['A','X'],
['B','Z'],
['B','Y'],
['B','Z'],
['C','X'],
['C','Y'],
['B','Z'],
['A','X'],
['A','X'],
['A','Z'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','X'],
['A','X'],
['A','X'],
['A','X'],
['C','Z'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','X'],
['B','Z'],
['B','Z'],
['C','X'],
['B','X'],
['C','X'],
['C','X'],
['C','X'],
['B','Z'],
['C','X'],
['B','Z'],
['A','X'],
['A','Z'],
['A','Z'],
['C','Z'],
['C','Y'],
['C','Z'],
['B','Y'],
['C','Z'],
['C','Z'],
['C','X'],
['C','X'],
['A','X'],
['C','Z'],
['A','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['A','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['C','X'],
['C','Y'],
['C','Y'],
['B','Y'],
['B','Z'],
['C','Y'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','X'],
['A','X'],
['B','X'],
['C','Y'],
['B','Z'],
['C','Z'],
['B','X'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['B','Y'],
['A','X'],
['C','Y'],
['C','Z'],
['B','X'],
['A','Z'],
['C','Z'],
['C','X'],
['B','Y'],
['A','Y'],
['C','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['A','Z'],
['B','Y'],
['C','Z'],
['B','X'],
['C','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['A','X'],
['C','X'],
['B','Z'],
['C','Y'],
['C','Z'],
['A','Z'],
['B','Z'],
['A','X'],
['A','X'],
['C','X'],
['A','Y'],
['C','Y'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['A','Z'],
['B','Y'],
['C','Z'],
['C','X'],
['C','X'],
['B','Z'],
['C','X'],
['A','Z'],
['A','X'],
['C','Z'],
['B','X'],
['B','Z'],
['A','Z'],
['B','X'],
['A','X'],
['A','X'],
['B','Z'],
['B','Y'],
['B','Y'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Y'],
['C','X'],
['C','Z'],
['C','Z'],
['B','X'],
['A','X'],
['B','X'],
['C','X'],
['C','X'],
['B','Z'],
['B','Z'],
['C','X'],
['C','X'],
['B','Z'],
['B','Z'],
['A','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['A','Z'],
['A','Z'],
['C','X'],
['B','Z'],
['A','X'],
['C','X'],
['A','X'],
['C','Z'],
['A','X'],
['C','Z'],
['B','X'],
['C','X'],
['B','Z'],
['A','Y'],
['C','Z'],
['B','X'],
['C','Y'],
['C','X'],
['B','Z'],
['C','Y'],
['C','Z'],
['B','X'],
['B','X'],
['B','Z'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','X'],
['A','X'],
['A','X'],
['C','Y'],
['B','X'],
['A','Z'],
['B','Y'],
['C','X'],
['B','Y'],
['C','Z'],
['B','Y'],
['B','Z'],
['C','Y'],
['C','Z'],
['A','Z'],
['C','X'],
['C','X'],
['C','X'],
['C','Z'],
['A','Y'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['C','X'],
['B','X'],
['C','Z'],
['C','X'],
['C','Z'],
['A','X'],
['B','X'],
['C','Z'],
['C','X'],
['B','Z'],
['C','Y'],
['A','Y'],
['A','X'],
['C','X'],
['A','X'],
['B','X'],
['C','X'],
['C','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Y'],
['C','X'],
['B','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['C','X'],
['C','Y'],
['B','X'],
['A','Y'],
['A','Y'],
['C','Y'],
['B','Y'],
['C','X'],
['B','Y'],
['C','X'],
['A','X'],
['C','Z'],
['C','X'],
['C','X'],
['B','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['B','Y'],
['C','X'],
['C','Z'],
['B','X'],
['C','Z'],
['C','Y'],
['B','Z'],
['A','X'],
['B','Z'],
['B','Z'],
['B','X'],
['A','Z'],
['A','X'],
['C','Z'],
['A','Y'],
['A','X'],
['A','X'],
['C','Y'],
['B','Y'],
['C','X'],
['B','Y'],
['B','X'],
['A','X'],
['C','Y'],
['A','X'],
['B','Z'],
['B','Y'],
['B','Y'],
['A','X'],
['A','X'],
['A','Z'],
['C','X'],
['A','X'],
['C','Y'],
['A','X'],
['A','X'],
['C','Y'],
['C','Z'],
['B','Z'],
['B','Y'],
['B','X'],
['A','X'],
['A','X'],
['B','Z'],
['C','Z'],
['B','X'],
['A','Y'],
['A','Z'],
['C','Y'],
['A','X'],
['C','Z'],
['C','X'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['C','X'],
['C','Z'],
['A','Z'],
['C','Y'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['A','X'],
['C','Y'],
['B','Y'],
['C','Y'],
['B','Y'],
['A','X'],
['B','Y'],
['B','Z'],
['B','Z'],
['B','X'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['A','Z'],
['A','Z'],
['C','X'],
['B','Y'],
['B','Y'],
['C','Z'],
['C','X'],
['C','Z'],
['A','Z'],
['A','X'],
['C','Y'],
['C','Z'],
['B','Z'],
['C','Z'],
['A','X'],
['B','Z'],
['A','X'],
['A','Z'],
['A','X'],
['A','X'],
['C','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','X'],
['A','X'],
['B','X'],
['A','X'],
['A','X'],
['A','Z'],
['C','Y'],
['B','Y'],
['B','X'],
['A','X'],
['C','X'],
['B','Y'],
['C','Z'],
['B','X'],
['C','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Y'],
['C','Y'],
['A','X'],
['A','Z'],
['C','X'],
['A','X'],
['C','Z'],
['A','Z'],
['B','X'],
['C','X'],
['A','X'],
['B','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['B','Z'],
['C','X'],
['C','X'],
['C','X'],
['B','Z'],
['B','Z'],
['B','Z'],
['A','X'],
['A','X'],
['A','Z'],
['C','Z'],
['C','X'],
['A','X'],
['B','X'],
['A','Z'],
['C','X'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['C','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['A','Z'],
['A','Z'],
['B','Z'],
['C','X'],
['A','X'],
['A','X'],
['A','X'],
['C','X'],
['C','X'],
['C','X'],
['C','X'],
['B','X'],
['C','X'],
['B','Y'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['B','Y'],
['C','Y'],
['C','X'],
['A','Z'],
['C','Y'],
['C','Z'],
['A','X'],
['C','X'],
['C','Z'],
['C','Z'],
['A','X'],
['C','Y'],
['B','Y'],
['C','X'],
['C','Z'],
['C','X'],
['B','X'],
['C','Z'],
['B','Z'],
['B','Y'],
['A','X'],
['C','X'],
['C','Z'],
['B','Z'],
['B','X'],
['A','Z'],
['C','Y'],
['C','X'],
['C','Y'],
['B','Z'],
['A','Z'],
['C','X'],
['C','X'],
['A','X'],
['A','Y'],
['B','Y'],
['C','Y'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['A','X'],
['A','X'],
['B','X'],
['B','Y'],
['A','Z'],
['C','Z'],
['C','Y'],
['B','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['A','X'],
['C','Z'],
['C','X'],
['C','Y'],
['C','X'],
['C','X'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['C','X'],
['C','X'],
['B','X'],
['C','X'],
['B','Y'],
['A','X'],
['C','X'],
['A','X'],
['C','Y'],
['C','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','X'],
['B','Z'],
['A','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Y'],
['C','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['B','Z'],
['C','X'],
['B','X'],
['C','Z'],
['C','Y'],
['B','X'],
['C','Z'],
['C','Y'],
['A','X'],
['B','Z'],
['B','Z'],
['C','Y'],
['B','Y'],
['B','X'],
['C','Y'],
['C','X'],
['C','X'],
['B','Z'],
['B','Y'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Y'],
['C','X'],
['C','Z'],
['C','Y'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['C','Z'],
['C','X'],
['A','Z'],
['B','Z'],
['B','X'],
['C','X'],
['C','Z'],
['A','Z'],
['C','X'],
['C','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['A','X'],
['A','Z'],
['B','Z'],
['A','Z'],
['A','X'],
['B','Z'],
['C','X'],
['B','Z'],
['B','Z'],
['B','Y'],
['A','X'],
['B','X'],
['B','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['B','Z'],
['C','X'],
['A','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['B','Y'],
['C','Z'],
['B','Z'],
['B','Y'],
['C','X'],
['A','Z'],
['B','Y'],
['A','X'],
['A','X'],
['C','X'],
['C','Z'],
['A','Z'],
['C','X'],
['C','Z'],
['A','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['C','Y'],
['C','Z'],
['A','X'],
['C','X'],
['C','Z'],
['B','Y'],
['B','Z'],
['A','X'],
['C','X'],
['B','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['C','Y'],
['C','Z'],
['B','Z'],
['C','X'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','X'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','X'],
['B','Z'],
['C','Y'],
['B','X'],
['C','Z'],
['A','X'],
['B','Y'],
['C','Z'],
['B','X'],
['B','X'],
['C','X'],
['A','Z'],
['C','X'],
['C','X'],
['C','Z'],
['A','Y'],
['C','Y'],
['C','Z'],
['B','Z'],
['A','X'],
['B','Z'],
['C','Z'],
['A','Z'],
['C','Y'],
['B','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['A','Z'],
['C','X'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['A','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['C','X'],
['A','Z'],
['B','Y'],
['B','Z'],
['A','X'],
['C','Y'],
['C','Z'],
['B','Z'],
['B','Z'],
['A','X'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['C','X'],
['A','Y'],
['C','Z'],
['C','X'],
['C','Z'],
['B','Y'],
['C','Y'],
['B','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['A','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Y'],
['C','Z'],
['A','X'],
['B','Z'],
['A','X'],
['B','Y'],
['C','X'],
['B','Z'],
['C','X'],
['B','X'],
['A','X'],
['B','Y'],
['A','Y'],
['C','X'],
['B','Y'],
['B','Y'],
['B','Z'],
['C','Z'],
['A','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['A','X'],
['B','Z'],
['A','X'],
['A','X'],
['B','Y'],
['B','Z'],
['A','Y'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['A','Z'],
['C','Y'],
['B','Z'],
['C','X'],
['C','Y'],
['B','Z'],
['B','X'],
['A','X'],
['C','Z'],
['C','X'],
['A','Z'],
['A','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['B','X'],
['B','Z'],
['C','X'],
['A','Y'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['A','X'],
['A','Z'],
['C','X'],
['B','Z'],
['C','X'],
['C','Z'],
['C','X'],
['A','X'],
['B','X'],
['C','X'],
['B','Z'],
['C','X'],
['A','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['B','Y'],
['A','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['A','X'],
['A','X'],
['C','X'],
['B','Z'],
['C','Z'],
['B','Z'],
['A','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['C','Y'],
['A','Z'],
['A','X'],
['B','Y'],
['A','X'],
['B','X'],
['C','X'],
['C','Z'],
['C','Y'],
['C','X'],
['C','Z'],
['C','X'],
['C','X'],
['B','X'],
['B','Z'],
['B','Y'],
['C','Y'],
['C','Z'],
['C','X'],
['C','Y'],
['C','X'],
['C','X'],
['C','Z'],
['C','Y'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['C','Y'],
['C','Z'],
['B','X'],
['A','Y'],
['C','X'],
['B','X'],
['A','Z'],
['C','Z'],
['C','X'],
['C','Y'],
['B','X'],
['C','Z'],
['A','X'],
['B','Z'],
['B','Z'],
['A','X'],
['A','X'],
['B','Z'],
['B','Z'],
['A','Z'],
['A','X'],
['B','X'],
['C','Y'],
['A','Z'],
['C','Z'],
['B','Z'],
['A','X'],
['B','X'],
['B','Z'],
['A','X'],
['A','Z'],
['C','Y'],
['B','X'],
['B','Y'],
['C','Z'],
['C','X'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Y'],
['B','X'],
['A','Z'],
['B','Y'],
['A','X'],
['A','Z'],
['B','Z'],
['C','X'],
['A','X'],
['C','X'],
['B','Y'],
['A','Z'],
['C','X'],
['C','X'],
['A','X'],
['A','X'],
['A','X'],
['C','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','X'],
['B','Y'],
['C','Z'],
['A','X'],
['C','Z'],
['A','X'],
['A','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['C','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['C','X'],
['C','Y'],
['B','Y'],
['B','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['B','Y'],
['C','Y'],
['C','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['A','Y'],
['B','Y'],
['C','Y'],
['A','X'],
['A','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','Z'],
['A','X'],
['A','X'],
['C','Z'],
['C','X'],
['B','Z'],
['B','Z'],
['A','Z'],
['C','Z'],
['A','Z'],
['C','Y'],
['B','X'],
['C','Z'],
['A','X'],
['B','Y'],
['A','X'],
['C','Z'],
['C','Z'],
['A','Z'],
['A','Z'],
['A','X'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['C','Z'],
['B','Z'],
['B','Z'],
['A','X'],
['A','X'],
['C','X'],
['B','X'],
['B','X'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','X'],
['C','Y'],
['B','Z'],
['C','X'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Y'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['C','X'],
['A','X'],
['B','Y'],
['C','Z'],
['C','Z'],
['A','X'],
['B','Y'],
['B','Y'],
['B','Y'],
['B','Z'],
['A','X'],
['B','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['A','Z'],
['C','X'],
['C','Y'],
['C','X'],
['B','Z'],
['A','X'],
['C','Z'],
['C','X'],
['A','Z'],
['A','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['C','X'],
['B','Z'],
['C','X'],
['B','Z'],
['C','X'],
['C','X'],
['B','Y'],
['C','Z'],
['C','Y'],
['B','Z'],
['C','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','X'],
['A','X'],
['C','Y'],
['C','X'],
['A','X'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['A','Z'],
['B','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['A','Z'],
['C','Z'],
['A','X'],
['B','Y'],
['C','X'],
['A','X'],
['C','Z'],
['B','Z'],
['A','X'],
['B','Y'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['B','Z'],
['A','X'],
['B','Z'],
['C','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','X'],
['B','Y'],
['B','X'],
['C','Y'],
['A','Z'],
['C','Y'],
['C','X'],
['C','Y'],
['C','X'],
['C','X'],
['A','Z'],
['B','Z'],
['A','Z'],
['A','X'],
['A','X'],
['A','X'],
['C','X'],
['C','Z'],
['A','X'],
['B','X'],
['A','X'],
['C','X'],
['B','Z'],
['C','Z'],
['C','Y'],
['A','Z'],
['C','X'],
['C','Z'],
['B','Y'],
['B','Z'],
['A','X'],
['A','Z'],
['C','Z'],
['C','X'],
['B','Y'],
['A','X'],
['B','Y'],
['C','Y'],
['A','X'],
['A','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['C','X'],
['C','Y'],
['C','X'],
['C','X'],
['C','Y'],
['A','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['C','Z'],
['B','Y'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['C','X'],
['C','Z'],
['A','X'],
['A','Z'],
['B','Z'],
['B','Y'],
['A','X'],
['C','X'],
['C','Y'],
['A','X'],
['B','X'],
['C','X'],
['C','X'],
['A','Z'],
['C','X'],
['C','Y'],
['B','X'],
['C','Z'],
['A','Z'],
['C','X'],
['A','X'],
['B','Z'],
['C','Y'],
['C','Z'],
['C','X'],
['A','Y'],
['C','Z'],
['C','Y'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['B','X'],
['A','X'],
['B','Y'],
['B','Z'],
['B','Z'],
['C','X'],
['C','X'],
['C','Z'],
['A','Z'],
['A','X'],
['B','X'],
['B','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','X'],
['C','X'],
['B','Z'],
['C','Y'],
['B','Z'],
['C','X'],
['B','X'],
['C','X'],
['A','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['A','Y'],
['C','Z'],
['A','Z'],
['C','X'],
['B','Y'],
['C','X'],
['A','Z'],
['B','Y'],
['B','X'],
['C','Z'],
['C','X'],
['B','Y'],
['C','Z'],
['B','Z'],
['C','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['A','X'],
['C','X'],
['C','X'],
['B','Z'],
['C','Z'],
['A','X'],
['C','X'],
['C','X'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','Y'],
['B','Z'],
['B','X'],
['C','Z'],
['A','X'],
['A','X'],
['B','Y'],
['C','X'],
['C','X'],
['B','Y'],
['C','Z'],
['A','Z'],
['B','Y'],
['B','Y'],
['C','X'],
['C','X'],
['C','X'],
['C','X'],
['A','X'],
['B','Z'],
['B','Y'],
['B','Z'],
['C','X'],
['C','Z'],
['B','Z'],
['B','Y'],
['C','Z'],
['B','Z'],
['A','X'],
['C','X'],
['C','X'],
['C','Z'],
['A','X'],
['C','X'],
['C','X'],
['C','Z'],
['C','Y'],
['B','X'],
['C','X'],
['C','Y'],
['B','Z'],
['C','X'],
['C','Y'],
['C','Z'],
['C','Z'],
['A','Z'],
['B','X'],
['C','Z'],
['B','X'],
['A','Z'],
['C','Z'],
['C','X'],
['C','X'],
['A','Z'],
['C','X'],
['B','Z'],
['A','Z'],
['C','X'],
['B','X'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','Y'],
['C','X'],
['C','Y'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['C','Y'],
['C','Y'],
['A','X'],
['C','Z'],
['A','X'],
['B','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['B','X'],
['B','Z'],
['A','Z'],
['A','Z'],
['B','Z'],
['B','Y'],
['B','Z'],
['C','X'],
['B','Y'],
['B','Z'],
['A','X'],
['B','X'],
['C','Y'],
['A','X'],
['C','Z'],
['B','Z'],
['C','X'],
['A','X'],
['B','X'],
['C','Y'],
['B','Z'],
['C','Z'],
['A','X'],
['C','X'],
['B','Z'],
['C','X'],
['A','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['B','X'],
['C','X'],
['A','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['B','X'],
['C','X'],
['C','Z'],
['B','Z'],
['B','Z'],
['A','X'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Y'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['A','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['B','Y'],
['B','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['B','X'],
['C','X'],
['B','Z'],
['A','X'],
['C','X'],
['A','X'],
['C','X'],
['C','X'],
['A','Z'],
['B','Y'],
['B','X'],
['A','X'],
['C','Z'],
['B','Y'],
['C','X'],
['A','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['A','Y'],
['A','Z'],
['C','X'],
['C','Y'],
['A','Y'],
['C','X'],
['B','Y'],
['C','X'],
['C','Y'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','Z'],
['B','X'],
['C','Z'],
['B','X'],
['B','X'],
['C','Z'],
['A','Z'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['B','X'],
['C','Z'],
['A','X'],
['C','X'],
['B','Z'],
['C','X'],
['C','Z'],
['B','Y'],
['C','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','X'],
['B','Z'],
['C','Y'],
['C','Z'],
['B','Z'],
['A','X'],
['C','X'],
['C','X'],
['C','X'],
['C','Z'],
['A','Z'],
['A','Z'],
['B','Y'],
['B','Z'],
['B','Z'],
['C','X'],
['A','X'],
['C','X'],
['C','X'],
['A','X'],
['B','X'],
['B','Z'],
['B','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['C','X'],
['B','X'],
['A','X'],
['A','Z'],
['C','X'],
['C','Z'],
['B','Z'],
['B','Y'],
['C','Z'],
['A','X'],
['B','X'],
['B','Z'],
['C','Z'],
['C','Y'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','Y'],
['C','X'],
['A','X'],
['B','Z'],
['C','Y'],
['A','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['A','Z'],
['A','X'],
['C','Z'],
['C','Y'],
['C','Z'],
['C','Y'],
['A','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['C','X'],
['C','Z'],
['C','Y'],
['C','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['B','Z'],
['C','Z'],
['C','X'],
['C','X'],
['A','Z'],
['B','Z'],
['B','Z'],
['B','Y'],
['B','Z'],
['C','Y'],
['B','Z'],
['C','Z'],
['A','X'],
['C','X'],
['C','X'],
['B','X'],
['C','Z'],
['A','X'],
['C','Y'],
['B','X'],
['C','Z'],
['C','Z'],
['B','Y'],
['C','Z'],
['B','Y'],
['C','Z'],
['A','Z'],
['C','Z'],
['B','Y'],
['A','X'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['C','Z'],
['B','Y'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['A','X'],
['B','Z'],
['C','X'],
['C','Y'],
['A','Z'],
['B','Z'],
['C','X'],
['A','Z'],
['C','Y'],
['B','Y'],
['C','Y'],
['C','Z'],
['C','Z'],
['A','Z'],
['A','Z'],
['C','X'],
['B','Y'],
['C','Z'],
['B','Z'],
['A','X'],
['B','Z'],
['A','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','X'],
['B','Z'],
['C','X'],
['A','Y'],
['C','Z'],
['B','Z'],
['C','X'],
['C','X'],
['C','X'],
['B','X'],
['B','Y'],
['A','Y'],
['B','Z'],
['A','X'],
['C','X'],
['C','Z'],
['B','Y'],
['C','Z'],
['C','Z'],
['B','X'],
['B','X'],
['A','Y'],
['C','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['B','Z'],
['B','X'],
['A','X'],
['B','X'],
['A','Z'],
['B','X'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','X'],
['C','X'],
['A','X'],
['C','Z'],
['C','X'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['A','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Y'],
['C','X'],
['C','Z'],
['B','Z'],
['B','Z'],
['C','Y'],
['B','Y'],
['C','X'],
['C','Y'],
['A','Z'],
['A','X'],
['A','X'],
['A','Z'],
['C','X'],
['C','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['C','X'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['B','X'],
['B','Z'],
['A','X'],
['C','Z'],
['B','Z'],
['A','Z'],
['C','X'],
['C','X'],
['A','Z'],
['C','Y'],
['B','Y'],
['C','X'],
['B','Z'],
['C','X'],
['C','Z'],
['B','Y'],
['A','Y'],
['B','Y'],
['A','X'],
['C','Y'],
['C','X'],
['C','Z'],
['A','X'],
['A','Z'],
['B','Z'],
['B','Y'],
['C','Y'],
['B','Z'],
['A','Y'],
['B','X'],
['C','Z'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['C','Y'],
['A','Z'],
['B','Z'],
['C','Z'],
['A','Z'],
['C','Y'],
['C','Z'],
['B','X'],
['C','X'],
['A','Z'],
['C','Z'],
['B','Z'],
['A','X'],
['B','Y'],
['C','X'],
['A','X'],
['B','Y'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Y'],
['A','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','X'],
['C','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['C','Y'],
['A','X'],
['B','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['B','Y'],
['C','Z'],
['A','X'],
['C','Y'],
['B','Z'],
['C','Z'],
['A','X'],
['C','Y'],
['A','Z'],
['C','X'],
['B','Y'],
['C','X'],
['B','Z'],
['C','Y'],
['A','Z'],
['C','X'],
['C','X'],
['C','Y'],
['C','X'],
['A','X'],
['B','Z'],
['C','X'],
['C','X'],
['C','X'],
['B','Z'],
['B','Y'],
['B','Z'],
['C','X'],
['B','Y'],
['C','Z'],
['A','X'],
['C','Z'],
['A','Z'],
['C','Y'],
['C','X'],
['C','Z'],
['A','Z'],
['B','Z'],
['B','Z'],
['C','X'],
['A','Z'],
['A','X'],
['C','Z'],
['B','X'],
['A','X'],
['A','X'],
['B','X'],
['C','X'],
['C','X'],
['A','Z'],
['B','Z'],
['C','Z'],
['C','X'],
['B','Z'],
['A','Z'],
['A','Z'],
['C','Z'],
['C','X'],
['B','Y'],
['C','X'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['A','X'],
['C','X'],
['C','Y'],
['C','Z'],
['A','X'],
['C','Y'],
['B','Z'],
['B','Z'],
['A','X'],
['C','Z'],
['B','Z'],
['B','Y'],
['C','Y'],
['C','X'],
['A','Z'],
['B','Y'],
['A','X'],
['A','Z'],
['B','Z'],
['C','X'],
['B','Z'],
['A','Z'],
['C','Y'],
['C','X'],
['C','X'],
['C','Z'],
['B','X'],
['A','X'],
['C','Z'],
['C','Z'],
['C','X'],
['B','Y'],
['C','Z'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','Y'],
['B','Z'],
['A','X'],
['B','Z'],
['A','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['A','Z'],
['A','X'],
['A','X'],
['B','Y'],
['C','Z'],
['A','Y'],
['B','Z'],
['C','Z'],
['A','Z'],
['A','Y'],
['C','Z'],
['C','Z'],
['A','X'],
['C','Y'],
['C','Z'],
['C','Z'],
['A','Z'],
['C','Y'],
['C','Z'],
['A','X'],
['B','Y'],
['C','Z'],
['A','X'],
['B','X'],
['C','X'],
['A','Z'],
['C','Z'],
['A','Z'],
['C','Y'],
['C','Z'],
['C','Y'],
['A','X'],
['C','X'],
['B','Z'],
['B','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Y'],
['C','X'],
['B','Z'],
['A','X'],
['C','Y'],
['B','Z'],
['A','Z'],
['C','Z'],
['C','X'],
['B','X'],
['C','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['C','X'],
['B','X'],
['C','Y'],
['A','X'],
['A','Z'],
['C','X'],
['C','Y'],
['C','X'],
['C','X'],
['A','Z'],
['A','Z'],
['C','X'],
['C','X'],
['C','X'],
['A','X'],
['A','X'],
['C','X'],
['A','X'],
['A','X'],
['A','X'],
['C','Z'],
['B','Z'],
['C','Y'],
['C','Z'],
['C','Z'],
['C','X'],
['C','Y'],
['A','X'],
['B','Z'],
['C','Y'],
['B','Y'],
['A','X'],
['A','X'],
['A','Z'],
['A','Z'],
['C','Y'],
['C','Y'],
['C','X'],
['C','Z'],
['A','X'],
['A','X'],
['C','Z'],
['C','Z'],
['B','Z'],
['B','Z'],
['C','Z'],
['A','X'],
['C','X'],
['C','X'],
['C','X'],
['A','Z'],
['C','Z'],
['A','Z'],
['B','Y'],
['B','Y'],
['C','X'],
['B','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','Y'],
['B','Z'],
['B','X'],
['B','Z'],
['C','Z'],
['A','Z'],
['A','X'],
['C','X'],
['A','Y'],
['C','Z'],
['A','X'],
['C','X'],
['A','X'],
['B','X'],
['C','X'],
['B','Z'],
['A','X'],
['C','Z'],
['B','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['B','Z'],
['C','Z'],
['A','Z'],
['A','X'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','X'],
['C','Z'],
['A','Z'],
['B','Y'],
['C','Z'],
['B','X'],
['B','Z'],
['C','X'],
['B','X'],
['A','Z'],
['C','Z'],
['C','X'],
['A','Y'],
['A','X'],
['C','X'],
['B','Z'],
['C','X'],
['C','Y'],
['C','Y'],
['C','X'],
['C','Y'],
['C','Y'],
['B','X'],
['B','Z'],
['A','X'],
['B','Y'],
['B','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['C','X'],
['C','X'],
['B','Z'],
['B','Z'],
['C','X'],
['C','X'],
['A','X'],
['C','X'],
['B','Y'],
['B','X'],
['C','Z'],
['B','Z'],
['A','X'],
['A','Z'],
['A','Y'],
['C','Z'],
['A','Z'],
['B','Z'],
['A','Z'],
['C','X'],
['C','X'],
['A','Y'],
['C','X'],
['B','Z'],
['B','Y'],
['B','Y'],
['C','Z'],
['B','X'],
['B','Z'],
['A','X'],
['B','Y'],
['C','Z'],
['C','Z'],
['A','X'],
['B','Y'],
['A','Z'],
['C','Z'],
['C','Z'],
['B','Z'],
['A','Z'],
['C','Z'],
['B','Z'],
['C','Y'],
['C','X'],
['B','Z'],
['A','Z'],
['A','X'],
['A','X'],
['A','X'],
['C','Z'],
['A','Z'],
['A','X'],
['C','Y'],
['C','Y'],
['B','Z'],
['C','Z'],
['B','Y'],
['C','X'],
['B','Z'],
['C','X'],
['B','Z'],
['B','Y'],
['C','Z'],
['A','X'],
['A','X'],
['B','Z'],
['A','Z'],
['B','Z'],
['C','Z'],
['C','Z'],
['A','X'],
['C','X'],
['C','Z'],
['A','Z'],
['A','X'],
['C','Z'],
['C','X'],
['B','Z'],
['C','Z'],
['A','Z'],
['C','Z'],
['B','X'],
['B','Z'],
['A','X'],
['C','Z'],
['C','Z'],
['A','X'],
['C','X'],
['A','Z'],
['C','Z'],
['A','X'],
['C','Z'],
['A','Z'],
['C','X'],
['C','X'],
['B','Z'],
['C','Z'],
['C','X'],
['B','X'],
['A','X'],
['B','Z'],
['B','Y'],
['B','X'],
['C','Z'],
['B','X'],
['B','Z'],
['C','X'],
['C','Z'],
['B','Z'],
['A','Z'],
['C','Z'],
['B','Z'],
['C','Z'],
['B','X'],
['B','Y'],
['C','Z'],
['C','Y'],
['C','Z'],
['B','Y'],
['B','Z'],
['C','Z'],
['A','X'],
['C','X'],
['C','X'],
['B','Z'],
['B','Z'],
['A','X'],
['A','Y'],
['A','Z'],
['C','X'],
['B','X'],
['C','Z'],
['C','X'],
['B','Z'],
['C','X'],
['A','X'],
['A','X'],
['B','Z'],
['B','Y'],
['B','Z'],
['B','Y'],
['C','Y'],
['C','Z'],
['B','Z'],
['C','Y'],
['B','Z'],
['C','X'],
['A','X'],
['B','Y'],
['C','Z'],
['A','X'],
['A','X'],
['C','X'],
['C','Z'],
['B','Z'],
['C','Y'],
['C','Z'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['B','Z'],
['C','Y'],
['C','Z'],
['A','X'],
['C','X'],
['B','X'],
['A','X'],
['B','X'],
['C','X'],
['C','Z'],
['A','Z'],
['A','X'],
['A','Z'],
['A','X'],
['A','X'],
['A','X'],
['A','Y'],
['A','X'],
['B','Z'],
['B','Y'],
['A','X'],
['C','Z'],
['A','Z'],
['C','X'],
['C','Z'],
['A','Z'],
['A','Y'],
['C','Z'],
['B','Z'],
['B','Z'],
['B','Z'],
['C','X'],
['A','X'],
['A','X'],
['C','Z'],
['C','X'],
['A','X'],
['C','Z'],
['C','X'],
['A','X'],
['C','Y'],
['B','Z'],
['C','Z'],
['C','X'],
['C','X'],
['C','X'],
['C','Z'],
['C','X'],
['C','Y'],
['B','Y'],
['C','X'],
['B','Y'],
['B','Z'],
['C','X'],
['C','Z'],
['A','X'],
['B','Z'],
['C','Z'],
['C','X'],
['A','Y'],
]

/* A for Rock, B for Paper, and C for Scissors
The score for a single round is the score for the shape you selected 
(1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome 
of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
X for Rock, Y for Paper, and Z for Scissors */



let totalScore = 0

function calculateScore(rounds: Array<Array<string>>) {
    rounds.forEach((round) => {
        if (round[1] === 'X') {
            totalScore += 1
            if (round[0] === 'A') {
                totalScore += 3
            }
            else if (round[0] === 'C') {
                totalScore += 6
            }
        }
        else if (round[1] === 'Y') {
            totalScore += 2
            if (round[0] === 'B') {
                totalScore += 3
            }
            else if (round[0] === 'A') {
                totalScore += 6
            }
        }
        else if (round[1] === 'Z') {
            totalScore += 3
            if (round[0] === 'C') {
                totalScore += 3
            }
            else if (round[0] === 'B') {
                totalScore += 6
            }
        }
    })
}

let newScore = 0

myInput.forEach((round) => {
    if (round[1] === 'Y') {
        newScore += 3
        if (round[0] === 'A') {
            newScore += 1
        }
        else if (round[0] === 'B') {
            newScore += 2
        }
        else if (round[0] === 'C') {
            newScore += 3
        }
    }
    else if (round[1] === 'X') {
        if (round[0] === 'A') {
            newScore += 3
        }
        else if (round[0] === 'B') {
            newScore += 1
        }
        else if (round[0] === 'C') {
            newScore += 2
        }
    }
    else if (round[1] === 'Z') {
        newScore += 6
        if (round[0] === 'A') {
            newScore += 2
        }
        else if (round[0] === 'B') {
            newScore += 3
        }
        else if (round[0] === 'C') {
            newScore += 1
        }
    }
    }
)

console.log(newScore)