"use strict";(self.webpackChunkdanieltjw_pf=self.webpackChunkdanieltjw_pf||[]).push([[4022],{4362:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Basic_Programming_Languages/Python_Guide/Data_Structures","title":"Data Structures","description":"Data structures are fundamental components in any programming language. Python provides a wide range of built-in data structures that help in storing and managing data efficiently. Here\u2019s a detailed explanation of Python\'s most important data structures.","source":"@site/docs/Basic_Programming_Languages/Python_Guide/Data_Structures.md","sourceDirName":"Basic_Programming_Languages/Python_Guide","slug":"/Basic_Programming_Languages/Python_Guide/Data_Structures","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures","draft":false,"unlisted":false,"editUrl":"https://github.com/Danieltanjw/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Python Notes","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/"},"next":{"title":"Error Handling","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Error_Handling_in_Python"}}');var t=s(4848),i=s(8453);const l={},a="Data Structures",d={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"<strong>1. Lists</strong>",id:"1-lists",level:2},{value:"<strong>Key Features</strong>",id:"key-features",level:3},{value:"<strong>Example</strong>",id:"example",level:3},{value:"<strong>Common Methods</strong>",id:"common-methods",level:3},{value:"<strong>2. Tuples</strong>",id:"2-tuples",level:2},{value:"<strong>Key Features</strong>",id:"key-features-1",level:3},{value:"<strong>Example</strong>",id:"example-1",level:3},{value:"<strong>3. Dictionaries</strong>",id:"3-dictionaries",level:2},{value:"<strong>Key Features</strong>",id:"key-features-2",level:3},{value:"<strong>Example</strong>",id:"example-2",level:3},{value:"<strong>Common Methods</strong>",id:"common-methods-1",level:3},{value:"<strong>4. Sets</strong>",id:"4-sets",level:2},{value:"<strong>Key Features</strong>",id:"key-features-3",level:3},{value:"<strong>Example</strong>",id:"example-3",level:3},{value:"<strong>5. Strings</strong>",id:"5-strings",level:2},{value:"<strong>Key Features</strong>",id:"key-features-4",level:3},{value:"<strong>Example</strong>",id:"example-4",level:3},{value:"<strong>6. Stacks and Queues</strong>",id:"6-stacks-and-queues",level:2},{value:"<strong>Stack (LIFO)</strong>",id:"stack-lifo",level:3},{value:"<strong>Queue (FIFO)</strong>",id:"queue-fifo",level:3},{value:"<strong>7. Advanced Data Structures</strong>",id:"7-advanced-data-structures",level:2},{value:"<strong>1. Named Tuple</strong>",id:"1-named-tuple",level:3},{value:"<strong>2. DefaultDict</strong>",id:"2-defaultdict",level:3},{value:"<strong>8. Iteration and Comprehension</strong>",id:"8-iteration-and-comprehension",level:2},{value:"<strong>List Comprehension</strong>",id:"list-comprehension",level:3},{value:"<strong>Dictionary Comprehension</strong>",id:"dictionary-comprehension",level:3},{value:"<strong>Set Comprehension</strong>",id:"set-comprehension",level:3},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"data-structures",children:"Data Structures"})}),"\n",(0,t.jsx)(n.p,{children:"Data structures are fundamental components in any programming language. Python provides a wide range of built-in data structures that help in storing and managing data efficiently. Here\u2019s a detailed explanation of Python's most important data structures."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/",children:"Python Basics"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures",children:"Data Structures"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Sorting_Algorithms_Documentation",children:"Sorting Algorithms"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation",children:"Vectorized Algorithms"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Python_Testing_Documentation",children:"Writing Test Cases"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Error_Handling_in_Python",children:"Error Handling"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/sandbox",children:"Try it now!"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-lists",children:(0,t.jsx)(n.strong,{children:"1. Lists"})}),"\n",(0,t.jsx)(n.p,{children:"A list is a mutable, ordered collection of elements."}),"\n",(0,t.jsx)(n.h3,{id:"key-features",children:(0,t.jsx)(n.strong,{children:"Key Features"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Allows duplicate elements."}),"\n",(0,t.jsx)(n.li,{children:"Elements can be of different data types."}),"\n",(0,t.jsx)(n.li,{children:"Zero-based indexing."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Creating a list\nfruits = ["apple", "banana", "cherry"]\n\n# Accessing elements\nprint(fruits[0])  # Output: apple\n\n# Modifying elements\nfruits[1] = "blueberry"\n\n# Adding elements\nfruits.append("orange")\n\n# Removing elements\nfruits.remove("cherry")\n\n# Iterating over a list\nfor fruit in fruits:\n    print(fruit)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"common-methods",children:(0,t.jsx)(n.strong,{children:"Common Methods"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"append(x)"})}),(0,t.jsx)(n.td,{children:"Adds an element to the end."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"remove(x)"})}),(0,t.jsxs)(n.td,{children:["Removes the first occurrence of ",(0,t.jsx)(n.code,{children:"x"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pop()"})}),(0,t.jsx)(n.td,{children:"Removes and returns the last element."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sort()"})}),(0,t.jsx)(n.td,{children:"Sorts the list in place."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-tuples",children:(0,t.jsx)(n.strong,{children:"2. Tuples"})}),"\n",(0,t.jsx)(n.p,{children:"A tuple is an immutable, ordered collection of elements."}),"\n",(0,t.jsx)(n.h3,{id:"key-features-1",children:(0,t.jsx)(n.strong,{children:"Key Features"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Faster than lists due to immutability."}),"\n",(0,t.jsx)(n.li,{children:"Used to store fixed data."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Creating a tuple\ncolors = ("red", "green", "blue")\n\n# Accessing elements\nprint(colors[1])  # Output: green\n\n# Tuples are immutable\n# colors[1] = "yellow"  # Error: \'tuple\' object does not support item assignment\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-dictionaries",children:(0,t.jsx)(n.strong,{children:"3. Dictionaries"})}),"\n",(0,t.jsx)(n.p,{children:"A dictionary is an unordered collection of key-value pairs."}),"\n",(0,t.jsx)(n.h3,{id:"key-features-2",children:(0,t.jsx)(n.strong,{children:"Key Features"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keys are unique and immutable."}),"\n",(0,t.jsx)(n.li,{children:"Values can be of any data type."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-2",children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Creating a dictionary\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "city": "New York"\n}\n\n# Accessing values\nprint(person["name"])  # Output: Alice\n\n# Modifying values\nperson["age"] = 26\n\n# Adding key-value pairs\nperson["job"] = "Engineer"\n\n# Iterating over a dictionary\nfor key, value in person.items():\n    print(f"{key}: {value}")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"common-methods-1",children:(0,t.jsx)(n.strong,{children:"Common Methods"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keys()"})}),(0,t.jsx)(n.td,{children:"Returns all the keys."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"values()"})}),(0,t.jsx)(n.td,{children:"Returns all the values."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"items()"})}),(0,t.jsx)(n.td,{children:"Returns all key-value pairs as tuples."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"get(key)"})}),(0,t.jsx)(n.td,{children:"Returns the value for a key."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-sets",children:(0,t.jsx)(n.strong,{children:"4. Sets"})}),"\n",(0,t.jsx)(n.p,{children:"A set is an unordered collection of unique elements."}),"\n",(0,t.jsx)(n.h3,{id:"key-features-3",children:(0,t.jsx)(n.strong,{children:"Key Features"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No duplicate elements."}),"\n",(0,t.jsx)(n.li,{children:"Useful for membership testing."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-3",children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Creating a set\nnumbers = {1, 2, 3, 4}\n\n# Adding elements\nnumbers.add(5)\n\n# Removing elements\nnumbers.remove(3)\n\n# Set operations\nevens = {2, 4, 6}\nprint(numbers & evens)  # Intersection: {2, 4}\nprint(numbers | evens)  # Union: {1, 2, 4, 5, 6}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-strings",children:(0,t.jsx)(n.strong,{children:"5. Strings"})}),"\n",(0,t.jsx)(n.p,{children:"Strings in Python are immutable sequences of characters."}),"\n",(0,t.jsx)(n.h3,{id:"key-features-4",children:(0,t.jsx)(n.strong,{children:"Key Features"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Supports slicing and indexing."}),"\n",(0,t.jsx)(n.li,{children:"Offers a variety of methods."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-4",children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Creating a string\ntext = "Hello, World!"\n\n# Accessing characters\nprint(text[0])  # Output: H\n\n# Slicing\nprint(text[0:5])  # Output: Hello\n\n# String methods\nprint(text.lower())  # Output: hello, world!\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-stacks-and-queues",children:(0,t.jsx)(n.strong,{children:"6. Stacks and Queues"})}),"\n",(0,t.jsxs)(n.p,{children:["Python provides modules like ",(0,t.jsx)(n.code,{children:"collections"})," for stacks and queues."]}),"\n",(0,t.jsx)(n.h3,{id:"stack-lifo",children:(0,t.jsx)(n.strong,{children:"Stack (LIFO)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\nstack = deque()\nstack.append(1)  # Push\nstack.append(2)\nprint(stack.pop())  # Pop\n"})}),"\n",(0,t.jsx)(n.h3,{id:"queue-fifo",children:(0,t.jsx)(n.strong,{children:"Queue (FIFO)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\nqueue = deque()\nqueue.append(1)  # Enqueue\nqueue.append(2)\nprint(queue.popleft())  # Dequeue\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"7-advanced-data-structures",children:(0,t.jsx)(n.strong,{children:"7. Advanced Data Structures"})}),"\n",(0,t.jsx)(n.h3,{id:"1-named-tuple",children:(0,t.jsx)(n.strong,{children:"1. Named Tuple"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from collections import namedtuple\n\nPoint = namedtuple("Point", ["x", "y"])\np = Point(10, 20)\nprint(p.x, p.y)  # Output: 10 20\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-defaultdict",children:(0,t.jsx)(n.strong,{children:"2. DefaultDict"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from collections import defaultdict\n\nd = defaultdict(int)\nd["a"] += 1\nprint(d["a"])  # Output: 1\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"8-iteration-and-comprehension",children:(0,t.jsx)(n.strong,{children:"8. Iteration and Comprehension"})}),"\n",(0,t.jsx)(n.h3,{id:"list-comprehension",children:(0,t.jsx)(n.strong,{children:"List Comprehension"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"squares = [x**2 for x in range(5)]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dictionary-comprehension",children:(0,t.jsx)(n.strong,{children:"Dictionary Comprehension"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"squared_dict = {x: x**2 for x in range(5)}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"set-comprehension",children:(0,t.jsx)(n.strong,{children:"Set Comprehension"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"unique_squares = {x**2 for x in [1, 2, 2, 3]}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:(0,t.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,t.jsx)(n.p,{children:"Understanding Python's data structures is essential for writing efficient and readable code. Mastering these concepts will significantly enhance your programming skills."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);