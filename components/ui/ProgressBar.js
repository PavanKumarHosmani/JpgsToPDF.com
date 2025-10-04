export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden shadow-inner">
      <div
        className="bg-gradient-to-r from-blue-500 to-blue-700 h-4 text-[11px] flex items-center justify-center text-white font-bold transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
}
