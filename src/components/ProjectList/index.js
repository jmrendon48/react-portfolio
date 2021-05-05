import React, { useState } from "react";

function ProjectList() {
  const [projects] = useState([
    {
      name: "The Bloc",
      deployedLink: "https://the-bloc.herokuapp.com/",
      githubLink: "https://github.com/jcc83267/Hrd-Cpy",
    },
    {
      name: "Personal Date Night Creator",
      deployedLink: "https://jmrendon48.github.io/Personal-Date-Night-Creator/",
      githubLink: "https://github.com/jmrendon48/Personal-Date-Night-Creator",
    },
    {
      name: "The Tech Blog",
      deployedLink: "https://blooming-scrubland-36821.herokuapp.com/",
      githubLink: "https://github.com/jmrendon48/tech-blog-14",
    },
    {
      name: "Weather Dashboard",
      deployedLink: "https://jmrendon48.github.io/weather-dashboard-6/",
      githubLink: "https://github.com/jmrendon48/weather-dashboard-6",
    },
    {
      name: "Work Day Scheduler",
      deployedLink: "https://jmrendon48.github.io/work-day-scheduler-5/",
      githubLink: "https://github.com/jmrendon48/work-day-scheduler-5",
    },
    {
      name: "Timed Coding Quiz",
      deployedLink: "https://jmrendon48.github.io/timed-coding-quiz-4/",
      githubLink: "https://github.com/jmrendon48/timed-coding-quiz-4",
    },
  ]);

  return (
    <div>
      <h1 className="project-list-title">Previous Projects:</h1>
      <div className="flex-row project-list">
        {projects.map((project, i) => (
          <div className="mx-1 project" key={project.name}>
            <img
              src={require(`../../assets/images/${i}.png`).default}
              alt={project.name}
              className="img-thumbnail"
            />
            <h3 className="block">{project.name}</h3>
            <a className="block" href={project.deployedLink}>Deployed Link</a>
            <a className="block" href={project.githubLink}>GitHub Repository</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
