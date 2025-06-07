export default function WeeklyScheduleSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Weekly Training Schedule</h3>
        <p className="text-lg text-gray-300">
          View our detailed weekly training schedule with daily workouts, recovery protocols, and KPI tracking.
        </p>
        <a 
          href="/train/schedule" 
          className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-none hover:bg-yellow-400 transition-colors duration-200"
        >
          View Weekly Schedule
        </a>
      </div>
    </div>
  );
} 