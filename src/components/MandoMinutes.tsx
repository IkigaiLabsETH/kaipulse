export default function MandoMinutes() {
  return (
    <div className="w-screen max-w-none h-[80vh] p-0 m-0 overflow-hidden flex flex-col">
      <iframe 
        src="https://www.mandominutes.com/Latest"
        className="w-full flex-1"
        title="Mando Minutes Latest Updates"
        allowFullScreen
      />
      <div className="bg-[#232329] w-full py-2 flex justify-start items-center pl-8">
        <a
          href="https://www.mandominutes.com/Subscribe?ref=ipEnVMmfeB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 border-2 border-yellow-500 bg-black/80 text-yellow-400 font-semibold rounded-lg shadow hover:bg-yellow-500 hover:text-black transition-colors duration-200 text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
          Subscribe for daily updates
        </a>
      </div>
    </div>
  );
} 