# Python Notes

Python is a versatile, high-level programming language known for its simplicity and vast ecosystem. Below is a comprehensive guide to Python, covering core concepts, sorting algorithms, vectorized algorithms, and other essential aspects.

---

## Table of Contents
1. [Python Basics](index.md)
2. [Data Structures](Data_Structures.md)
3. [Sorting Algorithms](Sorting_Algorithms_Documentation.md)
4. [Vectorized Algorithms](Vectorized_Algorithms_Documentation.md)
5. [Writing Test Cases](Python_Testing_Documentation.md)
6. [Error Handling](Error_Handling_in_Python.md)
7. [Try it now!](/sandbox)

---

## Basic Syntax

### Printing and Comments
- Use `print()` to display output.
```python
print("Hello, World!")
```

- Comments are written using `#`.
```python
# This is a single-line comment
```

### Variables
- Variables store data and do not need explicit type declaration.
```python
x = 10       # Integer
name = "Alice" # String
is_valid = True # Boolean
```

### Data Types
- Common types: `int`, `float`, `str`, `bool`, `list`, `dict`, `tuple`, `set`.
```python
num = 5        # int
grade = 3.8    # float
text = "Hello" # str
items = [1, 2, 3] # list
data = {"key": "value"} # dict
```

### Input
- Get user input with `input()` (returns a string).
```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

---

## For Loops

### Basic Loop
- Iterate over a range of numbers:
```python
for i in range(5):
    print(i)
```
Output:
```
0
1
2
3
4
```

### Looping Through Collections
- Iterate over lists, strings, or other iterable objects:
```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

- Loop through characters in a string:
```python
for char in "Python":
    print(char)
```

### Nested Loops
- A loop inside another loop:
```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

### Using `break` and `continue`
- Exit a loop early with `break`:
```python
for i in range(5):
    if i == 3:
        break
    print(i)
```

- Skip the current iteration with `continue`:
```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

---

## Rudimentary Notes on Python

### Indentation
- Python uses indentation (spaces or tabs) to define code blocks.
```python
if True:
    print("This is indented")
```

### Functions
- Define reusable blocks of code with `def`.
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

### Error Handling
- Use `try` and `except` to handle errors.
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

### Common Libraries
- Import libraries for extended functionality.
```python
import math
print(math.sqrt(16))
```

### Example Program
```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

number = int(input("Enter a number: "))
print(f"Factorial of {number} is {factorial(number)}")


---

This guide provides a strong foundation for mastering Python programming, sorting algorithms, vectorized operations, and writing robust test cases. Keep practicing and exploring advanced topics to further enhance your skills.
