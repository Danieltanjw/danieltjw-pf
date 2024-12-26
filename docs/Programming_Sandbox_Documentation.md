
# Implementing a Programming Sandbox in Docusaurus

This documentation provides a step-by-step guide to creating a programming sandbox in Docusaurus. The sandbox allows users to write and execute code in Python, C++, and Java using the **Judge0 API**.

---

## Prerequisites

1. **Node.js and npm**: Ensure you have Node.js installed on your system.
2. **Docusaurus Installed**: Set up a Docusaurus project. Follow the [Docusaurus documentation](https://docusaurus.io/docs) if needed.
3. **API Key for Judge0**:
   - Sign up at [RapidAPI Judge0](https://rapidapi.com/judge0-official/api/judge0-ce/).
   - Obtain your API key from the Judge0 dashboard.

---

## Step 1: Install Required Dependencies

Install the following npm packages for your project:

```bash
npm install @uiw/react-codemirror @codemirror/lang-python @codemirror/lang-cpp @codemirror/lang-java @codemirror/theme-one-dark axios
```

---

## Step 2: Create the Sandbox Page

1. Navigate to the `src/pages/` directory in your Docusaurus project.
2. Create a file named `sandbox.js`.

3. Add the following code to `sandbox.js`:

```javascript
import React, { useState } from 'react';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';
import Layout from '@theme/Layout';

const languageExtensions = {
  python: python,
  cpp: cpp,
  java: java,
};

const languageIds = {
  python: 71, // Judge0 ID for Python 3
  cpp: 76, // Judge0 ID for C++ (GCC 9.2.0)
  java: 62, // Judge0 ID for Java (OpenJDK 13)
};

const boilerplateTemplates = {
  python: (code) => `${code}

if __name__ == "__main__":
    main()`,
  cpp: (code) =>
    `#include <iostream>
using namespace std;

int main() {
${code
      .split('\n')
      .map((line) => `    ${line}`)
      .join('\n')}
    return 0;
}`,
  java: (code) =>
    `public class Main {
    public static void main(String[] args) {
${code
      .split('\n')
      .map((line) => `        ${line}`)
      .join('\n')}
    }
}`,
};

const Sandbox = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setOutput('');
    setCode('');
  };

  const executeCode = async () => {
    const completeCode = boilerplateTemplates[language](code);

    setLoading(true);
    try {
      const response = await axios.post(
        'https://judge0-ce.p.rapidapi.com/submissions',
        {
          source_code: completeCode,
          language_id: languageIds[language],
          stdin: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
            'X-RapidAPI-Key': '<YOUR_API_KEY>',
          },
        }
      );

      const token = response.data.token;

      const pollForResult = async (token) => {
        while (true) {
          const resultResponse = await axios.get(
            `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            {
              headers: {
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                'X-RapidAPI-Key': '<YOUR_API_KEY>',
              },
            }
          );

          const result = resultResponse.data;

          if (result.status.id === 3) {
            return result;
          }

          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      };

      const result = await pollForResult(token);
      setOutput(result.stdout || result.stderr || 'No output.');
    } catch (err) {
      if (err.response && err.response.status === 403) {
        setOutput('Error: Forbidden. Please check your API key or usage limits.');
      } else {
        setOutput(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
        <h1>Programming Sandbox</h1>
        <div style={{ marginBottom: '1rem', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <select value={language} onChange={handleLanguageChange} style={{ padding: '10px' }}>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
          <button onClick={executeCode} disabled={loading} style={{ padding: '10px 20px' }}>
            {loading ? 'Running...' : 'Run Code'}
          </button>
        </div>
        <CodeMirror
          value={code}
          extensions={[languageExtensions[language]()]
          theme={oneDark}
          onChange={(value) => setCode(value)}
          height="200px"
          style={{ marginBottom: '1rem', width: '100%' }}
        />
        <div style={{ border: '1px solid black', padding: '1rem', width: '100%' }}>
          <h3>Output:</h3>
          <pre>{output || 'No output yet.'}</pre>
        </div>
      </div>
    </Layout>
  );
};

export default Sandbox;
```

---

## Step 3: Access the Sandbox

- Start the development server:
  ```bash
  npm start
  ```
- Navigate to `/sandbox` in your browser (e.g., `http://localhost:3000/sandbox`).

---

## Customization Options

1. **Languages**:
   - Add or remove languages by updating the `languageExtensions` and `languageIds` mappings.

2. **Boilerplate Code**:
   - Modify the `boilerplateTemplates` object to customize how the user's code is wrapped.

3. **Styling**:
   - Update the inline styles or use a custom CSS file for advanced styling.

---

## Troubleshooting

- **403 Error**:
  - Ensure your API key is valid and has not exceeded usage limits.
  - Check the API key in your RapidAPI dashboard.

- **No Output**:
  - Verify the user's code is valid.
  - Ensure the Judge0 API response is properly logged for debugging.

---

This concludes the documentation for implementing a programming sandbox in Docusaurus.
