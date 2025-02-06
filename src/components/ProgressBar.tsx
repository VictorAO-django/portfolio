import React from 'react';

// Define the prop types for the ProgressBar component
interface ProgressBarProps {
  progress: number;  // The progress value (between 0 and 100)
  color: string;     // The color of the progress bar (e.g., 'bg-blue-600', 'bg-red-500')
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className="w-full bg-gray-200 rounded-lg h-2">
      <div
        className={`h-full rounded-lg ${color}`}
        style={{ width: `${progress}%` }} // Dynamic width based on the progress
      ></div>
    </div>
  );
}

export default ProgressBar;
