/**
 * toBeTruthy > verifica se objeto/variável possui valor
 * válido diferente de 'false', '0', '', 'undefined',
 * 'null' ou 'NaN'
 * prefira utlizar toBeFalsy ou invés de 'not.toBeTruthy'
 */
describe("Teste do toBeTruthy", () => { // Suit
  it("Deve testar o uso do toBeTruthy", () => { // Spec
    var n1 = 10;
    var n2 = undefined;
    var n3 = 0;
    var n4 = '';
    var n5 = null;
    var n6 = NaN;
    var n7;

    // Expectations and Matcher
    expect(n1).toBeTruthy();
    expect("Teste").toBeTruthy();
    expect(true).toBeTruthy();

    expect(n2).not.toBeTruthy();
    expect(n3).not.toBeTruthy();
    expect(n4).not.toBeTruthy();
    expect(n5).not.toBeTruthy();
    expect(n6).not.toBeTruthy();
    expect(n7).not.toBeTruthy();


  });
});