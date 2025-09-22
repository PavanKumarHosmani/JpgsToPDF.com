export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mt-2 sticky top-0 z-50">
      <div
        className="bg-green-500 h-4 rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
