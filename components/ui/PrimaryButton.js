export function PrimaryButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 
        ${disabled 
          ? "bg-gray-300 cursor-not-allowed text-gray-600" 
          : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white"
        }`}
    >
      {children}
    </button>
  );
}
