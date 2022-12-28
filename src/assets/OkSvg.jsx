import React from "react";

function OkSvg() {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="circleOkIconTitle"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="#fff"
    >
      <title>{"OK"}</title>
      <path d="m7 13 3 3 7-7" />
      <circle cx={12} cy={12} r={10} />
    </svg>
  );
}

export default OkSvg;
