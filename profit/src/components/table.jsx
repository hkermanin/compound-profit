import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/mainContext";

export default function Table() {
  const { result, setResult } = useContext(MainContext);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    setProfit(result.input1 * (1 + result.input2 / 100) ** result.input3);
  }, [result]);

  return profit ? (
    <div>
      <table className="rounded overflow-hidden w-[400px] text-lg text-right bg-gray-300 mt-6">

        <thead>
          <tr className="bg-black">
            <th colspan="2" className="text-white  text-xl font-bold p-2 w-36">نتیجه محاسبات</th>
            
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-2">مبلغ نهایی</td>
            <td className="p-2 font-bold">{profit.toFixed(2)}</td>
          </tr>
          <tr className="bg-gray-200 hover:bg-gray-100">
            <td className="p-2">سود خالص</td>
            <td className="p-2 font-bold">{(profit - result.input1).toFixed(2)}</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-2">درصد سود</td>
            <td className="p-2 font-bold">{(((profit - result.input1) * 100) / result.input1).toFixed(2)}%</td>
          </tr>
        </tbody>

      </table>
     
    </div>
  ) : (
    <div></div>
  );
}
