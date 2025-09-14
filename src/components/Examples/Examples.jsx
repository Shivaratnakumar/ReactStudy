import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import CustomCard from "../Practice/CustomCard";
import { useState } from "react";
import Section from "../Section";

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState("");
    const handleTabSelect = (tab) => {
        console.log(`${tab} tab selected`);
        setSelectedTab(tab);
    };
    return (
        <Section title="Examples" id="examples">
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
        </Section>
    );
}