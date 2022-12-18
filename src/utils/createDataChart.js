export const createWorksCategoriesData = (datos) => {
  const etiquetas = datos.map((valor) => valor.r_from);

  // esto pbb se puede simplicar pero ahora no sé cómo
  // segurametne se puede retornar un array de arrays
  const v_total = datos.map((valor) => +valor.total);
  const v_totalorig = datos.map((valor) => +valor.totaloriginal);
  const v_totalreed = datos.map((valor) => +valor.totalreed);

  const totales = {
    label: 'Totales',
    backgroundColor: '#f87979',
    data: v_total
  };

  const totalorig = {
    label: 'Total original',
    backgroundColor: '#4545d1',
    data: v_totalorig
  };

  const totalreed = {
    label: 'Total reed',
    backgroundColor: '#66d145',
    data: v_totalreed
  };

  const chartData = {
    labels: etiquetas,
    datasets: [totales, totalorig, totalreed]
  };

  return chartData;
};

export const createChaptersDecadesData = (data) => {
  const labels = data.map((value) => value.decada);
  const d_total = data.map((value) => +value.total);

  const totals = {
    label: 'Total',
    backgroundColor: '#f87979',
    data: d_total
  };

  const chartData = {
    labels,
    datasets: [totals]
  };

  return chartData;
};
