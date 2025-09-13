import { CORE_CONCEPTS } from "./data";
import User from "./components/Practice/User";
import { CourseGoal } from "./components/Practice/CourseGoal";
import CustomCard from "./components/Practice/CustomCard";
import Header from "./components/Header/Header";
import ConceptItem from  "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
  return (
    <div>
      <Header />      
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <ConceptItem {...CORE_CONCEPTS[0]} />
            <ConceptItem {...CORE_CONCEPTS[1]} />
            <ConceptItem {...CORE_CONCEPTS[2]} />
            <ConceptItem {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
        <CustomCard name="Custom Card">
          <p>This is a custom card</p>
        </CustomCard>
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
    </div>
  );
}

export default App;
