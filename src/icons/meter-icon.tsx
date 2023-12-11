const MeterIcon: React.FC = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-6 w-6"
      {...props}
    >
      <path d="m12 14 4-4"></path>
      <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
    </svg>
  );
};

export default MeterIcon;
