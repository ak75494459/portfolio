// Skills.jsx
import React from "react";

const Skills = () => {
	const skills = [
		"React.js",
		"Next.js",
		"Node.js",
		"MongoDB",
		"Convex",
		"React Native (Expo)",
		"Tailwind CSS",
		"ShadCN UI",
		"Zod",
		"JavaScript",
		"TypeScript",
		"REST APIs",
		"Git & GitHub",
	];

	return (
		<section className="skills-section">
			<h2 className="title">My Skills</h2>

			<div className="skills-container">
				{skills.map((skill, index) => (
					<span key={index} className="skill-badge">
						{skill}
					</span>
				))}
			</div>
		</section>
	);
};

export default Skills;

/* ================= INLINE CSS ================= */

const styles = `
.skills-section {
  padding: 60px 20px;
  background: #ffffff;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
  
}

.title {
  font-size: 32px;
      padding-bottom: 30px;

  
  font-weight: 700;
  margin:auto;
  
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  max-width: 800px;
  margin: auto;
}

.skill-badge {
  padding: 10px 18px;
  border-radius: 999px;
  background: #e2e8f0;
  font-size: 14px;
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background: #2563eb;
  color: #fff;
  transform: scale(1.05);
}
`;

// Inject styles into document
if (typeof document !== "undefined") {
	const styleSheet = document.createElement("style");
	styleSheet.type = "text/css";
	styleSheet.innerText = styles;
	document.head.appendChild(styleSheet);
}
