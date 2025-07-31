import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from './LanguageSelector';

const CodeEditor = ({ code, setCode }) => {
  const [language, setLanguage] = useState("cpp")

  return (
    <div className="border rounded-xl shadow p-2 bg-white">
      <LanguageSelector language={language} setLanguage={setLanguage}/>
      <Editor
        height="360px"
        width="700px"
        language={language}
        theme="vs-dark"
        value={code}
        defaultValue={`// Write your ${language} code here`}
        onChange={(e) => setCode(e)}
        options={{
          scrollBeyondLastLine: false,
          automaticLayout: true,
          fontSize: 16,
          minimap: { enabled: true },
          wordWrap: "on"
        }}
      />
    </div>
  );
};

export default CodeEditor;