import React from "react";
import "./CourseGoal.css";

export function CourseGoal({title, description}) {
    return (
      <li className="goals">
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }