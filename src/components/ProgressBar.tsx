
function ProgressBar({ progress, color }) {
  return (
    <div className="w-full bg-blue-300 rounded-lg h-6 mb-4">
      <div
        className={`h-full rounded-lg ${color}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar