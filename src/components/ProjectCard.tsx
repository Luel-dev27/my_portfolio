import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="os-window flex flex-col group hover:border-blue-500/30 transition-all duration-500"
    >
      <div className="p-5">
        <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            onError={(event) => {
              event.currentTarget.src = '/projects/project-placeholder.svg';
            }}
          />
        </div>
      </div>

      <div className="p-8 lg:p-10 pt-4 md:pt-4 bg-white/[0.01] border-t border-white/5 group-hover:bg-blue-500/[0.02] flex-1">
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] font-mono font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase tracking-widest">
              {tag}
            </span>
        ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-6">{project.title}</h3>

        <p className="text-base text-white/40 leading-relaxed group-hover:text-white/60 transition-colors mb-8">
          {project.description}
        </p>
        
        <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group/link">
          View project 
          <span className="h-[1px] w-4 bg-blue-400 transition-all group-hover/link:w-8" />
        </a>
      </div>
    </motion.div>
  );
}
