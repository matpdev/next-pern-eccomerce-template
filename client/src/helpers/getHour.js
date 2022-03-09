export const getSaudacao = () => {
  let dataHora, xHora, saudacao;
  dataHora = new Date();

  xHora = dataHora.getHours();

  if (xHora >= 0 && xHora < 12) {
    saudacao = "Bom Dia";
  }
  if (xHora >= 12 && xHora < 18) {
    saudacao = "Boa Tarde";
  }
  if (xHora >= 18 && xHora < 23) {
    saudacao = "Boa Noite";
  }

  console.log(saudacao);
  return saudacao;
};
