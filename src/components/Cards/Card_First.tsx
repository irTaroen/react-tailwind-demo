import { useState } from 'react';

export default function Card_First(props:any) {
  const [text, setText] = useState("Initial String");

  interface YourData {
    message: string;
  }

  const fetchData = async (endpoint: string): Promise<void> => {
    try {
      const urlfull = "http://127.0.0.1:8000/" + endpoint
      const response = await fetch(urlfull);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: YourData = await response.json();
      const message = data.message;
      setText(message);
      console.log(data.message);
      ;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const buttons = [{
    name: "Home",
    endpoint: "",
    id: 1
  }, 
  {
    name: "Items",
    endpoint: "items",
    id: 2
  }, {
    name: "Hello",
    endpoint: "hello",
    id: 3
  }]
  return (

    <div className="flex my-2 max-w-3xl mx-auto rounded-md  bg-[#001118]">
      <div className=" w-80">
        <img src={props.path} alt="" className=" object-cover rounded-md" />
      </div>
      <div className=" w-full mx-2 ">
        <div className=" border-b-2 h-52 flex justify-center items-center"> {text}</div>
        <div className='flex'>
          <div className=" flex justify-around mt-6 w-96">
            {buttons.map((entry) => (<button className=" text-xs w-24 font-bold text-center p-2 rounded-md uppercase text-white cursor-pointer bg-blue-500 shadow-md hover:scale-110" onClick={()=>fetchData(entry.endpoint)}>{entry.name}</button>))}
          </div>
          <div className=' mt-6 flex items-center'>
            <button onClick={()=>setText("")} className=" text-xs w-24 font-bold text-center p-2 rounded-md uppercase text-white cursor-pointer bg-red-500 shadow-md hover:scale-110 mx-6" >Clear Data</button>
          </div>
        </div>
      </div>
      </div>

  )
}   