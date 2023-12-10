import { useState } from 'react';

export default function Card_First() {
  const [text, setText] = useState("Initial String");

  interface YourData {
    message: string;
  }

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/");

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
    name: "get 1",
    url: "",
    id: 1
  }, {
    name: "get 2",
    url: "",
    id: 2
  }, {
    name: "post 1",
    url: "",
    id: 3
  }]
  return (
    <div className="flex my-2 max-w-3xl mx-auto rounded-md border border-solid border-white">
      <div className=" w-80 bg-white">
        <img src="public/img/Cards/CardFirst.png" alt="" className=" object-cover rounded-md" />
      </div>
      <div className=" w-full mx-2">
        <div className=" border-b-2 h-52"> {text}</div>
        <div className='flex'>
          <div className=" flex justify-around mt-6 w-96">
            {buttons.map((data) => (<button className=" text-xs w-24 font-bold text-center p-2 rounded-md uppercase text-white cursor-pointer bg-blue-500 shadow-md hover:scale-110" onClick={fetchData}>{data.name}</button>))}
          </div>
          <div className=' mt-6 flex items-center'>
            <button onClick={()=>setText("Data Cleared")} className=" text-xs w-24 font-bold text-center p-2 rounded-md uppercase text-white cursor-pointer bg-blue-500 shadow-md hover:scale-110" >Clear Data</button>
          </div>
        </div>
      </div>
    </div>

  )
}   