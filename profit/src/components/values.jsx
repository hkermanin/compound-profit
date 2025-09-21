import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";

export default function Values() {

  const {result,setResult} = useContext(MainContext);

  const [input1,setInput1] = useState('');
  const [input2,setInput2] = useState('');
  const [input3,setInput3] = useState('');

  function cal(){
    if(input1 && input2 && input3){
      let _result = {
      input1,
      input2,
      input3
    }
    setResult(_result);
  }else{
    alert('لطفا همه فیلدها را پر کنید')
  }
}


  return (
    <div className="flex flex-col  rounded  border w-[400px] h-[450px] border-gray-300">
      <p className="p-2 text-xl mb-3 border-b border-gray-300 bg-gray-100">
        محاسبه آنلاین سود مرکب
      </p>

      <div className="flex flex-col m-2 text-lg">
        <label htmlFor="input1">سرمایه اولیه:</label>
        <input
          onKeyDown={(e)=>{if(e.key==='Enter'){cal()}}}
          onChange={(e)=>{setInput1(Number(e.target.value))}}
          dir="ltr"
          placeholder="سرمایه اولیه"
          id="input1"
          className="border transition duration-300 rounded focus:outline-none focus:border-blue-400  focus:ring-3 focus:ring-blue-400/50  p-1 mt-2 outline-blue-400 border-gray-400"
          type="number"
        />
      </div>

      <div className="flex flex-col m-2 text-lg">
        <label htmlFor="input2">درصد سود هر گام:</label>
        <input
          onKeyDown={(e)=>{if(e.key==='Enter'){cal()}}}
          onChange={(e)=>{setInput2(Number(e.target.value))}}
          dir="ltr"
          placeholder="درصد سود هر گام"
          id="input2"
          className="border transition duration-300 rounded focus:outline-none focus:border-blue-400  focus:ring-3 focus:ring-blue-400/50  p-1 mt-2 outline-blue-400 border-gray-400"
          type="number"
        />
      </div>

      <div className="flex flex-col m-2 text-lg">
        <label htmlFor="input3">تعداد گام:</label>
        <input
          onKeyDown={(e)=>{if(e.key==='Enter'){cal()}}} 
          onChange={(e)=>{setInput3(Number(e.target.value))}}
          dir="ltr"
          placeholder="تعداد گام"
          id="input3"
          className="border transition duration-300 rounded focus:outline-none focus:border-blue-400  focus:ring-3 focus:ring-blue-400/50  p-1 mt-2 outline-blue-400 border-gray-400"
          type="number"
        />
      </div>

      <button onClick={cal} className="flex hover:bg-green-600 font-bold text-xl text-white p-3 m-2 mt-5 cursor-pointer rounded bg-green-500 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
          />
        </svg>
        <span>محاسبه</span>
      </button>
    </div>
  );
}
