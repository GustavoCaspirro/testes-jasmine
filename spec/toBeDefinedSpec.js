/**
 * toBeDefined > Compara um objeto como não sendo "undefined"
 * prefira usar toBeUndefined ao invés de 'not.ToBeDefined'
 * para fácil entendimento do código
 */
describe("Teste do toBeDefined", () => { // Suit
  it("Deve validar o uso do toBeDefined", () => { // Spec
    var n1 = 10;
    var n2;
    var n3 = undefined;

    // Expecation and Matcher
    expect(n1).toBeDefined();
    expect(null).toBeDefined();
    expect(NaN).toBeDefined();

    expect(n2).toBeUndefined(); // prefira este
    expect(n2).not.toBeDefined(); // do que este
    expect(n3).toBeUndefined();
    expect(n3).not.toBeDefined();
  });
});