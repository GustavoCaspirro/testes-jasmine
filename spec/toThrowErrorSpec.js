/**
 * toThrowError > Verifica se uma exceção é lançada por um método
 * valida o tipo da exceção lançada
 * valida a mensagem de erro contida na exceção
 * suporta expressão regular na validação da mensagem de erro
 * deve ser utilizada para maior controle do erro lançado
 */
describe("Teste do toThrowError", () => { // Suit
  it("Deve testar o uso do toThrowError", () => { // Spec
    var somar = function (n1, n2) {
      if (n1 <= 0 || n2 <= 0) {
        throw new TypeError("Deve ser maior que 0");
      }

      return n1 + n2;
    }

    // Expectations and Matcher
    expect(function () { somar(0, 0) }).toThrowError();
    expect(function () { somar(0, 0) }).toThrowError(
      "Deve ser maior que 0"
    );
    expect(function () { somar(0, 0) }).toThrowError(
      /maior que 0/
    );
    expect(function () { somar(0, 0) }).toThrowError(TypeError);
    expect(function () { somar(0, 0) }).toThrowError(
      TypeError, "Deve ser maior que 0"
    );

    expect(function () { somar(1, 1) }).not.toThrowError();
  });
});