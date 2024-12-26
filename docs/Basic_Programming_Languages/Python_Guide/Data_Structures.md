
# Data Structures

Data structures are fundamental components in any programming language. Python provides a wide range of built-in data structures that help in storing and managing data efficiently. Here’s a detailed explanation of Python's most important data structures.

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

## **1. Lists**
A list is a mutable, ordered collection of elements.

### **Key Features**
- Allows duplicate elements.
- Elements can be of different data types.
- Zero-based indexing.

### **Example**
```python
# Creating a list
fruits = ["apple", "banana", "cherry"]

# Accessing elements
print(fruits[0])  # Output: apple

# Modifying elements
fruits[1] = "blueberry"

# Adding elements
fruits.append("orange")

# Removing elements
fruits.remove("cherry")

# Iterating over a list
for fruit in fruits:
    print(fruit)
```

### **Common Methods**
| Method         | Description                  |
|----------------|------------------------------|
| `append(x)`    | Adds an element to the end.  |
| `remove(x)`    | Removes the first occurrence of `x`. |
| `pop()`        | Removes and returns the last element. |
| `sort()`       | Sorts the list in place.     |

---

## **2. Tuples**
A tuple is an immutable, ordered collection of elements.

### **Key Features**
- Faster than lists due to immutability.
- Used to store fixed data.

### **Example**
```python
# Creating a tuple
colors = ("red", "green", "blue")

# Accessing elements
print(colors[1])  # Output: green

# Tuples are immutable
# colors[1] = "yellow"  # Error: 'tuple' object does not support item assignment
```

---

## **3. Dictionaries**
A dictionary is an unordered collection of key-value pairs.

### **Key Features**
- Keys are unique and immutable.
- Values can be of any data type.

### **Example**
```python
# Creating a dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Accessing values
print(person["name"])  # Output: Alice

# Modifying values
person["age"] = 26

# Adding key-value pairs
person["job"] = "Engineer"

# Iterating over a dictionary
for key, value in person.items():
    print(f"{key}: {value}")
```

### **Common Methods**
| Method           | Description                            |
|------------------|----------------------------------------|
| `keys()`         | Returns all the keys.                 |
| `values()`       | Returns all the values.               |
| `items()`        | Returns all key-value pairs as tuples.|
| `get(key)`       | Returns the value for a key.          |

---

## **4. Sets**
A set is an unordered collection of unique elements.

### **Key Features**
- No duplicate elements.
- Useful for membership testing.

### **Example**
```python
# Creating a set
numbers = {1, 2, 3, 4}

# Adding elements
numbers.add(5)

# Removing elements
numbers.remove(3)

# Set operations
evens = {2, 4, 6}
print(numbers & evens)  # Intersection: {2, 4}
print(numbers | evens)  # Union: {1, 2, 4, 5, 6}
```

---

## **5. Strings**
Strings in Python are immutable sequences of characters.

### **Key Features**
- Supports slicing and indexing.
- Offers a variety of methods.

### **Example**
```python
# Creating a string
text = "Hello, World!"

# Accessing characters
print(text[0])  # Output: H

# Slicing
print(text[0:5])  # Output: Hello

# String methods
print(text.lower())  # Output: hello, world!
```

---

## **6. Stacks and Queues**
Python provides modules like `collections` for stacks and queues.

### **Stack (LIFO)**
```python
from collections import deque

stack = deque()
stack.append(1)  # Push
stack.append(2)
print(stack.pop())  # Pop
```

### **Queue (FIFO)**
```python
from collections import deque

queue = deque()
queue.append(1)  # Enqueue
queue.append(2)
print(queue.popleft())  # Dequeue
```

---

## **7. Advanced Data Structures**
### **1. Named Tuple**
```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x, p.y)  # Output: 10 20
```

### **2. DefaultDict**
```python
from collections import defaultdict

d = defaultdict(int)
d["a"] += 1
print(d["a"])  # Output: 1
```

---

## **8. Iteration and Comprehension**
### **List Comprehension**
```python
squares = [x**2 for x in range(5)]
```

### **Dictionary Comprehension**
```python
squared_dict = {x: x**2 for x in range(5)}
```

### **Set Comprehension**
```python
unique_squares = {x**2 for x in [1, 2, 2, 3]}
```

---

## **Conclusion**
Understanding Python's data structures is essential for writing efficient and readable code. Mastering these concepts will significantly enhance your programming skills.
