import { useState } from "react";

import DataNode from "./DataNode";
import OptionsNode from "./OptionsNode";
import ConditionNode from "./ConditionNode";

export default function MainVSync() {
  const [nodeIndex, setNodeIndex] = useState(2);
  const [dataNodes, setDataNodes] = useState([]);

  function createNode(props) {
    if (props.nodetype === "Add") {
      console.log("Add");
      return (
        <>
          <DataNode index={props.nodeIndex} />
        </>
      );
    } else if (props.nodetype === "Condition") {
      return (
        <>
          <ConditionNode index={props.nodeIndex} />
        </>
      );
      console.log("Condition");
    } else {
      // Handle other cases or return a default value
      console.log("End selected");
    }
  }

  const handleButtonClick_Add = () => {
    // Create a new array with the existing nodes and add a new DataNode
    setDataNodes([...dataNodes, { type: "Add", key: nodeIndex }]);
    setNodeIndex(nodeIndex + 1);
    // console.log(nodeIndex);
    // console.log(dataNodes);
  };

  const handleButtonClick_Condition = () => {
    // Create a new array with the existing nodes and add a new DataNode
    setDataNodes([...dataNodes, { type: "Condition", key: nodeIndex }]);
    setNodeIndex(nodeIndex + 1);

    // console.log(nodeIndex);
    // console.log(dataNodes);
  };

  const handleButtonClick_End = () => {
    // Create a new array with the existing nodes and add a new DataNode
    setDataNodes([...dataNodes, { type: "End", key: nodeIndex }]);
    setNodeIndex(nodeIndex + 1);

    // console.log(nodeIndex);
    // console.log(dataNodes);
  };
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className=" border border-solid border-white w-9/12 h-screen p-6 flex">
          <DataNode index={1} />
          <OptionsNode
            add={handleButtonClick_Add}
            condition={handleButtonClick_Condition}
            end={handleButtonClick_End}
          />
          {dataNodes.map((item) => (
            <>
              {item.type === "Add"
                ? "True"
                : item.type === "Condition"
                ? "False"
                : "No"}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
