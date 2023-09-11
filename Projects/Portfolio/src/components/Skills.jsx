import React from "react";
import SectionTitle from "./UI/SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";

function Skills() {
  return (
    <section className="py-10 align-element bg-black" id="skills">
      <SectionTitle text="My skills" />
      <div className="py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
