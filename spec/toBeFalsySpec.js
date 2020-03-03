/**
 * toBeFalsy > compara variável e objeto e
 * verifica se existe um valor inválido
 * valor considerado inválido 'false', '0', '', 'undefined',
 * 'null' ou 'NaN'
 * prefira utlizar toBeTruthy ou invés de 'not.toBeFalsy'
 */
describe("Teste do toBeFalsy", () => { // Suit
  it("Deve testar o uso do toBeFalsy", () => { // Spec
    // Expectations and Matcher
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(0).toBeFalsy();

    expect(true).not.toBeFalsy();
  });
});