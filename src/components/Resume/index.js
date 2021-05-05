import resume from "../../assets/files/joshua-rendon-resume.pdf";

function Resume() {
  return (
    <section>
      <div className="proficiency-container">
        <h3 className="proficiency-title">Proficiencies:</h3>
        <ul>
          <li className="proficiency">Git</li>
          <li className="proficiency">HTML</li>
          <li className="proficiency">CSS</li>
          <li className="proficiency">JavaScript</li>
          <li className="proficiency">JQuery</li>
          <li className="proficiency">Ajax</li>
          <li className="proficiency">Express</li>
          <li className="proficiency">Node</li>
          <li className="proficiency">MongoDB</li>
          <li className="proficiency">React</li>
          <li className="proficiency">MySQL</li>
        </ul>
      </div>
      <div className="resume-container">
        <a className="resume-download" href={resume} download>
          Download my resume here.
        </a>
      </div>
    </section>
  );
}

export default Resume;
