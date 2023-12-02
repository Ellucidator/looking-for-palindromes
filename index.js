const palavra = prompt("Descobrindo Palídromos\n" + "Informe uma palavra:");
let pali = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  pali += palavra[i];
}
if (pali === palavra) {
  alert("Esta palavra é um palídromo");
} else {
  alert(
    "Esta palavra não é um palídromo\n" +
      "Observe a escrira: " +
      palavra +
      " != " +
      pali
  );
}
