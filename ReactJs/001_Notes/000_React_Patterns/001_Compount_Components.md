```
import React, { useState } from "react";
import classNames from "classnames";
import "./App.css";

function Tabs(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const children = React.Children.map(props.children, (child) => {
    if (child.type === TabPanels) {
      return React.cloneElement(child, { activeIndex });
    } else if (child.type === TabList) {
      return React.cloneElement(child, {
        activeIndex,
        onActivateTab: setActiveIndex,
      });
    }
    return child;
  });
  return <div>{children}</div>;
}

function TabList(props) {
  const { activeIndex, onActivateTab } = props;
  const children = React.Children.map(props.children, (child, index) => {
    if (child.type === Tab) {
      return React.cloneElement(child, {
        active: activeIndex === index,
        onActivate: () => onActivateTab(index),
      });
    }
    return child;
  });

  return <div className="tab-list">{children}</div>;
}

function Tab(props) {
  const { disabled, active, onActivate } = props;

  return (
    <div
      className={classNames(
        "tab",
        active ? "tab--active" : "",
        disabled ? "tab--disabled" : ""
      )}
      onClick={disabled ? null : onActivate}
    >
      {props.children}
    </div>
  );
}

function TabPanels(props) {
  const { activeIndex } = props;
  return <div>{props.children[activeIndex]}</div>;
}

function TabPanel(props) {
  return <div className="tab-panel">{props.children}</div>;
}

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Tacos</Tab>
          <Tab disabled={true}>Burritos</Tab>
          <Tab>Coconut Korma</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tacos Tab Panel</TabPanel>
          <TabPanel>Burritos Tab Panel</TabPanel>
          <TabPanel>Coconut Tab Panel</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
```
