/**
 * toBe (===) > compara valor e tipo
 */
describe("Comparador toBe", () => {
  it("Deve validar o uso do toBe", () => {
    const obj1 = { valor: true };
    const obj2 = { valor: true };

    expect(true).toBe(true);
    expect("Teste").toBe("Teste");
    expect(obj1).not.toBe(obj2);
    /**
     * Expect abaixo comentado da erro,
     * pois o toBe não verifica apenas o valor,
     * verifica se o obejto é o mesmo, verifica
     * sua referência na memória
     * */

    // expect(obj1).toBe(obj2);

    /**
     * Close comentário expect
     */
  });
});