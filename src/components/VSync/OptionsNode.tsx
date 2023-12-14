import DataNode from "./DataNode";

export default function OptionsNode(props:any) {
  return (
    <div className="border border-solid border-white w-24 h-24 flex-col items-center justify-between opacity-90">
      <button
        className="my-1 mx-2 rounded-sm items-center w-20 bg-lime-500"
        onClick={props.add}
      >
        Standard
      </button>
      <button
        className="my-1 mx-2 rounded-sm items-center w-20 bg-indigo-500"
        onClick={props.condition}
      >
        Condition
      </button>
      <button
        className="my-1 mx-2 rounded-sm items-center w-20 bg-orange-600"
        onClick={props.end}
      >
        End
      </button>
    </div>
  );
}
