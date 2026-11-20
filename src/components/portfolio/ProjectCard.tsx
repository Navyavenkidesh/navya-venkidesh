import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Building2, Play, Pause, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
  image?: string;
  video?: string;
  outcome?: string;
  confidential?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number>(0);

  const updateProgress = useCallback(() => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
    animFrameRef.current = requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!videoRef.current || !project.video) return;
    videoRef.current.play();
    setIsPlaying(true);
    animFrameRef.current = requestAnimationFrame(updateProgress);
  };

  const handleMouseLeave = () => {
    if (!videoRef.current || !project.video) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    } else {
      videoRef.current.play();
      animFrameRef.current = requestAnimationFrame(updateProgress);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="elegant-card overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Visual — Video with Image Poster */}
      {(project.video || project.image) && (
        <div className="relative h-52 overflow-hidden cursor-pointer" onClick={project.video ? toggleVideo : undefined}>
          {project.video ? (
            <>
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image}
                loop
                muted
                playsInline
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              {/* Play/Pause Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-background/30 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: isPlaying ? 0 : 1 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  )}
                </motion.div>
              </motion.div>
            </>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={1088}
              height={608}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />

          {/* Index Marker */}
          <span className="absolute top-4 right-4 font-mono text-xs text-primary px-2 py-1 rounded-md bg-background border border-primary/20">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Featured Badge */}
          {project.featured && (
            <motion.span
              className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-md bg-primary text-primary-foreground glow-accent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Featured
            </motion.span>
          )}

          {/* Video Progress Bar */}
          {project.video && isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30 z-10">
              <motion.div
                className="h-full pastel-spectrum rounded-r-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Company Badge */}
        <div className="flex items-center gap-2 text-xs text-primary mb-3">
          <Building2 className="w-3.5 h-3.5 text-primary" />
          <span>{project.subtitle}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Outcome highlight */}
        {project.outcome && (
          <div className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-mint/10 border border-mint/25 mb-4">
            <TrendingUp className="w-4 h-4 text-mint mt-0.5 shrink-0" />
            <span className="text-sm text-foreground leading-snug">{project.outcome}</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        {project.confidential ? (
          <div className="inline-flex items-center gap-2 self-start rounded-md border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Confidential company project · code & demo not public
          </div>
        ) : (project.demo && project.demo !== "#" || project.repo) && (
          <div className="flex flex-wrap gap-3">
            {project.demo && project.demo !== "#" && <Button asChild size="sm"><a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3.5 w-3.5" />Live Demo</a></Button>}
            {project.repo && <Button asChild size="sm" variant="outline"><a href={project.repo} target="_blank" rel="noopener noreferrer"><Github className="h-3.5 w-3.5" />Code</a></Button>}
          </div>
        )}
      </div>
    </motion.article>
  );
}
