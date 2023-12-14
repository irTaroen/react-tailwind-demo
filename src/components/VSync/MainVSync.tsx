import { useState } from "react";

import DataNode from "./DataNode";
import OptionsNode from "./OptionsNode";
import StandardNode from "./StandardNode";
import ConditionNode from "./ConditionNode";
import EndNode from "./EndNode";

export default function MainVSync() {
  const [nodeIndex, setNodeIndex] = useState(0);
  const [dataNodes, setDataNodes] = useState([]);

  const handleButtonClick_Add = (new_sequence) => {
    // Create a new array with the existing nodes and add a new DataNode
    setDataNodes([...dataNodes, { type: "Add", key: nodeIndex, sequnce:new_sequence}]);
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
    {/* body */}
      <div className=" flex items-center justify-center">
        <div className=" border border-white w-9/12 h-screen p-6 flex gap-3">
          <div className="flex">
            <DataNode index={1} />
            <OptionsNode
              add={handleButtonClick_Add}
              condition={handleButtonClick_Condition}
              end={handleButtonClick_End}
            />
          </div>
          <div className="flex gap-4 flex-wrap content-start">
            {dataNodes.map((item) => (
              <>
                {item.type === "Add"? 
                <div className="flex">
                  <StandardNode index={item.key} />
                  <OptionsNode
                  add={handleButtonClick_Add}
                  condition={handleButtonClick_Condition}
                  end={handleButtonClick_End}/>
                </div>
                  : item.type === "Condition"? 
                <div className="flex">
                  <ConditionNode index={item.key} />
                  <OptionsNode
                  add={handleButtonClick_Add}
                  condition={handleButtonClick_Condition}
                  end={handleButtonClick_End}/>
                </div>
                  : 
                <div className="flex">
                  <EndNode index={item.key} />
                  <OptionsNode
                  add={handleButtonClick_Add}
                  condition={handleButtonClick_Condition}
                  end={handleButtonClick_End}/>
                </div>
                }
              </>
            ))}
            </div>
        </div>
      </div>

    </>
  );
}
