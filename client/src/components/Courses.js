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
              <b>Summer 2022</b>
              <br/>Computer Science: Data Structures and Algorithms 
            </p>
          </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Summer 2021</b>
              <br/>Computer Science: Data Structures and Algorithms 
            </p>
          </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Summer 2020</b>
              <br/>Computer Science: Software Engineering Lab 
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Summer 2020</b>
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
              <b>Summer 2022</b>
              <br/>Computer Vision Lab
            </p>
        </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Winter 2021-2022</b>
              <br/>Reinforcement Learning Lab
              <br/>Introduction to Intelligent User Interfaces
            </p>
        </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Summer 2021</b>
              <br/>Artificial Intelligence For Games
              <br/>Practical Machine Learning
              <br/>Search Engines
            </p>
        </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Winter 2020-2021</b>
              <br/>Introduction to Deep Learning (TUM)
              <br/>Information Visualization
              <br/>Newest Algorithms in Deep Learning for Text Classifictation Seminar
              <br/>Sketching with Hardware
            </p>
        </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Summer 2020</b>
              <br/>Data Science Lab
              <br/>Autonomous Systems Lab
              <br/>Intelligent Systems
            </p>
        </Timeline.Item>
        <Timeline.Item>
            <p>
              <b>Winter 2019-2020</b>
              <br/>Computer Science: Deep Learning and Artificial Intelligence
              <br/>Computer Science: Big Data Management and Analytics
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Summer 2019</b>
              <br/>Computer Science: Machine Learning
              <br/>Computer Science: Algorithms and Data Structures
              <br/>Computer Science: Discrete Mathematics
              <br/>Computer Science: Computer Architektur
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Winter 2018</b>
              <br/>Computer Science: Database Systems 
              <br/>Computer Science: Introduction to Programming in Java
              <br/>Computer Science: Operating Systems
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }

}
