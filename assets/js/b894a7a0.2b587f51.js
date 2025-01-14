"use strict";(self.webpackChunkdanieltjw_pf=self.webpackChunkdanieltjw_pf||[]).push([[753],{1365:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Basic_Programming_Languages/Python_Guide/index","title":"Python Notes","description":"Python is a versatile, high-level programming language known for its simplicity and vast ecosystem. Below is a comprehensive guide to Python, covering core concepts, sorting algorithms, vectorized algorithms, and other essential aspects.","source":"@site/docs/Basic_Programming_Languages/Python_Guide/index.md","sourceDirName":"Basic_Programming_Languages/Python_Guide","slug":"/Basic_Programming_Languages/Python_Guide/","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/","draft":false,"unlisted":false,"editUrl":"https://github.com/Danieltanjw/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Java Notes","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Java_Programming_Notes"},"next":{"title":"Data Structures","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures"}}');var s=i(4848),o=i(8453);const t={},a="Python Notes",l={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Printing and Comments",id:"printing-and-comments",level:3},{value:"Variables",id:"variables",level:3},{value:"Data Types",id:"data-types",level:3},{value:"Input",id:"input",level:3},{value:"For Loops",id:"for-loops",level:2},{value:"Basic Loop",id:"basic-loop",level:3},{value:"Looping Through Collections",id:"looping-through-collections",level:3},{value:"Nested Loops",id:"nested-loops",level:3},{value:"Using <code>break</code> and <code>continue</code>",id:"using-break-and-continue",level:3},{value:"Rudimentary Notes on Python",id:"rudimentary-notes-on-python",level:2},{value:"Indentation",id:"indentation",level:3},{value:"Functions",id:"functions",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Common Libraries",id:"common-libraries",level:3},{value:"Example Program",id:"example-program",level:3}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"python-notes",children:"Python Notes"})}),"\n",(0,s.jsx)(e.p,{children:"Python is a versatile, high-level programming language known for its simplicity and vast ecosystem. Below is a comprehensive guide to Python, covering core concepts, sorting algorithms, vectorized algorithms, and other essential aspects."}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/",children:"Python Basics"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures",children:"Data Structures"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Sorting_Algorithms_Documentation",children:"Sorting Algorithms"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation",children:"Vectorized Algorithms"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Python_Testing_Documentation",children:"Writing Test Cases"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Error_Handling_in_Python",children:"Error Handling"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/sandbox",children:"Try it now!"})}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"basic-syntax",children:"Basic Syntax"}),"\n",(0,s.jsx)(e.h3,{id:"printing-and-comments",children:"Printing and Comments"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Use ",(0,s.jsx)(e.code,{children:"print()"})," to display output."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'print("Hello, World!")\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Comments are written using ",(0,s.jsx)(e.code,{children:"#"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# This is a single-line comment\n"})}),"\n",(0,s.jsx)(e.h3,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Variables store data and do not need explicit type declaration."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'x = 10       # Integer\nname = "Alice" # String\nis_valid = True # Boolean\n'})}),"\n",(0,s.jsx)(e.h3,{id:"data-types",children:"Data Types"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Common types: ",(0,s.jsx)(e.code,{children:"int"}),", ",(0,s.jsx)(e.code,{children:"float"}),", ",(0,s.jsx)(e.code,{children:"str"}),", ",(0,s.jsx)(e.code,{children:"bool"}),", ",(0,s.jsx)(e.code,{children:"list"}),", ",(0,s.jsx)(e.code,{children:"dict"}),", ",(0,s.jsx)(e.code,{children:"tuple"}),", ",(0,s.jsx)(e.code,{children:"set"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'num = 5        # int\ngrade = 3.8    # float\ntext = "Hello" # str\nitems = [1, 2, 3] # list\ndata = {"key": "value"} # dict\n'})}),"\n",(0,s.jsx)(e.h3,{id:"input",children:"Input"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Get user input with ",(0,s.jsx)(e.code,{children:"input()"})," (returns a string)."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'name = input("What is your name? ")\nprint(f"Hello, {name}!")\n'})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"for-loops",children:"For Loops"}),"\n",(0,s.jsx)(e.h3,{id:"basic-loop",children:"Basic Loop"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Iterate over a range of numbers:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(5):\n    print(i)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"0\n1\n2\n3\n4\n"})}),"\n",(0,s.jsx)(e.h3,{id:"looping-through-collections",children:"Looping Through Collections"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Iterate over lists, strings, or other iterable objects:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Loop through characters in a string:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'for char in "Python":\n    print(char)\n'})}),"\n",(0,s.jsx)(e.h3,{id:"nested-loops",children:"Nested Loops"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"A loop inside another loop:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'for i in range(3):\n    for j in range(2):\n        print(f"i={i}, j={j}")\n'})}),"\n",(0,s.jsxs)(e.h3,{id:"using-break-and-continue",children:["Using ",(0,s.jsx)(e.code,{children:"break"})," and ",(0,s.jsx)(e.code,{children:"continue"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Exit a loop early with ",(0,s.jsx)(e.code,{children:"break"}),":"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(5):\n    if i == 3:\n        break\n    print(i)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Skip the current iteration with ",(0,s.jsx)(e.code,{children:"continue"}),":"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(5):\n    if i == 2:\n        continue\n    print(i)\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"rudimentary-notes-on-python",children:"Rudimentary Notes on Python"}),"\n",(0,s.jsx)(e.h3,{id:"indentation",children:"Indentation"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Python uses indentation (spaces or tabs) to define code blocks."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'if True:\n    print("This is indented")\n'})}),"\n",(0,s.jsx)(e.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Define reusable blocks of code with ",(0,s.jsx)(e.code,{children:"def"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))\n'})}),"\n",(0,s.jsx)(e.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Use ",(0,s.jsx)(e.code,{children:"try"})," and ",(0,s.jsx)(e.code,{children:"except"})," to handle errors."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\n'})}),"\n",(0,s.jsx)(e.h3,{id:"common-libraries",children:"Common Libraries"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Import libraries for extended functionality."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import math\nprint(math.sqrt(16))\n"})}),"\n",(0,s.jsx)(e.h3,{id:"example-program",children:"Example Program"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nnumber = int(input("Enter a number: "))\nprint(f"Factorial of {number} is {factorial(number)}")\n\n\n---\n\nThis guide provides a strong foundation for mastering Python programming, sorting algorithms, vectorized operations, and writing robust test cases. Keep practicing and exploring advanced topics to further enhance your skills.\n'})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>a});var r=i(6540);const s={},o=r.createContext(s);function t(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);