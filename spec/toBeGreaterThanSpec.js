/**
 * toBeGreaterThan > compara se um valor numérico é maior que outro
 * Converte em número mesmo que for passado em string
 * prefira utlizar toBeLessThan ou invés de 'not.toBeGreaterThan'
 * para iguais prefira usar o toEqual
 */
describe("Teste do toBeGreaterThan", () => { // Suit
  it("Deve testar o uso do toBeGreaterThan", () => { // Spec
    var PI = 3.1415
    var PIString = '3.1415';

    // Expectations and Matcher
    expect(4).toBeGreaterThan(PI);
    expect("5").toBeGreaterThan(PIString);

    expect(3).not.toBeGreaterThan(PI);
  });
});