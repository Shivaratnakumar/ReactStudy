import ReactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";
import MainGoal from "./MainGoal";
import User from "./User";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];


function genRandomIndex(max) {  
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomIndex(reactDescriptions.length - 1)];
  return (
    <header>
        <img src={ReactImg} alt="Stylized atom" />
        <MainGoal />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function ConceptItem({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
        <h2>Time to get started!</h2>
        <p>Welcome on board of this course! You got this 💪</p>
        <User />
      </main>
    </div>
  );
}

export default App;
