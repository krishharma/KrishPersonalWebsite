import React from "react";
import {
  Brain, Cpu, Code2, TrendingUp, FlaskConical,
  Rocket, BarChart2, Zap, Atom, GraduationCap,
  Mic2, Network, Layers, Satellite, Binary
} from "lucide-react";
import "./MainTitle.css";

const MainTitle = () => {
  const icons = [
    { Icon: Brain, label: "AI & Machine Learning" },
    { Icon: Cpu, label: "Neuromorphic Computing" },
    { Icon: Code2, label: "Software Engineering" },
    { Icon: TrendingUp, label: "Finance & Investing" },
    { Icon: FlaskConical, label: "Research" },
    { Icon: Rocket, label: "Entrepreneurship" },
    { Icon: BarChart2, label: "Data Science" },
    { Icon: Zap, label: "FPGA / Hardware" },
    { Icon: Atom, label: "Quantum Computing" },
    { Icon: GraduationCap, label: "Academics" },
    { Icon: Mic2, label: "Debate & Public Speaking" },
    { Icon: Network, label: "Multi-Agent AI" },
    { Icon: Layers, label: "DECA & Business" },
    { Icon: Satellite, label: "Innovation" },
    { Icon: Binary, label: "Neural Networks" }
  ];

  return (
    <div className="main-title-section">
      <div className="title-container">
        <div className="background-rectangle">
          <h1 className="background-name">Krish Sharma</h1>
        </div>
        <div className="character-placeholder">
          <div className="character-silhouette">
            <div className="spider-web-pattern"></div>
          </div>
        </div>
      </div>
      <div className="infinite-scroller-container">
        <div className="infinite-scroller" aria-hidden="true">
          <div className="scroller-track">
            {[...Array(3)].map((_, setIndex) => (
              icons.map((item, i) => {
                const IconComponent = item.Icon;
                return (
                  <div key={`icon-${setIndex}-${i}`} className="scroller-icon-item" title={item.label}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                );
              })
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
