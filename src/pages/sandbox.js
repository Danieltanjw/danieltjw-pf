import React, { useState } from 'react';
import axios from 'axios';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';
import Layout from '@theme/Layout';

// Supported language configurations
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

// Boilerplate templates for functions or methods
const boilerplateTemplates = {
  python: (code) =>
    `${code}\n\nif __name__ == "__main__":\n    main()`,
  cpp: (code) =>
    `#include <iostream>\nusing namespace std;\n\nint main() {\n${code
      .split('\n')
      .map((line) => `    ${line}`)
      .join('\n')}\n    return 0;\n}`,
  java: (code) =>
    `public class Main {\n    public static void main(String[] args) {\n${code
      .split('\n')
      .map((line) => `        ${line}`)
      .join('\n')}\n    }\n}`,
};

const Sandbox = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const { siteConfig } = useDocusaurusContext();
  const apiKey = "";
  const apiURL = "";
  
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setOutput(''); // Clear output when language changes
    setCode(''); // Reset code area
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
            'X-RapidAPI-Host': {apiURL},
            'X-RapidAPI-Key': {apiKey}, // Replace with your API key
          },
        }
      );

      const token = response.data.token;

      // Poll for the result
      const resultResponse = await axios.get(
        `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        {
          headers: {
            'X-RapidAPI-Host': {apiURL},
            'X-RapidAPI-Key': {apiKey}, // Replace with your API key
          },
        }
      );

      const result = resultResponse.data;
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
    <Layout title="Sandbox" description="Code Sandbox with Language Support">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 0',
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        <h1>Programming Sandbox</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '1rem',
          }}
        >
          <select
            value={language}
            onChange={handleLanguageChange}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
          <button
            onClick={executeCode}
            style={{
              padding: '10px 20px',
              backgroundColor: loading ? '#ccc' : '#007acc',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            disabled={loading}
          >
            {loading ? 'Running...' : 'Run Code'}
          </button>
        </div>
        <CodeMirror
          value={code}
          extensions={[languageExtensions[language]()]}
          theme={oneDark}
          onChange={(value) => setCode(value)}
          height="200px"
          style={{
            width: '100%',
            marginBottom: '1rem',
          }}
        />
        <div
          style={{
            border: '1px solid #000',
            borderRadius: '5px',
            padding: '1rem',
            backgroundColor: '#f9f9f9',
            width: '100%',
          }}
        >
          <h3>Output</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {output || 'No output yet. Write some code and run it!'}
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default Sandbox;
