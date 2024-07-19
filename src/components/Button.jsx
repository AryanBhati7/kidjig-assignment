import React from "react";

function Button({ className, children }) {
  return (
    <button
      className={`px-4 py-2 font-semibold rounded-lg border-[#5E74E8] border-[1px] ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
