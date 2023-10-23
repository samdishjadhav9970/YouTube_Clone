import React from "react";

function LeftNavMenuItem({ text, icon, className, action }) {
  return (
    <div
      className={`text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.5]`}
    >
      <span className="text-l mr-5">{text}</span>
    </div>
  );
}

export default LeftNavMenuItem;
