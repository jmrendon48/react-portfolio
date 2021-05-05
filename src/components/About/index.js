import React from "react";

function About() {
  return (
    <section className="about">
      <h1 id="about" className="px-1">About Me</h1>
      <div className="px-1">
        <img
          src={require("../../assets/images/self-portrait.jpg").default}
          alt="self-portrait my-2"
          className="self-portrait px-1"
        ></img>
        <p className="px-1">
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
