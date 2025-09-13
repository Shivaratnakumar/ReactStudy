import { CORE_CONCEPTS } from "./data";
import User from "./components/Practice/User";
import { CourseGoal } from "./components/Practice/CourseGoal";
import CustomCard from "./components/Practice/CustomCard";
import Header from "./components/Header/Header";
import ConceptItem from  "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";
import {EXAMPLES} from "./data";


function App() {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabSelect = (tab) => {
    console.log(`${tab} tab selected`);
    setSelectedTab(tab);
  };
  return (
    <div>
      <Header />      
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <ConceptItem key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={(() => handleTabSelect("components"))} active={selectedTab === "components"}>Components</TabButton>
            <TabButton onSelect={(() => handleTabSelect("jsx"))} active={selectedTab === "jsx"}>JSX</TabButton>
            <TabButton onSelect={(() => handleTabSelect("props"))} active={selectedTab === "props"}>Props</TabButton>
            <TabButton onSelect={(() => handleTabSelect("state"))} active={selectedTab === "state"}>State</TabButton>
          </menu>
          {!selectedTab && <CustomCard name="Custom Card">
                    <p>Please select a tab</p>
                  </CustomCard>}
          {selectedTab === "components" && <CustomCard name="Components">
                    <p>This is a components card</p>
                  </CustomCard>}
          {selectedTab === "jsx" && <CustomCard name="JSX">
                    <p>This is a JSX card</p>
                  </CustomCard>}
          {selectedTab === "props" && <CustomCard name="Props">
                    <p>This is a props card</p>
                  </CustomCard>}
          {selectedTab === "state" && <CustomCard name="State">
                    <p>This is a state card</p>
                  </CustomCard>}

          {selectedTab && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <code>{EXAMPLES[selectedTab].code}</code>
            </div>
          )}
        </section>
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
    </div>
  );
}

export default App;
