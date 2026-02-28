import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy load non-critical sections
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

const LoadingFallback = () => (
  <div className="py-24 flex justify-center">
    <div className="w-5 h-5 border border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
