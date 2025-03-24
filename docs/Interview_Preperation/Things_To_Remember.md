# LeetCode Notes
## Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
### Solution #1
    ```
    for i in range (len(nums)):
        for j in range (1, len(nums)):
            if nums[i]+nums[j] == target:
                return [i,j]
    ```
### Solution #2
    ```
    number_map = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in number_map:
            return [i, number_map[diff]]
        number_map[num] = i
    return None
    ```

## Valid Parenthesis
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
### Solution
    ```
    # Map Parenthesis
    p = {'(':')', '[':']', '{':'}'}
    stack = []

    # For each item in the string
    for i in s:
        # If open bracket, add the close bracket to the stack
        if i in p:
            stack.append(p[i])
        # If close bracket, check if stack is empty, if not, check if item == first item in the stack.
        elif len(stack) > 0 and i == stack[-1]:
            stack.pop()
        else:
            return False
    return len(stack)==0
    ```



## Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

### Solution
    ```
    result = ''.join(char.lower() for char in s if char.isalnum())
    return result == result[::-1]
    ```

## Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

### Solution
    ```
    head = body = ListNode(0)
    while list1 and list2:
        if list1.val < list2.val:
            body.next = list1
            list1 = list1.next
        else:
            body.next = list2
            list2 = list2.next
        body = body.next
    body.next = list1 or list2
    return head.next
    ```