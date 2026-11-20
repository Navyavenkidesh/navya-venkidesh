import { motion } from "framer-motion";

export const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Glowing background orbs - dark theme */}
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-3xl"
      animate={{
        x: [0, 80, 40, 0],
        y: [0, 40, 80, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      style={{ top: "5%", left: "-5%" }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/25 to-transparent blur-3xl"
      animate={{
        x: [0, -40, -20, 0],
        y: [0, 60, -20, 0],
        scale: [1, 0.9, 1.05, 1],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      style={{ top: "30%", right: "5%" }}
    />
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-primary/20 to-primary/10 blur-3xl"
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
        scale: [1, 1.15, 0.85, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      style={{ bottom: "10%", left: "25%" }}
    />
    {/* Extra accent orb */}
    <motion.div
      className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl"
      animate={{
        x: [0, -50, 25, 0],
        y: [0, 50, -25, 0],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      style={{ top: "60%", right: "30%" }}
    />
  </div>
);

export const FloatingParticles = ({ count = 20 }: { count?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 4 + 2,
          height: Math.random() * 4 + 2,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `hsl(var(--primary) / ${0.4 + Math.random() * 0.4})`,
          boxShadow: `0 0 ${6 + Math.random() * 10}px hsl(var(--primary) / 0.5)`,
        }}
        animate={{
          y: [0, -30 - Math.random() * 40, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export const GeometricShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Rotating triangles */}
    <motion.div
      className="absolute w-24 h-24 border-2 border-primary/40"
      style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", top: "15%", left: "8%" }}
      animate={{ rotate: 360, scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute w-20 h-20 border-2 border-primary/30"
      style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", bottom: "25%", right: "12%" }}
      animate={{ rotate: -360, scale: [1, 0.8, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Floating squares */}
    <motion.div
      className="absolute w-16 h-16 border-2 border-primary/35 rotate-45"
      style={{ top: "30%", right: "20%" }}
      animate={{ y: [0, -25, 0], rotate: [45, 135, 45], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-10 h-10 bg-primary/10 rotate-12"
      style={{ bottom: "40%", left: "15%" }}
      animate={{ y: [0, 35, 0], rotate: [12, 72, 12], scale: [1, 1.3, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Glowing circles */}
    <motion.div
      className="absolute w-8 h-8 rounded-full border-2 border-dashed border-primary/40"
      style={{ top: "60%", left: "5%" }}
      animate={{ rotate: 360, scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute w-12 h-12 rounded-full border-2 border-primary/30"
      style={{ top: "20%", right: "8%" }}
      animate={{ rotate: -360, scale: [1, 1.2, 1] }}
      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Additional hexagon */}
    <motion.div
      className="absolute w-14 h-14 border-2 border-primary/25"
      style={{ 
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        top: "45%", 
        left: "70%" 
      }}
      animate={{ rotate: 360, scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export const GridPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
      animate={{ y: [0, 50], x: [0, 50] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export const GlowingLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute h-px w-60 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      style={{ top: "20%", left: "-10%" }}
      animate={{ x: ["-10%", "120%"], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute h-px w-48 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      style={{ top: "50%", right: "-5%" }}
      animate={{ x: ["10%", "-120%"], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute w-px h-48 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
      style={{ left: "30%", top: "-10%" }}
      animate={{ y: ["-10%", "120%"], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute h-px w-36 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      style={{ top: "75%", left: "20%" }}
      animate={{ x: ["-20%", "100%"], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    />
  </div>
);

export const PulsingDots = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-primary/60"
        style={{
          left: `${15 + (i * 10)}%`,
          top: `${20 + (i % 3) * 25}%`,
          boxShadow: `0 0 15px hsl(var(--primary) / 0.6)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 2 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);
