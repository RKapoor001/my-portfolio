import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Curious Fitness",
    description: "A tracker+calculator for fitness enthus",
    link: "https://curiousfitness.vercel.app/",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 2,
    title: "Study Flow",
    description: "Routine+Habit maker for academics",
    link: "studyflow.vercel.app",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "My Shivalik",
    description: "An exclusive social networking platform for my school",
    link: "https://myshivalik.vercel.app/feed",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Exam Buddy AI",
    description: "An AI Chatbot exclusively trained for high shcool students syllabus",
    link: "https://aiexambuddy.vercel.app/",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 5,
    title: "NexChat",
    description: "AI-powered personal Chat application",
    link: "nexchat.vercel.app",
    color: "from-rose-500/20 to-red-500/20",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground font-display text-lg shadow-lg"
            data-testid="profile-avatar"
          >
            RK
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-xl font-semibold tracking-tight"
              data-testid="text-name"
            >
              RUDRA KAPOOR
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm text-muted-foreground"
              data-testid="text-age"
            >
              15 years old
            </motion.p>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              My Projects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of work that showcases my skills and passion for creating meaningful digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative block p-8 rounded-2xl bg-gradient-to-br ${project.color} border border-border/50 backdrop-blur-sm shadow-sm hover:shadow-xl transition-shadow duration-300`}
                data-testid={`link-project-${project.id}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-card/60 backdrop-blur-sm -z-10" />
                
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 text-foreground/60 font-display text-sm font-medium">
                    0{project.id}
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-project-desc-${project.id}`}>
                  {project.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 [Your Name]. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
