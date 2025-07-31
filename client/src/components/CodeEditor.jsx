import { useState } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ code, setCode, language }) => {
  return (
    <div className="border rounded-xl shadow p-2 bg-white">
      <Editor
        height="400px"
        width="700px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(e) => setCode(e)}
      />
    </div>
  );
};

export default CodeEditor;