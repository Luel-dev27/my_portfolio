import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

export default function SkillSection() {
  const categories: Skill['category'][] = ['Frontend', 'Backend', 'Database', 'Tools'];
  const [activeCategory, setActiveCategory] = useState<Skill['category']>('Frontend');

  return (
    <section id="skills" className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-white/50 uppercase mb-4">
            Skills
          </div>
          <h2 className="text-6xl font-bold tracking-tight">Skills I use often.</h2>
        </div>
      </div>

      <div className="os-window p-1">
        <div className="flex flex-wrap gap-2 p-6 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20' 
                  : 'text-white/40 hover:text-white border border-transparent'
              }`}
            >
              {cat === 'Frontend' && '< /> '}
              {cat === 'Backend' && '[ ] '}
              {cat === 'Database' && '( ) '}
              {cat === 'Tools' && '{ } '}
              {cat}
            </button>
          ))}
        </div>

        <div className="p-8 lg:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {SKILLS.filter(s => s.category === activeCategory).map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Skill</div>
                      <div className="text-lg font-bold">{skill.name}</div>
                    </div>
                    <div className="text-sm font-mono text-blue-400/60">{skill.level}%</div>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      className="h-full bg-linear-to-r from-blue-500 to-indigo-500"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
