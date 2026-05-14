import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      label: 'EMAIL',
      value: 'luelabrha27@gmail.com',
      sub: 'Send me a message if you want to talk about a project, work opportunity, or collaboration.',
      icon: <Mail className="text-blue-400" />,
      link: 'mailto:luelabrha27@gmail.com'
    },
    {
      label: 'PHONE',
      value: '+251 923 201 127',
      sub: 'You can call me for a quick conversation about a project or technical work.',
      icon: <Phone className="text-blue-400" />,
      link: 'tel:+251923201127'
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/luel-abrha',
      sub: 'Connect with me and see more about my work and background.',
      icon: <Linkedin className="text-blue-400" />,
      link: '#'
    },
    {
      label: 'GITHUB',
      value: 'github.com/Luel-dev27',
      sub: 'See my code, experiments, and the projects I am working on.',
      icon: <Github className="text-blue-400" />,
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section-container pb-40">
      <div className="mb-20">
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-6">Contact</div>
        <h2 className="text-7xl font-black mb-8 tracking-tight">
          Have a project in mind? <br />
          <span className="gradient-text">Let's talk.</span>
        </h2>
        <p className="text-xl text-white/40 max-w-2xl leading-relaxed">
          I am open to backend work, full stack projects, APIs, and helpful AI features.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {contactInfo.map((info) => (
          <motion.a
            key={info.label}
            href={info.link}
            whileHover={{ y: -10 }}
            className="os-window p-10 block group hover:border-blue-500/30 transition-all"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">{info.label}</div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                {info.icon}
              </div>
            </div>
            <div className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{info.value}</div>
            <p className="text-sm text-white/40 leading-relaxed">{info.sub}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
