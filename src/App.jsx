import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Capstone from "./pages/Capstone";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // --- STARS SETUP ---
    const STAR_COUNT = 200;
    let stars = [];

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8,
          alpha: Math.random(), // brightness
          alphaChange: Math.random() * 0.02 - 0.01, // flicker speed
        });
      }
    }
    initStars();

    // --- RIPPLES ---
    let ripples = [];

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // MIDNIGHT SKY BACKGROUND
      const grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grd.addColorStop(0, "#00010f");
      grd.addColorStop(1, "#00121c");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 🌟 STARS
      for (let s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();

        // flicker
        s.alpha += s.alphaChange;
        if (s.alpha <= 0 || s.alpha >= 1) s.alphaChange *= -1;
      }

      // 🌊 RIPPLES
      ripples = ripples.filter((r) => r.alpha > 0);

      for (let r of ripples) {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 200, 255, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        r.radius += 1.4;
        r.alpha -= 0.01;
      }

      requestAnimationFrame(draw);
    }

    draw();

    // LISTENERS
    const handleMove = (e) =>
      ripples.push({ x: e.clientX, y: e.clientY, radius: 5, alpha: 0.35 });

    const handleClick = (e) =>
      ripples.push({ x: e.clientX, y: e.clientY, radius: 12, alpha: 0.85 });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* GLOBAL RIPPLE CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: -1, // ensure it's behind everything
          position: "fixed",
        }}
      />

      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen text-gray-200">
            <Navbar className="fixed bottom-0 left-0 w-full z-50" />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/capstone" element={<Capstone />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}
