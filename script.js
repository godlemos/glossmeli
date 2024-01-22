function calcularArqueo() {
  var monedas1c = parseInt(document.getElementById('monedas1c').value) || 0;
  var monedas5c = parseInt(document.getElementById('monedas5c').value) || 0;
  var monedas10c = parseInt(document.getElementById('monedas10c').value) || 0;
  var monedas25c = parseInt(document.getElementById('monedas25c').value) || 0;
  var monedas50c = parseInt(document.getElementById('monedas50c').value) || 0;
  var monedas1 = parseInt(document.getElementById('monedas1').value) || 0;
  var billetes5 = parseInt(document.getElementById('billetes5').value) || 0;
  var billetes10 = parseInt(document.getElementById('billetes10').value) || 0;
  var billetes20 = parseInt(document.getElementById('billetes20').value) || 0;

  var total = monedas1c * 0.01 +
              monedas5c * 0.05 +
              monedas10c * 0.10 +
              monedas25c * 0.25 +
              monedas50c * 0.50 +
              monedas1 +
              billetes5 * 5 +
              billetes10 * 10 +
              billetes20 * 20;

  document.getElementById('total').textContent = total.toFixed(2);
}

