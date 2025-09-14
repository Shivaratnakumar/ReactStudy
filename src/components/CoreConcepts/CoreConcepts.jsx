import { CORE_CONCEPTS } from "../../data";
import ConceptItem from "../CoreConcept/CoreConcept";
export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept) => (
                    <ConceptItem key={concept.title} {...concept} />
                ))}
            </ul>
        </section>
    );
}