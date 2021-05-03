import React from "react";

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <div>
        <img
          src={require("../../assets/images/self-portrait.jpg").default}
          alt="self-portrait my-2"
          className="self-portrait"
        ></img>
        <p>
          I am currently a student attending the UCLA Extension Coding Bootcamp,
          inspired and motivated to work and succeed as a full-stack web
          developer out in the professional work force. On my free time, I enjoy
          making music, skateboarding, and playing chess.
        </p>
      </div>
    </section>
  );
}

export default About;
