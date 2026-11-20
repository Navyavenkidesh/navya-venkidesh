import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, FileText, Home, Menu, Send, UserRound, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/", icon: Home, index: "01" },
  { label: "Work", path: "/work", icon: BriefcaseBusiness, index: "02" },
  { label: "Profile", path: "/profile", icon: UserRound, index: "03" },
  { label: "Contact", path: "/contact", icon: Send, index: "04" },
];

export function Header() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-24 flex-col items-center border-r border-border bg-card/85 py-6 backdrop-blur-xl md:flex">
        <NavLink to="/" aria-label="Navya Venkidesh home" className="mb-10 flex h-11 w-11 items-center justify-center rounded-md border border-primary/35 bg-primary/10 font-bold text-primary">
          NV
        </NavLink>
        <nav className="flex flex-1 flex-col items-center justify-center gap-3" aria-label="Portfolio pages">
          {navItems.map(({ label, path, icon: Icon, index }) => (
            <NavLink key={path} to={path} end={path === "/"} className="group relative flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {({ isActive }) => (
                <>
                  {isActive && <motion.span layoutId="rail-active" className="absolute inset-0 rounded-md border border-primary/35 bg-primary/10" />}
                  <Icon className={`relative h-5 w-5 ${isActive ? "text-primary" : ""}`} />
                  <span className="relative text-[10px] font-semibold">{label}</span>
                  <span className="absolute right-1 top-1 font-mono text-[8px] text-muted-foreground">{index}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="mb-3"><ThemeToggle /></div>
        <Button asChild size="icon" variant="outline" className="border-primary/30" title="Open resume">
          <NavLink to="/resume" aria-label="Open resume"><FileText /></NavLink>
        </Button>
      </aside>
      <MobileHeader />
    </>
  );
}

function MobileHeader() {
  return <MobileMenu />;
}

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-card/90 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-foreground">Navya Venkidesh</NavLink>
         <div className="flex items-center gap-1">
         <ThemeToggle />
         <Button size="icon" variant="ghost" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X /> : <Menu />}
        </Button>
         </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden" aria-label="Mobile portfolio pages">
            <div className="grid grid-cols-2 gap-2 pt-4">
              {navItems.map(({ label, path, icon: Icon }) => (
                <NavLink key={path} to={path} end={path === "/"} onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-2 rounded-md border px-3 py-3 text-sm ${isActive ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                  <Icon className="h-4 w-4" /> {label}
                </NavLink>
              ))}
              <NavLink to="/resume" onClick={() => setIsOpen(false)} className="col-span-2 flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground">
                <FileText className="h-4 w-4" /> Resume
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

import React from "react";