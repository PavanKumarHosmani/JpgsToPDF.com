export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded mt-4">
      <div
        className="bg-blue-600 text-xs leading-none py-1 text-center text-white rounded"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
}
