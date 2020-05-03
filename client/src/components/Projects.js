import React from "react";
import { Card } from "antd";

import "../css/Projects.css";
import chronologyLogo from "../assets/chronology_logo.svg";

export default class Projects extends React.Component {

  render() {
    return (
      <div className="projects">
        {this.renderProjects()}
      </div>
    );
  }

  renderProjects() {

    return (
      <div>
        <h2>Personal Projects</h2>

        <Card className="card" title="Chronology" extra={<a href="https://github.com/brianyu28/chronology">GitHub</a>}>
          <p>
            <img src={chronologyLogo} alt="Chronology" style={{ maxWidth: "100px", paddingRight: "10px", float: "left" }}  />
            {/* First Project */}
          </p>
        </Card>

        <Card className="card" title="Accompaniment" extra={<a href="https://github.com/brianyu28/accompaniment">GitHub</a>}>
          <p>
            {/* Second Project */}
            <code>.wav</code> file correspodning to the melody, the system detects the frequency and volume of the notes and produces
            a new audio file containing the original melody with an overlaid accompaniment track.
          </p>
          <p>
            Designed with Amy Gu.
          </p>
        </Card>

        <Card className="card" title="Dispatch" extra={<a href="https://github.com/brianyu28/dispatch">GitHub</a>}>
          <p>
            {/* Third Project */}
          </p>
        </Card>

        <Card className="card" title="Extemp Timer" extra={
          <span>
            <a href="https://brianyu28.github.io/extemp/">Link</a> / <a href="https://github.com/brianyu28/extemp">GitHub</a>
          </span>}>
          <p>
          {/* Fourth Project */}
          </p>
        </Card>

        <Card className="card" title="Crimson Infographics" extra={<a href="https://github.com/brianyu28/infographics-crimcom17">GitHub</a>}>
          <p>
            {/* Fifith Project */}
          </p>
        </Card>

        <Card className="card" title="CS Guidebook" extra={
          <span>
            <a href="https://www.csguidebook.com/">Link</a> / <a href="https://github.com/brianyu28/csguidebook">GitHub</a>
          </span>}
        >
          <p>
            {/* Sixth Project */}
          </p>
        </Card>

        <h2>CS50 Projects</h2>
        <Card className="card" title="help50" extra={<a href="https://github.com/cs50/help50-server">GitHub</a>}>
          <p>
            <code>help50</code> is a command-line tool to help introductory computer science students understand error messages.
            It takes common error messages as produced by <code>clang</code>, <code>valgrind</code>, or other programs,
            and passes them through a series of regular expression filters and translators to convert the messages into a
            more beginner-friendly format.
          </p>
          <p>
            Designed with <a href="http://annieechen.com/">Annie Chen</a>.
          </p>
        </Card>

        <Card className="card" title="CS50.me" extra={<a href="https://cs50.me">Link</a>}>
          <p>
            CS50.me is CS50's gradebook system. It handles the auto-grading of student assignments,
            grade editors for course staff, and a gradebook view for students.
          </p>
        </Card>

        <h2>Research Projects</h2>
        <Card className="card" title="TAG to ACG Translator" extra={<a href="https://github.com/brianyu28/tag-to-acg">GitHub</a>}>
          <p>
            The TAG to ACG translator is a compiler to translate tree-adjoining grammars into
            equivalent abstract categorial grammars in a format
            that can be understood by the <a href="http://calligramme.loria.fr/acg/">ACG Toolkit</a>.
            This allows for the testing of a string for membership in the language of
            any arbitrary TAG (with optional null-adjoining constraints).
          </p>
          <p>
            Designed with support from <a href="http://www.eecs.harvard.edu/~shieber/">Stuart Shieber</a> and <a href="https://scholar.harvard.edu/aggazzotti/home">Cristina Aggazzotti</a>.
          </p>
        </Card>

        <h2>Looking for more projects?</h2>
        Find them on my <a href="https://github.com/MustafaYasin">GitHub Profile</a>.
      </div>
    );
  }

}
