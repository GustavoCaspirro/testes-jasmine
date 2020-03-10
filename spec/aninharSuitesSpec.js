describe("Suite Externa (aninhamento)", () => { // Suit
  var contadorExterno = 0;

  beforeEach(function () { // Será executado na suite externa e interna
    contadorExterno++;
  });

  it("Deve conter 1 para contadorExterno", () => { // Spec
    // Expectation and Matcher
    expect(contadorExterno).toEqual(1);
  });

  describe("Suite Interna", () => { // Suit
    var contadorInterno = 0;

    beforeEach(function () {
      contadorInterno++;
    });

    it("Deve validar o valor dos contadores", () => { // Spec
      // Expectations and Matchers
      expect(contadorInterno).toEqual(1);
      expect(contadorExterno).toEqual(2); // por executar o beforeEach fora ele somara 2 aqui
    });
  });
});