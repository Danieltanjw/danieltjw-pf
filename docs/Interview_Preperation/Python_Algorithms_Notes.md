# Python Notes on Algorithms

## Breadth-First Search (BFS)
- **Definition**: A graph traversal technique where you explore all the neighbors at the current depth before moving on to nodes at the next depth level.
- **Use Cases**: Shortest path in unweighted graphs, level-order traversal in trees.
- **Complexity**:
Time: O(V+E) where V is the number of vertices and E is the number of edges.
Space: O(V) due to the queue.
- **Steps**:
  1. Use a queue to keep track of nodes to visit.
  2. Start with the root node and mark it as visited.
  3. Explore each node's unvisited neighbors and enqueue them.
- **Example**:
```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.add(node)
            print(node, end=" ")
            queue.extend(neighbor for neighbor in graph[node] if neighbor not in visited)
```

## Depth-First Search (DFS)
- **Definition**: A graph traversal method where you explore as far as possible along each branch before backtracking.
- **Use Cases**: Detecting cycles, connected components, and topological sorting.
- **Complexity**:
Time: O(V+E)
Space: O(V) in the worst case for recursions stack.
- **Steps**:
  1. Use a stack (or recursion) to explore nodes.
  2. Mark nodes as visited once encountered.
- **Example**:
```python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

## Binary Search
- **Definition**: A search algorithm that finds the position of a target value within a sorted array.
- **Use Cases**: Searching in sort datasets, finding elements, lower/upper bounds.
- **Complexity**:
Time: O(logn)
Space: O(1)
- **Steps**:
  1. Divide the array into two halves.
  2. Compare the target with the middle element.
  3. Repeat for the left or right half based on comparison.
- **Example**:
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

## Sorting Algorithms
### Bubble Sort
- **Definition**: Repeatedly swap adjacent elements if they are in the wrong order.
- **Complexity**:
Time: O(n^2) in the worst case
Space: O(1) in-place
- **Example**:
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

### Insertion Sort
- **Definition**: Build the sorted array one element at a time by comparing and inserting elements.
- **Complexity**:
Time: O(n^2) in the worst case
Space: O(1) in-place
- **Example**:
```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
```

### Radix Sort
- **Definition**: Non-comparative sorting algorithm that sorts by processing individual digits.
- **Complexity**: 
Time: O(d(n+b)), where d is the number of digits, n is the number of elements, and b is the base.
Space: O(n+b)
- **Example**:
```python
def counting_sort_for_radix(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in arr:
        index = (i // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1

    for i in range(len(arr)):
        arr[i] = output[i]

def radix_sort(arr):
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10
```

### Counting Sort
- **Definition**: Non-comparative sorting algorithm that counts the frequency of each element.
- **Example**:
```python
def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    for num in arr:
        count[num] += 1
    index = 0
    for i, freq in enumerate(count):
        for _ in range(freq):
            arr[index] = i
            index += 1
```

### Bucket Sort
- **Definition**: Distributes elements into buckets and sorts each bucket individually.
- **Example**:
```python
def bucket_sort(arr):
    max_val = max(arr)
    size = max_val / len(arr)
    buckets = [[] for _ in range(len(arr))]

    for i in range(len(arr)):
        index = int(arr[i] / size)
        if index != len(arr):
            buckets[index].append(arr[i])
        else:
            buckets[len(arr) - 1].append(arr[i])

    for bucket in buckets:
        bucket.sort()

    result = []
    for bucket in buckets:
        result.extend(bucket)
    return result
```

## Tree Traversals
### Preorder
- Visit root, left, right.
- **Use Case**: Copying trees, prefix expressions.
- **Example**:
```python
def preorder(root):
    if root:
        print(root.val, end=" ")
        preorder(root.left)
        preorder(root.right)
```

### Inorder
- Visit left, root, right.
- **Use Case**: Sorting elements in a binary search tree.
- **Example**:
```python
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=" ")
        inorder(root.right)
```

### Postorder
- Visit left, right, root.
- **Use Case**: Deleting or freeing memory.
- **Example**:
```python
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val, end=" ")
```

## Two Pointer Technique
- **Definition**: Use two pointers to traverse an array or list to solve problems efficiently.
- **Example**:
```python
def two_sum(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return left, right
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
```

## Slow-Fast Pointer
- **Definition**: Use two pointers moving at different speeds to detect cycles.
- **Example**:
```python
def has_cycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

## Greedy Algorithm
- **Definition**: Build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit.
- **Example**:
```python
def coin_change(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        if amount == 0:
            break
        count += amount // coin
        amount %= coin
    return count if amount == 0 else -1
```


## Dijkstra's Algorithm
- **Definition**: Finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights.
- **Key Idea**:
  - Use a priority queue to explore the closest unvisited node.
  - Relax edges by updating distances if a shorter path is found.
- **Steps**:
  1. Initialize distances to all nodes as infinity, except the source node (0).
  2. Use a priority queue to process nodes with the smallest known distance.
  3. For the current node, update distances to its neighbors if a shorter path is found.
  4. Mark the current node as visited.
  5. Repeat until all nodes are processed or the priority queue is empty.
- **Complexity**:
  - Time: \(O((V + E) \log V)\) using a priority queue.
  - Space: \(O(V)\) for the distance table and priority queue.
- **Example**:
```python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    
    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)
        if current_distance > distances[current_node]:
            continue
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    return distances
```
---

## Floyd-Warshall Algorithm
- **Definition**: A dynamic programming algorithm to compute shortest paths between all pairs of nodes.
- **Key Idea**:
  - Use a distance matrix where \(dist[i][j]\) represents the shortest distance from node \(i\) to \(j\).
  - Update the matrix iteratively using each node as an intermediate node.
- **Steps**:
  1. Initialize the distance matrix with edge weights and infinity for no direct edge.
  2. Set \(dist[i][i] = 0\) for all \(i\).
  3. For each intermediate node \(k\), update \(dist[i][j]\) as:
     \[
     dist[i][j] = \min(dist[i][j], dist[i][k] + dist[k][j])
     \]
- **Complexity**:
  - Time: \(O(V^3)\).
  - Space: \(O(V^2)\).
- **Example**:
```python
def floyd_warshall(graph):
    nodes = list(graph.keys())
    distance = {node: {n: float('inf') for n in nodes} for node in nodes}
    
    for node in nodes:
        distance[node][node] = 0
        for neighbor, weight in graph[node].items():
            distance[node][neighbor] = weight
    
    for k in nodes:
        for i in nodes:
            for j in nodes:
                distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])
    
    return distance
```
---

## Bellman-Ford Algorithm
- **Definition**: Finds shortest paths from a source node to all other nodes in a graph, even with negative edge weights.
- **Key Idea**:
  - Relax all edges \(V-1\) times, where \(V\) is the number of vertices.
  - Check for negative weight cycles in an additional iteration.
- **Steps**:
  1. Initialize distances to infinity, except for the source node (0).
  2. For each vertex, relax all edges by updating distances if a shorter path is found.
  3. Perform one more relaxation to detect negative weight cycles.
- **Complexity**:
  - Time: \(O(V \cdot E)\).
  - Space: \(O(V)\) for the distance table.
- **Example**:
```python
def bellman_ford(edges, vertices, start):
    distances = {v: float('inf') for v in vertices}
    distances[start] = 0
    
    for _ in range(len(vertices) - 1):
        for u, v, weight in edges:
            if distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
    
    # Check for negative weight cycles
    for u, v, weight in edges:
        if distances[u] + weight < distances[v]:
            raise ValueError("Graph contains a negative weight cycle")
    
    return distances
```
---

## Kruskal's Algorithm
- **Definition**: Constructs the Minimum Spanning Tree (MST) by selecting edges in increasing order of weight.
- **Key Idea**:
  - Use a union-find data structure to avoid forming cycles.
- **Steps**:
  1. Sort all edges by weight.
  2. Use the union-find algorithm to add edges to the MST without forming a cycle.
  3. Stop when the MST has \(V-1\) edges.
- **Complexity**:
  - Time: \(O(E \log E)\) for sorting edges.
  - Space: \(O(V)\).
- **Example**:
```python
def kruskal(edges, num_vertices):
    edges.sort(key=lambda x: x[2])  # Sort edges by weight
    parent = list(range(num_vertices))
    
    def find(v):
        if parent[v] != v:
            parent[v] = find(parent[v])
        return parent[v]
    
    def union(u, v):
        root_u = find(u)
        root_v = find(v)
        if root_u != root_v:
            parent[root_u] = root_v
    
    mst = []
    for u, v, weight in edges:
        if find(u) != find(v):
            union(u, v)
            mst.append((u, v, weight))
    
    return mst
```
---

## Prim's Algorithm
- **Definition**: Constructs the MST by starting from a node and growing the tree.
- **Key Idea**:
  - Use a priority queue to select the smallest edge that connects a new node to the MST.
- **Steps**:
  1. Start with an arbitrary node.
  2. Add the smallest edge connecting the MST to a new node.
  3. Repeat until all nodes are included.
- **Complexity**:
  - Time: \(O((V + E) \log V)\).
  - Space: \(O(V)\).
- **Example**:
```python
import heapq

def prim(graph, start):
    mst = []
    visited = set()
    priority_queue = [(0, start, None)]  # (weight, node, parent)
    
    while priority_queue:
        weight, node, parent = heapq.heappop(priority_queue)
        if node not in visited:
            visited.add(node)
            if parent is not None:
                mst.append((parent, node, weight))
            
            for neighbor, cost in graph[node].items():
                if neighbor not in visited:
                    heapq.heappush(priority_queue, (cost, neighbor, node))
    
    return mst
```

---

## Topological Sorting
- **Definition**: A linear ordering of vertices in a DAG such that for every directed edge \(u 	o v\), \(u\) appears before \(v\).
- **Key Idea**:
  - Use DFS to order nodes by their finish times or Kahn’s algorithm to process nodes with zero in-degrees.
- **Steps**:
  1. Initialize a stack (DFS) or a queue (BFS).
  2. Use DFS to visit nodes and push them to the stack in reverse order of finish.
  3. Alternatively, process nodes with zero in-degrees using BFS.
- **Complexity**:
  - Time: \(O(V + E)\).
  - Space: \(O(V)\).
- **Example**:
```python
def topological_sort(graph):
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1
    
    queue = [node for node in graph if in_degree[node] == 0]
    result = []
    
    while queue:
        node = queue.pop(0)
        result.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return result
```

---

## Floyd's Cycle Detection Algorithm
- **Definition**: Detects cycles in a sequence using two pointers moving at different speeds.
- **Key Idea**:
  - If there’s a cycle, the slow and fast pointers will meet.
- **Steps**:
  1. Initialize `slow` and `fast` pointers at the start.
  2. Move `slow` by one step and `fast` by two steps.
  3. If `slow == fast`, there’s a cycle.
- **Complexity**:
  - Time: \(O(n)\).
  - Space: \(O(1)\).
- **Example**:
```python
def floyd_cycle_detection(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```
---

## Sorting Algorithms
### Quick Sort
- **Definition**: A divide-and-conquer algorithm that partitions the array and recursively sorts the partitions.
- **Key Idea**:
  - Choose a pivot and partition the array so that elements less than the pivot are on one side and greater on the other.
- **Complexity**:
  - Average: \(O(n \log n)\).
  - Worst: \(O(n^2)\).
- **Example**:
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

### Merge Sort
- **Definition**: Divides the array into halves, sorts them, and merges the sorted halves.
- **Complexity**: \(O(n \log n)\).
- **Example**:
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

### Heap Sort
- **Definition**: Uses a binary heap to sort elements by repeatedly extracting the maximum/minimum.
- **Complexity**: \(O(n \log n)\).
- **Example**:
```python
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
```

---

## Sliding Window Technique
- **Definition**: Efficiently solves problems involving subarrays or substrings.
- **Key Idea**:
  - Use a fixed or dynamic window to maintain the required properties.
- **Complexity**: \(O(n)\).
- **Example**:
```python
def sliding_window_max(nums, k):
    from collections import deque
    result = []
    dq = deque()
    
    for i in range(len(nums)):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result
```

---

## Backtracking
- **Definition**: Explores all possible solutions and backtracks upon encountering invalid solutions.
- **Complexity**: Typically exponential.
- **Example**:
```python
def solve_n_queens(n):
    def is_safe(board, row, col):
        for i in range(row):
            if board[i] == col or abs(board[i] - col) == row - i:
                return False
        return True
    
    def solve(row):
        if row == n:
            result.append(board[:])
            return
        for col in range(n):
            if is_safe(board, row, col):
                board[row] = col
                solve(row + 1)
                board[row] = -1
    
    result = []
    board = [-1] * n
    solve(0)
    return result
```
---

## Kadane's Algorithm
- **Definition**: Finds the maximum sum of a contiguous subarray in \(O(n)\).
- **Example**:
```python
def kadane(arr):
    max_current = max_global = arr[0]
    for num in arr[1:]:
        max_current = max(num, max_current + num)
        if max_current > max_global:
            max_global = max_current
    return max_global
```
---

## Longest Increasing Subsequence (LIS)
- **Definition**: Finds the length of the longest subsequence with increasing elements.
- **Complexity**:
  - \(O(n^2)\) using dynamic programming.
  - \(O(n \log n)\) with binary search optimization.
- **Example**:
```python
def lis(nums):
    dp = []
    for num in nums:
        idx = bisect.bisect_left(dp, num)
        if idx == len(dp):
            dp.append(num)
        else:
            dp[idx] = num
    return len(dp)
```
