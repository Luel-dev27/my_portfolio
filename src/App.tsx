import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import Contact from './components/Contact';
import { PROJECTS } from './constants';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Decorative background grid */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        
        {/* Work Section */}
        <section id="work" className="section-container">
          <div className="mb-20">
            <div className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-4">Featured Work</div>
            <h2 className="text-7xl font-black tracking-tight mb-8">Projects I have <span className="text-white/30">worked on.</span></h2>
            <p className="text-xl text-white/40 max-w-2xl leading-relaxed">
              Here are a few projects that show how I solve problems, build systems, and turn ideas into working software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        <About />
        <SkillSection />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-display font-bold tracking-tighter">
         
          </div>
          
          <div className="text-white/40 text-sm font-mono uppercase tracking-widest">
            © 2026 Luel Abrha PORTFOLIO
          </div>

          <div className="flex items-center gap-6 text-white/50">
            <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            
          </div>
        </div>
      </footer>
      
      {/* Decorative glow elements */}
      <div className="fixed top-0 left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}
