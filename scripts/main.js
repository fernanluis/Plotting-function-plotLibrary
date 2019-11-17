var parameters = {
  target: '#myFunction', //selector CSS q corresponde al elem HTML que contendra al diagrama div = id...
  data: [{
    fn: 'sin(x)',
    color: 'red'
 },
 {fn: 'cos(x)',
    color: 'blue'
  }
        ],
  grid: true, // true or false indica si traza o no una cuadricula respectivamente
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

functionPlot(parameters);

// Dos líneas en el código HTML que corresponden a la inclusión en el documento de algún código JavaScript externo:

// <script src = "https://d3js.org/d3.v3.min.js" > </script>
// <script src = "https://mauriciopoppe.github.io/function-plot/js/function-plot.js" > </script>
/* Tu trabajo:
intenta trazar el pecado (x ^ 2),
intenta cambiar el dominio de los valores x e y,
intente cambiar el color de la curva, etc.
*/
/*
functionPlot({
       target: '#myFunction',
       data: [{
       fn: 'sin(x)',
       color: 'red'
    }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
});
*/
