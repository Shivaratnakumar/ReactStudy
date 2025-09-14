import User from "./components/Practice/User";
import { CourseGoal } from "./components/Practice/CourseGoal";
import CustomCard from "./components/Practice/CustomCard";
import Header from "./components/Header/Header";
import ConceptItem from  "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState, Fragment} from "react";
import {EXAMPLES} from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";


function App() {

  return (
    <>
      <Header />      
      <main>
        <CoreConcepts />
        <Examples />
        {/* <CustomCard name="Custom Card">
          <p>This is a custom card</p>
        </CustomCard> */}
        {/* <h2>Time to get started!</h2> */}
        {/* <p>Welcome on board of this course! You got this 💪</p>
        <User />

        <p>One course, many goals! 🎯</p>
        <ul> 
          <CourseGoal title="Learn React" description="Learn React in-depth and from the ground up" />
          <br />
          <CourseGoal title="Practice React" description="Udemy assignment" />
          <br />
          <CourseGoal title="Build a project" description="Build a project using React" />
          <br />
          <CourseGoal title="Learn Redux" description="Learn Redux in-depth and from the ground up" />
          <br />
          <CourseGoal title="Learn React Router" description="Learn React Router in-depth and from the ground up" />
          <br />
          <CourseGoal title="Learn React Native" description="Learn React Native in-depth and from the ground up" />
        </ul> */}
        
      </main>
    </>
  );
}

export default App;
