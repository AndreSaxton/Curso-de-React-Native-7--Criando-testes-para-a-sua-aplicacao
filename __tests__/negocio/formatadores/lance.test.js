import { formataMaiorLanceDoLeilao } from '../../../src/negocio/formatadores/lance';

describe("negocio/formatadores/lance", () => {

    describe("formataMaiorLanceDoLeilao", () => {
        const lances = [];
        const valorInicial = 5;
        it("deve retornar o lance inicial caso não exista outros lances", () => {
            const resultado = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(resultado).toBe(valorInicial);
        });
    });

    describe("formataMaiorLanceDoLeilao", () => {
        it("deve retornar o maior lance do leilão", () => {
            const lances = [{valor: 10},{valor: 30},{valor: 20}];
            const valorInicial = 5;
            const resultado = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(resultado).toBe(30);
        });
    });

});