/**
 * Fail -> Falha Manual, permite interromper um teste lançando um erro.
 * Utilizamos a falha manual para certificar que uma operação não
 * desejada não seja executada
 */

describe("Teste do fail", () => { // Suit

  it("Deve testar o uso do fail", () => { // Spec
    var operacao = (executar, callback) => {
      if (executar) {
        callback();
      }
    }

    operacao(false, () => {
      fail("Não deve executar função de callback");
    });

  });
});