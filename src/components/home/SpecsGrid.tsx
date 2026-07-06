export default function SpecsGrid() {
  return (
    <section className="absolute top-0 left-0 right-0 z-20 -translate-y-1/2 w-full px-4 lg:px-6">
      <div className="max-w-[1440px] mx-auto bg-slate-950 text-white rounded-[24px] border border-white py-7 sm:py-9 px-4 lg:px-6 transition-colors duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">

          {/* Smart Connectivity */}
          <div className="flex items-center gap-3.5 group cursor-default text-left">
            <div className="w-11 h-11 rounded-full bg-[#BFFF07]/10 flex items-center justify-center text-[#95c503] font-bold transition-colors shrink-0 group-hover:bg-[#BFFF07] group-hover:text-black">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-black uppercase tracking-wider">Smart Connectivity</h3>
              <p className="font-sans text-[9px] text-neutral-gray font-medium uppercase tracking-wide mt-0.5">App Control & Live Tracking</p>
            </div>
          </div>

          {/* Regenerative Braking */}
          <div className="flex items-center gap-3.5 group cursor-default text-left">
            <div className="w-11 h-11 rounded-full bg-[#BFFF07]/10 flex items-center justify-center text-[#95c503] font-bold transition-colors shrink-0 group-hover:bg-[#BFFF07] group-hover:text-black">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17m-.5 0h.5m-.5 0v.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-black uppercase tracking-wider">Regenerative Braking</h3>
              <p className="font-sans text-[9px] text-neutral-gray font-medium uppercase tracking-wide mt-0.5">More Range, More Efficiency</p>
            </div>
          </div>

          {/* IP67 Certified */}
          <div className="flex items-center gap-3.5 group cursor-default text-left">
            <div className="w-11 h-11 rounded-full bg-[#BFFF07]/10 flex items-center justify-center text-[#95c503] font-bold transition-colors shrink-0 group-hover:bg-[#BFFF07] group-hover:text-black">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-black uppercase tracking-wider">IP67 Certified</h3>
              <p className="font-sans text-[9px] text-neutral-gray font-medium uppercase tracking-wide mt-0.5">Water & Dust Resistant</p>
            </div>
          </div>

          {/* Reverse Assist */}
          <div className="flex items-center gap-3.5 group cursor-default text-left">
            <div className="w-11 h-11 rounded-full bg-[#BFFF07]/10 flex items-center justify-center text-[#95c503] font-bold transition-colors shrink-0 group-hover:bg-[#BFFF07] group-hover:text-black">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-black uppercase tracking-wider">Reverse Assist</h3>
              <p className="font-sans text-[9px] text-neutral-gray font-medium uppercase tracking-wide mt-0.5">Easy Parking & Control</p>
            </div>
          </div>

          {/* Gear Fencing */}
          <div className="flex items-center gap-3.5 group cursor-default text-left">
            <div className="w-11 h-11 rounded-full bg-[#BFFF07]/10 flex items-center justify-center text-[#95c503] font-bold transition-colors shrink-0 group-hover:bg-[#BFFF07] group-hover:text-black">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-black uppercase tracking-wider">Gear Fencing</h3>
              <p className="font-sans text-[9px] text-neutral-gray font-medium uppercase tracking-wide mt-0.5">Advanced Safety Alerts</p>
            </div>
          </div>

          {/* OTA Updates */}
          <div className="flex items-center gap-3.5 group cursor-default text-left">
            <div className="w-11 h-11 rounded-full bg-[#BFFF07]/10 flex items-center justify-center text-[#95c503] font-bold transition-colors shrink-0 group-hover:bg-[#BFFF07] group-hover:text-black">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-black uppercase tracking-wider">OTA Updates</h3>
              <p className="font-sans text-[9px] text-neutral-gray font-medium uppercase tracking-wide mt-0.5">Always Up To Date</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
