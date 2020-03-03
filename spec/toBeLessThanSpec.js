/**
 * toBeLessThan > compara se um valor numérico é menor que outro
 * Converte em número mesmo que for passado em string
 * prefira utlizar toBeGreather ou invés de 'not.toBeLessThan'
 * para iguais prefira usar o toEqual
 */
describe("Teste do toBeLessThan", () => { // Suit
  it("Deve testar o uso do toBeLessThan()", () => { // Spec
    var PI = 3.1415
    var PIString = '3.1415';

    // Expectations and Matcher
    expect(3).toBeLessThan(PI);
    expect(3).toBeLessThan(PIString);

    expect(3.5).not.toBeLessThan(PI);
  });
});