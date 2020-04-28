import React from "react";
import { Timeline } from "antd";

export default class Courses extends React.Component {

  render() {
    return (
      <div className="courses">
        {this.renderCoursesTaught()}
        {this.renderCoursesTaken()}
      </div>
    );
  }

  renderCoursesTaught() {

    return (
      <div>
        <h2>Courses I've Taught</h2>
        <Timeline>
          <Timeline.Item>
            <p>
              <b>Summer Semester 2020</b>
              <br/>Computer Science: Data Structures and Algorithms 
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }

  renderCoursesTaken() {

    return (
      <div>
        <h2>Important Courses I've Taken</h2>
        <Timeline>
        <Timeline.Item>
            <p>
              <b>Summer Semester 2020</b>
              <br/>Intelligent Systems
              <br/>Practical Course in Big Data Science
              <br/>Artificial Intelligence for Games
              <br/>Infrastructure for Advanced Analytics and Machine Learning
              <br/>Practical Course in Administration and Conception of Virtual Systems 
            </p>
        </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Winter Semester 2019-2020</b>
              <br/>Computer Science: Deep Learning and Artificial Intelligence
              <br/>Computer Science: Big Data Management and Analytics
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Summer Semester 2019</b>
              <br/>Computer Science: Machine Learning
              <br/>Computer Science: Algorithms and Data Structures
              <br/>Computer Science: Discrete Mathematics
              <br/>Computer Science: Computer Architektur
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Winter Semester 2018</b>
              <br/>Computer Science: Database Systems 
              <br/>Computer Science: Introduction to Programming in Java
              <br/>Computer Science: Operating Systems
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Summer Semester 2018 (Peking University)</b>
              <br/>Mechatronics: Embedded Systems I
              <br/>Mechatronics: Embedded Systems II
              <br/>Computer Science: Advanced C++
              <br/>Computer Science: Computer Networks
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Winter Semester 2017 (University of Technology Sydney)</b>
              <br/>Elective: Academic English
              <br/>Computer Science: Testing and Quality Management
              <br/>Computer Science: Embedded Software
              <br/>Mechatronics: Finite Element Method
              <br/>Mechatronics: Mechanism Design and Analysis
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Summer Semester 2017</b>
              <br/>Mechatronics: Bachelor Thesis
              <br/>Mechatronics: Mechatronics Integration
              <br/>Mechatronics: Design Engineering II
              <br/>Mechatronics: Manufacturing Engineering II
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }

}
