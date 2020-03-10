describe("Teste do beforeEach", () => { // Suit
  var contador = 0;

  beforeEach(function () {
    contador++;
  });

  it("Deve incrementar o contador para 1", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(1);
  });

  it("Deve incrementar o contador para 2", () => { // Spec
    // Expectations and Matchers
    expect(contador).toEqual(2);
  });
});