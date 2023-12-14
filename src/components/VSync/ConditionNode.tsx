export default function ConditionNode(props) {
  const index = props.index;
  return (
    <div
      id={index}
      className=" border border-white w-28 h-24 text-center justify-center items-center flex cursor-pointer"
      onClick={() => alert("Select Condition")}
    >
      Condition #{index}
    </div>
  );
}
