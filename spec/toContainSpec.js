/**
 * toContain > realiza busca por determinado
 * item em um array, busca também uma substring
 * dentro de uma string
 * NÃO suport busca por expressões regulares
 */
describe("Teste do toContain", () => { // Suit
  it("Deve testar o uso do toContain", () => { // Spec
    var texto = "Menu nome é Gustavo";
    var frutas = ["laranja", "maça", "pera"];

    // Expectations and Matcher
    expect(texto).toContain("Gustavo");
    expect(texto).not.toContain("gustavo");

    expect(frutas).toContain("laranja");
    expect(frutas).not.toContain("uva");
  });
});