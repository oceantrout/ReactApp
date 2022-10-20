import TabButton from "./TabButton.js";
import "./TabContainer.css";

function TabContainer() {
  return (
    <div className="TabContainer">
      <TabButton desc="TEAM MEMBERS" />
      <TabButton desc="PRODUCTS" />
      <TabButton desc="INDUSTRY" />
    </div>
  );
}

export default TabContainer;
