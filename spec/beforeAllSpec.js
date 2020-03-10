describe("Teste do beforeAll", () => { // Suit
  var contador;

  beforeAll(function () {
    contador = 10;
  });

  beforeEach(function () {
    contador++;
  });

  it("Deve exibir o contador com valor 11", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(11);
  });

  it("Deve exibir o contador com valor 12", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(12);
  });
});