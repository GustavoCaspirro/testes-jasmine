describe("Teste do afterEach", () => { // Suit
  var contador = 0;

  beforeEach(function () {
    contador++;
  });

  afterEach(function () {
    contador = 0;
  });

  it("Deve incrementar o contador para 1", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(1);
  });

  it("Deve validar se o contador manteve 1", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(1);
  });
});