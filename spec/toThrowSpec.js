/**
 * toThrow > Verifica se uma exceção é lançada por um método
 * não valida, apenas certifica que ocorreu um erro na function
 * quando deseja saber só se deu erro, sem se preocupar com
 * detalhes como tipo ou mensagem de erro
 */
describe("Teste do toThrow", () => { // Suit
  it("Deve testar o uso do toThrow", () => { // Spec
    function multiplicar() {
      numero * 10;
    }

    function somar(n1, n2) {
      return n1 + n2;
    }

    // Expectations and Matcher
    expect(multiplicar).toThrow();
    expect(somar).not.toThrow();
  });
});