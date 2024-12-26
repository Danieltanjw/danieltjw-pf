# Error Handling

Error handling is an essential part of programming to ensure that your application can gracefully recover from unexpected events or incorrect input. In Python, errors are managed using exceptions, which allow you to handle and debug issues effectively.

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

## **What is an Exception?**
An exception is an event that disrupts the normal flow of a program. Python uses exceptions to handle errors, providing a structured way to catch and respond to unexpected conditions.

---

## **Types of Exceptions**
Python provides several built-in exceptions, such as:
- **SyntaxError**: Raised when there is a syntax error in the code.
- **TypeError**: Raised when an operation or function is applied to an object of inappropriate type.
- **ValueError**: Raised when a function gets an argument of the correct type but an inappropriate value.
- **KeyError**: Raised when trying to access a dictionary key that does not exist.
- **IndexError**: Raised when trying to access an index that is out of range.

---

## **The Try-Except Block**
The `try-except` block is used to catch and handle exceptions.

### **Syntax**:
```python
try:
    # Code that may raise an exception
except ExceptionType:
    # Code to handle the exception
```

### **Example**:
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You cannot divide by zero!")
```

---

## **Catching Multiple Exceptions**
You can handle multiple exceptions by specifying them in a tuple or using multiple `except` blocks.

### **Example**:
```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("Invalid input! Please enter a number.")
except ZeroDivisionError:
    print("You cannot divide by zero!")
```

---

## **The Else Clause**
The `else` block is executed if no exceptions occur in the `try` block.

### **Example**:
```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ZeroDivisionError:
    print("You cannot divide by zero!")
else:
    print(f"The result is {result}")
```

---

## **The Finally Block**
The `finally` block is executed no matter what, whether an exception is raised or not. It is often used to release resources.

### **Example**:
```python
try:
    file = open("example.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    file.close()
    print("File closed.")
```

---

## **Raising Exceptions**
You can raise exceptions manually using the `raise` statement.

### **Example**:
```python
def check_positive(number):
    if number < 0:
        raise ValueError("Number must be positive")
    return number

try:
    check_positive(-5)
except ValueError as e:
    print(e)
```

---

## **Custom Exceptions**
Python allows you to define your own exceptions by subclassing the `Exception` class.

### **Example**:
```python
class CustomError(Exception):
    def __init__(self, message):
        super().__init__(message)

try:
    raise CustomError("This is a custom error!")
except CustomError as e:
    print(e)
```

---

## **Best Practices for Error Handling**

1. **Use Specific Exceptions**:
   - Avoid using a generic `except` block.
   - Specify the type of exception to catch only what you expect.

2. **Provide Useful Messages**:
   - Use clear and informative messages when handling exceptions.

3. **Avoid Silencing Errors**:
   - Ensure you don’t ignore exceptions silently, as this can make debugging harder.

4. **Use Finally for Cleanup**:
   - Always release resources (e.g., files or database connections) in a `finally` block.

5. **Test Error Handling**:
   - Write unit tests to ensure your error handling logic works as expected.

---

## **Advanced Error Handling**
### **Using `try-except` in Loops**
You can use `try-except` blocks inside loops to handle errors iteratively.

```python
numbers = [10, 0, 5, "a"]

for num in numbers:
    try:
        print(10 / int(num))
    except (ZeroDivisionError, ValueError) as e:
        print(f"Error: {e}")
```

### **Using `with` Statement for Resource Management**
Python’s `with` statement ensures resources are properly released, even if an error occurs.

```python
try:
    with open("example.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
```

---

## **Conclusion**
Error handling is a crucial aspect of writing robust and reliable Python code. By understanding and using Python's exception handling features effectively, you can create applications that gracefully handle unexpected situations and provide a better experience for users.

