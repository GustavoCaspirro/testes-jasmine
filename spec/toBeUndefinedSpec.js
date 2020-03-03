/**
 * toBeDefined > Compara um objeto como sendo "undefined"
 * prefira usar toBeDefined ao invés de 'not.toBeUndefined'
 * para fácil entendimento do código
 */
describe("Teste do toBeUndefined", () => {
  it("Deve validar", () => {
    var n1;
    var n2 = undefined;
    var n3 = false;

    expect(n1).toBeUndefined();
    expect(n2).toBeUndefined();

    expect(n3).not.toBeUndefined();
    expect(null).not.toBeUndefined();
  });
});