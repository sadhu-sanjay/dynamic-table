import React, { FC } from "react";

const FeedbackIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} h-4 w-4`}
    >
      <path d="M17 6.1H3"></path>
      <path d="M21 12.1H3"></path>
      <path d="M15.1 18H3"></path>
    </svg>
  );
};

export default FeedbackIcon;
