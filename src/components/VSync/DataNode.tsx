export default function DataNode(props) {
  const index = props.index;
  return (
    <div
      id={index}
      className=" border border-solid border-white w-24 h-24 text-center justify-center items-center flex cursor-pointer mx-2"
      onClick={() => alert("select data")}
    >
      DataNode #{index}
    </div>
  );
}
