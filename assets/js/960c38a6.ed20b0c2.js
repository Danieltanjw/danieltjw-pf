"use strict";(self.webpackChunkdanieltjw_pf=self.webpackChunkdanieltjw_pf||[]).push([[1541],{9569:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation","title":"Vectorized Algorithms","description":"Vectorized algorithms are computational techniques designed to operate on entire arrays or matrices in a single step, rather than iterating through individual elements. This approach leverages modern hardware features like SIMD (Single Instruction Multiple Data) and optimized libraries, resulting in faster computations compared to traditional iterative methods.","source":"@site/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation.md","sourceDirName":"Basic_Programming_Languages/Python_Guide","slug":"/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation","draft":false,"unlisted":false,"editUrl":"https://github.com/Danieltanjw/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Sorting Algorithms","permalink":"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Sorting_Algorithms_Documentation"},"next":{"title":"Implementing a Programming Sandbox in Docusaurus","permalink":"/danieltjw-pf/docs/Programming_Sandbox_Documentation"}}');var t=i(4848),a=i(8453);const s={},o="Vectorized Algorithms",l={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"What Are Vectorized Algorithms?",id:"what-are-vectorized-algorithms",level:2},{value:"Definition",id:"definition",level:3},{value:"Key Characteristics",id:"key-characteristics",level:3},{value:"Benefits",id:"benefits",level:3},{value:"Key Concepts in Vectorization",id:"key-concepts-in-vectorization",level:2},{value:"1. Broadcasting",id:"1-broadcasting",level:3},{value:"Example (Python NumPy):",id:"example-python-numpy",level:4},{value:"2. Element-wise Operations",id:"2-element-wise-operations",level:3},{value:"Example (Python NumPy):",id:"example-python-numpy-1",level:4},{value:"3. Reduction Operations",id:"3-reduction-operations",level:3},{value:"Example (Python NumPy):",id:"example-python-numpy-2",level:4},{value:"Applications of Vectorized Algorithms",id:"applications-of-vectorized-algorithms",level:2},{value:"1. <strong>Matrix Multiplication</strong>",id:"1-matrix-multiplication",level:3},{value:"Example (Python NumPy):",id:"example-python-numpy-3",level:4},{value:"2. <strong>Image Processing</strong>",id:"2-image-processing",level:3},{value:"Example (Grayscale Conversion):",id:"example-grayscale-conversion",level:4},{value:"3. <strong>Machine Learning</strong>",id:"3-machine-learning",level:3},{value:"Example (Gradient Descent):",id:"example-gradient-descent",level:4},{value:"4. <strong>Natural Language Processing</strong>",id:"4-natural-language-processing",level:3},{value:"Example (Word Embeddings):",id:"example-word-embeddings",level:4},{value:"Performance Comparison: Vectorized vs Non-Vectorized",id:"performance-comparison-vectorized-vs-non-vectorized",level:2},{value:"Non-Vectorized Example (Python):",id:"non-vectorized-example-python",level:3},{value:"Vectorized Example (Python):",id:"vectorized-example-python",level:3},{value:"Time Complexity",id:"time-complexity",level:3},{value:"Hardware Acceleration for Vectorized Algorithms",id:"hardware-acceleration-for-vectorized-algorithms",level:2},{value:"1. SIMD (Single Instruction Multiple Data)",id:"1-simd-single-instruction-multiple-data",level:3},{value:"2. GPU Acceleration",id:"2-gpu-acceleration",level:3},{value:"3. Multi-threading",id:"3-multi-threading",level:3},{value:"Advantages of Vectorized Algorithms",id:"advantages-of-vectorized-algorithms",level:2},{value:"Summary of Vectorized Operations",id:"summary-of-vectorized-operations",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vectorized-algorithms",children:"Vectorized Algorithms"})}),"\n",(0,t.jsx)(n.p,{children:"Vectorized algorithms are computational techniques designed to operate on entire arrays or matrices in a single step, rather than iterating through individual elements. This approach leverages modern hardware features like SIMD (Single Instruction Multiple Data) and optimized libraries, resulting in faster computations compared to traditional iterative methods."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/",children:"Python Basics"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures",children:"Data Structures"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Sorting_Algorithms_Documentation",children:"Sorting Algorithms"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation",children:"Vectorized Algorithms"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Python_Testing_Documentation",children:"Writing Test Cases"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Error_Handling_in_Python",children:"Error Handling"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/sandbox",children:"Try it now!"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-are-vectorized-algorithms",children:"What Are Vectorized Algorithms?"}),"\n",(0,t.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(n.p,{children:["Vectorized algorithms utilize mathematical operations that are applied to entire data structures (such as arrays or matrices) simultaneously. These algorithms are often implemented in high-performance libraries like ",(0,t.jsx)(n.strong,{children:"NumPy"})," in Python, ",(0,t.jsx)(n.strong,{children:"Eigen"})," in C++, or using GPU-based frameworks like ",(0,t.jsx)(n.strong,{children:"CUDA"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"key-characteristics",children:"Key Characteristics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Operate on arrays/matrices instead of individual elements."}),"\n",(0,t.jsx)(n.li,{children:"Minimize explicit loops in the code."}),"\n",(0,t.jsx)(n.li,{children:"Leverage underlying hardware acceleration (e.g., SIMD, GPU, or multi-threading)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Speed"}),": Significant reduction in computation time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Code Simplicity"}),": Cleaner and more concise code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parallelism"}),": Exploits parallelism at the hardware level."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"key-concepts-in-vectorization",children:"Key Concepts in Vectorization"}),"\n",(0,t.jsx)(n.h3,{id:"1-broadcasting",children:"1. Broadcasting"}),"\n",(0,t.jsx)(n.p,{children:"Broadcasting allows arrays of different shapes to be used together in mathematical operations by stretching smaller arrays to match the shape of larger ones."}),"\n",(0,t.jsx)(n.h4,{id:"example-python-numpy",children:"Example (Python NumPy):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import numpy as np\n\n# Broadcasting example: Adding scalar to a matrix\nmatrix = np.array([[1, 2, 3], [4, 5, 6]])\nscalar = 10\nresult = matrix + scalar  # Scalar is broadcasted\nprint(result)\n# Output: [[11 12 13]\n#          [14 15 16]]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-element-wise-operations",children:"2. Element-wise Operations"}),"\n",(0,t.jsx)(n.p,{children:"Vectorized operations are applied element-wise on arrays without the need for explicit loops."}),"\n",(0,t.jsx)(n.h4,{id:"example-python-numpy-1",children:"Example (Python NumPy):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Element-wise multiplication\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nresult = a * b  # Multiplies corresponding elements\nprint(result)\n# Output: [4 10 18]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-reduction-operations",children:"3. Reduction Operations"}),"\n",(0,t.jsx)(n.p,{children:"Reduction operations (like summation or finding maximum) operate on entire arrays, reducing them to a single value or a lower-dimensional structure."}),"\n",(0,t.jsx)(n.h4,{id:"example-python-numpy-2",children:"Example (Python NumPy):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Summing all elements\narray = np.array([1, 2, 3, 4, 5])\nresult = np.sum(array)\nprint(result)\n# Output: 15\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"applications-of-vectorized-algorithms",children:"Applications of Vectorized Algorithms"}),"\n",(0,t.jsxs)(n.h3,{id:"1-matrix-multiplication",children:["1. ",(0,t.jsx)(n.strong,{children:"Matrix Multiplication"})]}),"\n",(0,t.jsx)(n.p,{children:"Matrix multiplication is a common operation in linear algebra and machine learning. Vectorized implementations are significantly faster than nested loops."}),"\n",(0,t.jsx)(n.h4,{id:"example-python-numpy-3",children:"Example (Python NumPy):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Matrix multiplication using NumPy\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nC = np.dot(A, B)  # Vectorized matrix multiplication\nprint(C)\n# Output: [[19 22]\n#          [43 50]]\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"2-image-processing",children:["2. ",(0,t.jsx)(n.strong,{children:"Image Processing"})]}),"\n",(0,t.jsx)(n.p,{children:"Operations like pixel-wise transformations or convolutions in image processing can be vectorized for speed."}),"\n",(0,t.jsx)(n.h4,{id:"example-grayscale-conversion",children:"Example (Grayscale Conversion):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Grayscale conversion using vectorized operations\nimport numpy as np\n\nimage = np.random.rand(100, 100, 3)  # RGB image\ngrayscale = 0.2989 * image[:, :, 0] + 0.5870 * image[:, :, 1] + 0.1140 * image[:, :, 2]\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"3-machine-learning",children:["3. ",(0,t.jsx)(n.strong,{children:"Machine Learning"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Loss Functions"}),": Vectorized implementation of mean squared error or cross-entropy."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gradient Descent"}),": Update weights for all training examples in a single step."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-gradient-descent",children:"Example (Gradient Descent):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Gradient descent step\nimport numpy as np\n\nweights = np.random.rand(3, 1)  # Random weights\nX = np.random.rand(100, 3)      # Feature matrix\ny = np.random.rand(100, 1)      # Target values\nlearning_rate = 0.01\n\n# Vectorized weight update\npredictions = np.dot(X, weights)\nerrors = predictions - y\ngradient = np.dot(X.T, errors) / len(y)\nweights -= learning_rate * gradient\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"4-natural-language-processing",children:["4. ",(0,t.jsx)(n.strong,{children:"Natural Language Processing"})]}),"\n",(0,t.jsx)(n.p,{children:"Vectorized operations are used in tokenization, embeddings, and sequence transformations."}),"\n",(0,t.jsx)(n.h4,{id:"example-word-embeddings",children:"Example (Word Embeddings):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Word embeddings using matrix multiplication\nimport numpy as np\n\nvocab_size = 10000\nembedding_dim = 300\nword_embeddings = np.random.rand(vocab_size, embedding_dim)  # Random embeddings\nword_indices = np.array([10, 200, 3000])  # Word indices in a sentence\nsentence_embeddings = word_embeddings[word_indices]\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"performance-comparison-vectorized-vs-non-vectorized",children:"Performance Comparison: Vectorized vs Non-Vectorized"}),"\n",(0,t.jsx)(n.h3,{id:"non-vectorized-example-python",children:"Non-Vectorized Example (Python):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Non-vectorized dot product\na = [1, 2, 3]\nb = [4, 5, 6]\ndot_product = 0\nfor i in range(len(a)):\n    dot_product += a[i] * b[i]\nprint(dot_product)\n# Output: 32\n"})}),"\n",(0,t.jsx)(n.h3,{id:"vectorized-example-python",children:"Vectorized Example (Python):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Vectorized dot product\nimport numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\ndot_product = np.dot(a, b)\nprint(dot_product)\n# Output: 32\n"})}),"\n",(0,t.jsx)(n.h3,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,t.jsx)(n.p,{children:"Vectorized algorithms are faster because they minimize interpreter overhead and use optimized libraries."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"hardware-acceleration-for-vectorized-algorithms",children:"Hardware Acceleration for Vectorized Algorithms"}),"\n",(0,t.jsx)(n.h3,{id:"1-simd-single-instruction-multiple-data",children:"1. SIMD (Single Instruction Multiple Data)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Executes the same operation on multiple data points simultaneously."}),"\n",(0,t.jsx)(n.li,{children:"Found in modern CPUs."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-gpu-acceleration",children:"2. GPU Acceleration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GPUs are designed for parallel processing, making them ideal for vectorized algorithms."}),"\n",(0,t.jsxs)(n.li,{children:["Libraries like ",(0,t.jsx)(n.strong,{children:"CUDA"})," or ",(0,t.jsx)(n.strong,{children:"TensorFlow"})," exploit GPU acceleration."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-multi-threading",children:"3. Multi-threading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Splits data across multiple CPU cores for parallel processing."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"advantages-of-vectorized-algorithms",children:"Advantages of Vectorized Algorithms"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Performance"}),": Faster execution due to hardware acceleration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Code Readability"}),": Simpler and cleaner code with fewer loops."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Memory Efficiency"}),": Reduces temporary variables and memory overhead."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"summary-of-vectorized-operations",children:"Summary of Vectorized Operations"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operation"}),(0,t.jsx)(n.th,{children:"Example"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Broadcasting"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array + scalar"})}),(0,t.jsx)(n.td,{children:"Automatically expands smaller arrays."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Element-wise Operations"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array1 * array2"})}),(0,t.jsx)(n.td,{children:"Applies operations element by element."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Reduction Operations"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"np.sum(array)"})}),(0,t.jsx)(n.td,{children:"Reduces arrays to a single value or dimension."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Matrix Multiplication"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"np.dot(A, B)"})}),(0,t.jsx)(n.td,{children:"Multiplies matrices efficiently."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Advanced Indexing"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array[indices]"})}),(0,t.jsx)(n.td,{children:"Accesses or modifies elements efficiently."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Vectorized algorithms are essential for high-performance computing tasks, particularly in data science, machine learning, and scientific computing. By utilizing optimized libraries and hardware acceleration, vectorized computations significantly outperform traditional iterative approaches in both speed and efficiency."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);