/**
 * toMatch > realiza a comparações utilizando expressões regulares
 */
describe("Teste do toMatch", () => { // Suit
  it("Deve validar o uso do Match", () => { // Spec
    const text = "Teste com jasmine";
    const cep = "09510-000";
    const expressaoRegularCep = /^\d{5}-\d{3}$/;
    /**
     * Match >>> valida caseSensitive (ex.: jasmine != Jasmine)
     * mas posso usar expressão regular para ignorar isto
     */

    // Expectations and Matchers
    expect(text).toMatch("jasmine");
    expect(text).toMatch(/jasmine/i); // expressão regular
    expect(cep).toMatch(expressaoRegularCep);
  });
});