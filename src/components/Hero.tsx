import { motion } from 'motion/react';

const profileImage = '/profile.jpg';
const fallbackProfileImage = '/profile.svg';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 section-container">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="os-window p-1"
      >
        {/* Window controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-2 text-white/20">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono tracking-widest text-white/30 uppercase">
            Luel Abrha Portfolio
          </div>
          <div className="text-[10px] font-mono text-white/20 tracking-widest">PORTFOLIO</div>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-0">
          {/* Sidebar Area */}
          <div className="p-8 border-r border-white/5 bg-white/[0.01]">
            <div className="relative mb-12 flex justify-center">
              <div className="relative p-2 rounded-full border border-white/10">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse" />
                <div className="h-44 w-44 rounded-full overflow-hidden border-2 border-white/20">
                  <img 
                    src={profileImage}
                    alt="Luel Abrha profile portrait"
                    className="w-full h-full object-cover grayscale"
                    onError={(event) => {
                      event.currentTarget.src = fallbackProfileImage;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-1">Luel Abrha</h2>
                <div className="text-blue-400/60 font-medium font-mono text-sm">Full Stack Developer</div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                I build websites, APIs, and systems that are clear, useful, and easy for people to work with.
              </p>

              <div className="pt-6 border-t border-white/5">
                <div className="flex flex-col gap-4">
                  <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-white/40 flex justify-between items-center">
                    <span>luelabrha27@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center">
            {/* Background Glow */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-white/50 uppercase mb-8">
                Personal Portfolio
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8">
                H<span className="text-blue-500">{`</>`}</span>llo, I'm <br />
                <span className="gradient-text">Luel</span>
              </h1>

              <p className="text-xl text-white/60 max-w-xl mb-12 leading-relaxed">
                I am a full stack developer who enjoys turning real problems into working products. I like clean interfaces, strong backend logic, and simple solutions that people can actually use.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#work" className="btn-primary flex items-center gap-2">
                  View Projects
                </a>
                <a href="#about" className="btn-outline">
                  More About Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
