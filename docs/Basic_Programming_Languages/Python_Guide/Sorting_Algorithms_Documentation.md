# Sorting Algorithms

Sorting is a fundamental concept in computer science used to arrange elements of a list or array in a particular order (ascending or descending). Below, we explore various sorting algorithms, their working, complexity, and when to use them.

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

## 1. Bubble Sort

### How It Works
- Compares adjacent elements and swaps them if they are in the wrong order.
- Repeats the process for all elements until the list is sorted.

### Code Example
```java
void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

### Time Complexity
- **Best Case**: O(n) (when already sorted with an optimization check)
- **Worst Case**: O(n²)

### When to Use
- Small datasets.
- When simplicity matters over efficiency.

---

## 2. Selection Sort

### How It Works
- Divides the array into two parts: sorted and unsorted.
- Repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.

### Code Example
```java
void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
```

### Time Complexity
- **Best Case**: O(n²)
- **Worst Case**: O(n²)

### When to Use
- Small datasets.
- When memory is a concern (in-place sorting).

---

## 3. Insertion Sort

### How It Works
- Divides the array into sorted and unsorted parts.
- Picks elements from the unsorted part and inserts them into the correct position in the sorted part.

### Code Example
```java
void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
```

### Time Complexity
- **Best Case**: O(n)
- **Worst Case**: O(n²)

### When to Use
- Small datasets.
- When data is already nearly sorted.

---

## 4. Merge Sort

### How It Works
- Divides the array into halves until each half has one element.
- Merges the halves back together in sorted order.

### Code Example
```java
void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int[] L = new int[n1];
    int[] R = new int[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int i = 0; i < n2; i++) R[i] = arr[mid + 1 + i];
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
```

### Time Complexity
- **Best Case**: O(n log n)
- **Worst Case**: O(n log n)

### When to Use
- Large datasets.
- When stability (preserving order of equal elements) is required.

---

## 5. Quick Sort

### How It Works
- Selects a pivot element.
- Partitions the array such that elements smaller than the pivot are on the left, and larger ones are on the right.
- Recursively applies the same process to subarrays.

### Code Example
```java
void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
```

### Time Complexity
- **Best Case**: O(n log n)
- **Worst Case**: O(n²) (occurs when the pivot is the smallest or largest element)

### When to Use
- Large datasets.
- When memory usage is a concern (in-place sorting).

---

## 6. Heap Sort

### How It Works
- Builds a max heap (or min heap).
- Repeatedly extracts the largest (or smallest) element from the heap and places it at the end of the array.

### Code Example
```java
void heapSort(int[] arr) {
    int n = arr.length;
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}
```

### Time Complexity
- **Best Case**: O(n log n)
- **Worst Case**: O(n log n)

### When to Use
- Large datasets.
- When in-place sorting is required.

---

## 7. Counting Sort

### How It Works
- Counts the frequency of each element.
- Uses the counts to place elements in sorted order.

### Code Example
```java
void countingSort(int[] arr) {
    int max = Arrays.stream(arr).max().getAsInt();
    int[] count = new int[max + 1];
    for (int num : arr) {
        count[num]++;
    }
    int index = 0;
    for (int i = 0; i < count.length; i++) {
        while (count[i]-- > 0) {
            arr[index++] = i;
        }
    }
}
```

### Time Complexity
- **Best Case**: O(n + k) (where `k` is the range of input values)
- **Worst Case**: O(n + k)

### When to Use
- When the range of numbers is small.
- When data is non-negative integers.

---

## Summary of Sorting Algorithms

| Algorithm      | Best Case | Worst Case | Stability | When to Use                 |
|----------------|-----------|------------|-----------|-----------------------------|
| Bubble Sort    | O(n)      | O(n²)      | Stable    | Small datasets, simplicity. |
| Selection Sort | O(n²)     | O(n²)      | Not Stable| Memory-constrained cases.   |
| Insertion Sort | O(n)      | O(n²)      | Stable    | Nearly sorted datasets.     |
| Merge Sort     | O(n log n)| O(n log n) | Stable    | Large datasets, stability.  |
| Quick Sort     | O(n log n)| O(n²)      | Not Stable| Large datasets, efficiency. |
| Heap Sort      | O(n log n)| O(n log n) | Not Stable| In-place large dataset sorting. |
| Counting Sort  | O(n + k)  | O(n + k)   | Stable    | Small range of numbers.     |

---

## Conclusion

Sorting algorithms play a crucial role in organizing data efficiently. Each algorithm has its strengths and weaknesses, making it suitable for different scenarios. Understanding the characteristics of each algorithm is essential for selecting the right one based on the problem at hand.
