# Vectorized Algorithms

Vectorized algorithms are computational techniques designed to operate on entire arrays or matrices in a single step, rather than iterating through individual elements. This approach leverages modern hardware features like SIMD (Single Instruction Multiple Data) and optimized libraries, resulting in faster computations compared to traditional iterative methods.

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

## What Are Vectorized Algorithms?

### Definition
Vectorized algorithms utilize mathematical operations that are applied to entire data structures (such as arrays or matrices) simultaneously. These algorithms are often implemented in high-performance libraries like **NumPy** in Python, **Eigen** in C++, or using GPU-based frameworks like **CUDA**.

### Key Characteristics
- Operate on arrays/matrices instead of individual elements.
- Minimize explicit loops in the code.
- Leverage underlying hardware acceleration (e.g., SIMD, GPU, or multi-threading).

### Benefits
1. **Speed**: Significant reduction in computation time.
2. **Code Simplicity**: Cleaner and more concise code.
3. **Parallelism**: Exploits parallelism at the hardware level.

---

## Key Concepts in Vectorization

### 1. Broadcasting
Broadcasting allows arrays of different shapes to be used together in mathematical operations by stretching smaller arrays to match the shape of larger ones.

#### Example (Python NumPy):
```python
import numpy as np

# Broadcasting example: Adding scalar to a matrix
matrix = np.array([[1, 2, 3], [4, 5, 6]])
scalar = 10
result = matrix + scalar  # Scalar is broadcasted
print(result)
# Output: [[11 12 13]
#          [14 15 16]]
```

### 2. Element-wise Operations
Vectorized operations are applied element-wise on arrays without the need for explicit loops.

#### Example (Python NumPy):
```python
# Element-wise multiplication
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
result = a * b  # Multiplies corresponding elements
print(result)
# Output: [4 10 18]
```

### 3. Reduction Operations
Reduction operations (like summation or finding maximum) operate on entire arrays, reducing them to a single value or a lower-dimensional structure.

#### Example (Python NumPy):
```python
# Summing all elements
array = np.array([1, 2, 3, 4, 5])
result = np.sum(array)
print(result)
# Output: 15
```

---

## Applications of Vectorized Algorithms

### 1. **Matrix Multiplication**
Matrix multiplication is a common operation in linear algebra and machine learning. Vectorized implementations are significantly faster than nested loops.

#### Example (Python NumPy):
```python
# Matrix multiplication using NumPy
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = np.dot(A, B)  # Vectorized matrix multiplication
print(C)
# Output: [[19 22]
#          [43 50]]
```

### 2. **Image Processing**
Operations like pixel-wise transformations or convolutions in image processing can be vectorized for speed.

#### Example (Grayscale Conversion):
```python
# Grayscale conversion using vectorized operations
import numpy as np

image = np.random.rand(100, 100, 3)  # RGB image
grayscale = 0.2989 * image[:, :, 0] + 0.5870 * image[:, :, 1] + 0.1140 * image[:, :, 2]
```

### 3. **Machine Learning**
- **Loss Functions**: Vectorized implementation of mean squared error or cross-entropy.
- **Gradient Descent**: Update weights for all training examples in a single step.

#### Example (Gradient Descent):
```python
# Gradient descent step
import numpy as np

weights = np.random.rand(3, 1)  # Random weights
X = np.random.rand(100, 3)      # Feature matrix
y = np.random.rand(100, 1)      # Target values
learning_rate = 0.01

# Vectorized weight update
predictions = np.dot(X, weights)
errors = predictions - y
gradient = np.dot(X.T, errors) / len(y)
weights -= learning_rate * gradient
```

### 4. **Natural Language Processing**
Vectorized operations are used in tokenization, embeddings, and sequence transformations.

#### Example (Word Embeddings):
```python
# Word embeddings using matrix multiplication
import numpy as np

vocab_size = 10000
embedding_dim = 300
word_embeddings = np.random.rand(vocab_size, embedding_dim)  # Random embeddings
word_indices = np.array([10, 200, 3000])  # Word indices in a sentence
sentence_embeddings = word_embeddings[word_indices]
```

---

## Performance Comparison: Vectorized vs Non-Vectorized

### Non-Vectorized Example (Python):
```python
# Non-vectorized dot product
a = [1, 2, 3]
b = [4, 5, 6]
dot_product = 0
for i in range(len(a)):
    dot_product += a[i] * b[i]
print(dot_product)
# Output: 32
```

### Vectorized Example (Python):
```python
# Vectorized dot product
import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
dot_product = np.dot(a, b)
print(dot_product)
# Output: 32
```

### Time Complexity
Vectorized algorithms are faster because they minimize interpreter overhead and use optimized libraries.

---

## Hardware Acceleration for Vectorized Algorithms

### 1. SIMD (Single Instruction Multiple Data)
- Executes the same operation on multiple data points simultaneously.
- Found in modern CPUs.

### 2. GPU Acceleration
- GPUs are designed for parallel processing, making them ideal for vectorized algorithms.
- Libraries like **CUDA** or **TensorFlow** exploit GPU acceleration.

### 3. Multi-threading
- Splits data across multiple CPU cores for parallel processing.

---

## Advantages of Vectorized Algorithms

1. **Performance**: Faster execution due to hardware acceleration.
2. **Code Readability**: Simpler and cleaner code with fewer loops.
3. **Memory Efficiency**: Reduces temporary variables and memory overhead.

---

## Summary of Vectorized Operations

| Operation              | Example                      | Description                                    |
|------------------------|------------------------------|------------------------------------------------|
| Broadcasting           | `array + scalar`            | Automatically expands smaller arrays.          |
| Element-wise Operations| `array1 * array2`           | Applies operations element by element.         |
| Reduction Operations   | `np.sum(array)`             | Reduces arrays to a single value or dimension. |
| Matrix Multiplication  | `np.dot(A, B)`              | Multiplies matrices efficiently.               |
| Advanced Indexing      | `array[indices]`            | Accesses or modifies elements efficiently.     |

---

## Conclusion

Vectorized algorithms are essential for high-performance computing tasks, particularly in data science, machine learning, and scientific computing. By utilizing optimized libraries and hardware acceleration, vectorized computations significantly outperform traditional iterative approaches in both speed and efficiency.
