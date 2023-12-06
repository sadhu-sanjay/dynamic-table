import CloseIcon from "~/icons/close-icon";

const ClearButton: React.FC<{ onClear: () => void }> = ({ onClear }) => {
  return (
    <button
      type="button"
      className="primary-bg rounded-full absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center "
      onClick={onClear}
    >
      <CloseIcon />
    </button>
  );
};

export default ClearButton;
