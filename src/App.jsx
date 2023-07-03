import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultado = calcularTotalPagar(cantidad, meses);
    setTotal(resultado);
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(total / meses);
  }, [total]);

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

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span className="text-indigo-600"> de pagos</span>
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Elige un <span className="text-indigo-600"> Plazo</span> a pagar
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {" "}
          {formatearDinero(pago)} Mensuales
        </p>
      </div>
    </div>
  );
}

export default App;
