describe("Teste do afterAll", () => { // Suit
  var contador;

  beforeAll(function () {
    contador = 10;
  });

  afterAll(function () {
    contador = 0;
  });

  it("Deve exibir o contador com valor 10", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(10);
  });

  it("Deve manter o contador com valor 10", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(10);
  });
});