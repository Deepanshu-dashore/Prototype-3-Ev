export default function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-background to-surface border-t border-borders relative overflow-hidden w-full px-6 lg:px-12 transition-all duration-300">
      {/* Soft Z background icon */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-primary stroke-[2] transition-colors duration-300">
          <path d="M15 15H85L35 60H85L70 85H15L45 40H15V15Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <h2 className="font-general-sans text-xl sm:text-2xl font-black uppercase tracking-wide text-primary transition-colors duration-300">
            Stay Ahead. Stay Electric.
          </h2>
          <p className="font-sans text-xs text-neutral-gray mt-2 font-light max-w-md transition-colors duration-300">
            Subscribe to get the latest updates, offers & product launches.
          </p>
        </div>
        
        <div className="w-full md:w-auto max-w-sm flex items-center gap-2">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-background border border-borders rounded-[4px] px-4 py-3 text-xs text-primary placeholder-neutral-gray focus:outline-none focus:border-[#BFFF07] transition-colors duration-300"
          />
          <button className="bg-[#BFFF07] hover:bg-[#a6df05] text-black font-general-sans text-[10px] font-black uppercase px-6 py-3 rounded-[4px] tracking-widest transition-colors shrink-0">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
