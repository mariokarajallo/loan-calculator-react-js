import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const min = 0;
  const max = 20000;
  const step = 100;
  function handleChange(e) {
    setCantidad(Number(e.target.value));
  }
  function handleOnclickDecremento() {
    const valor = cantidad - step;
    if (valor < 0) {
      alert("El dinero no puede ser menor a 0");
    } else {
      setCantidad(valor);
    }
  }
  function handleOnclickIncremento() {
    const valor = cantidad + step;
    if (valor > 20000) {
      alert("El dinero no puede ser mayor a 20000");
    } else {
      setCantidad(valor);
    }
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
        {cantidad}
      </p>
    </div>
  );
}

export default App;
