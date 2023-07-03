const formatearDinero = (valor) => {
  const formatear = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatear.format(valor);
};

export { formatearDinero };
