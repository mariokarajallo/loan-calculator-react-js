import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);

  const min = 0;
  const max = 20000;
  const step = 100;
  function handleChange(e) {
    setCantidad(Number(e.target.value));
  }
  function handleOnclickDecremento() {
    const valor = cantidad - step;
    if (valor < min) {
      alert("El dinero no puede ser menor a 0");
    } else {
      setCantidad(valor);
    }
  }
  function handleOnclickIncremento() {
    const valor = cantidad + step;
    if (valor > max) {
      alert("El dinero no puede ser mayor a 20000");
      return;
    }
    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleOnclickDecremento} />
        <Button operador="+" fn={handleOnclickIncremento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-600"
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        value={cantidad}
      />
      <p className="text-center my-10 text-indigo-600 font-extrabold text-5xl">
        {formatearDinero(cantidad)}
      </p>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
    </div>
  );
}

export default App;
