const CircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-2 h-2${className}`}
  >
    <circle cx="12" cy="12" r="9" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

export default CircleIcon;
