import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";
import Input from "./components/Practice/Input";


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
        <div id="content">
          <Input type="text" placeholder="Your name" />
          <Input richText placeholder="Your message" />
        </div>
      </main>
    </>
  );
}

export default App;
