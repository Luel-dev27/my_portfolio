import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="os-window p-12 lg:p-20 flex flex-col justify-center"
        >
          <div className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-6">About Me</div>
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight leading-[0.95]">
            I build with care. <br />
            <span className="text-white/30">And I keep learning.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            <p>
              I enjoy taking an idea and turning it into something real. I care about making the app look good, work well, and stay simple enough to improve later.
            </p>
            <p>
              I work with React.js, Node.js, Express.js, and NestJS. I also use PostgreSQL, MongoDB, and MySQL when a project needs a solid database.
            </p>
            <p className="text-sm">
              Some of my work includes a campus entry-exit system, a QR hotel menu, an infrastructure reporting tool, and a restaurant management system. Each project helped me become better at planning, building, and finishing real software.
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group ${
                idx === 1 ? 'bg-linear-to-br from-blue-600/20 to-indigo-600/20' : 'bg-card'
              }`}
            >
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4">{item.company}</div>
              <h3 className="text-2xl font-bold mb-4">{item.role}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
              
              <div className="absolute top-8 right-8 h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/20">
                {idx + 1}
              </div>
            </motion.div>
          ))}
          
          <div className="p-8 px-10 rounded-[2rem] border border-white/5 glass flex items-center justify-between">
            <div className="text-sm font-mono text-white/50">STACK.USE(['REACT', 'NODE', 'Nest', 'PSQL'])</div>
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
