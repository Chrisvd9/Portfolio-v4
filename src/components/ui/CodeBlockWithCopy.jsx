import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useCallback } from "react";

const CodeBlockWithCopy = ({ codeString, language = "bash" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(codeString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, [codeString]);

  return (
    <div className="relative max-w-full overflow-auto">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-gray-800 text-white px-3 py-1 text-xs sm:text-sm rounded"
        aria-label="Copy code to clipboard"
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        language={language}
        style={solarizedlight}
        customStyle={{
          padding: "1rem",
          borderRadius: "8px",
          backgroundColor: "#282c34",
          maxWidth: "100%",
          fontSize: "0.875rem",
          whiteSpace: "pre-wrap", 
          wordWrap: "break-word", 
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlockWithCopy;
