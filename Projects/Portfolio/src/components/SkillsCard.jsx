import React from "react";

function SkillsCard(skill) {
  return (
    <article>
      <span>{skill.icon}</span>
      <h4 className="mt-6 font-bold  text-white">{skill.title}</h4>
      <p className="mt-2 text-gray-400">{skill.text}</p>
    </article>
  );
}

export default SkillsCard;
