xdescribe("", () => { // Suit Desabilitada
  var contador = 0;

  beforeEach(function () {
    contador += 1;
  });

  it("Deve garantir que o contador foi incrementado em 1", () => { // Spec
    // Expectation and Matcher
    expect(contador).toEqual(1);
  });

  xit("Deve garantir que o contador foi incrementado em 1", () => { // Desabilita Spec
    // Expectation and Matcher
    expect(contador).toEqual(1);
  });

  it("Deve garantir que o contador foi incrementado em 1", () => { // Desabilita Spec
    // Expectation and Matcher
    expect(contador).toEqual(1);
    pendind("Teste pendente..."); // Posso usar esta função para inativá-lo
  });
});