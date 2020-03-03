/**
 * toBeNull > compara um objeto como sendo "null"
 * null é um tipo, undefined é uma variável não definida
 */
describe("Teste do toBeNull", () => { // Suit
  it("Deve validar o uso do toBeNull", () => { // Spec
    var n1 = null;
    var n2 = undefined;
    var n3;
    var n4 = NaN;
    var n5 = "teste";

    // Expectation and Matcher
    expect(n1).toBeNull();

    expect(n2).not.toBeNull();
    expect(n3).not.toBeNull();
    expect(n4).not.toBeNull();
    expect(n5).not.toBeNull();

  });
});