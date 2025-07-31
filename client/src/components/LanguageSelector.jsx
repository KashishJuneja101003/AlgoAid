import React from "react";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <>
      <select className="bg-gray-800 text-white font-semibold rounded">
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
      </select>
    </>
  );
};

export default LanguageSelector;
