import { validaLance, validaFormatoNumericoDoLance } from '../../../src/negocio/validadores/lance';
import {
    VALIDO,
    INVALIDO,
    MENOR_QUE_VALOR_INICIAL,
    MENOR_OU_IGUAL_AOS_LANCES
} from "../../../src/negocio/constantes/estadosLance";

describe("negocio/validadores/lance", () => {

    describe("validaLance", () => {
        it("deve retornar VALIDO se o lance for maior que os outros", () => {
        const valorLance = 50;
        const leilao = {
            valorInicial: 10,
            lances: [{valor: 10},{valor: 30},{valor: 20}],
        };
            const resultado = validaLance(valorLance,leilao);
            expect(resultado).toBe(VALIDO);
        });

        it("deve retornar MENOR_QUE_VALOR_INICIAL se o lance for menor que o lance Inicial", () => {
        const valorLance = 9;
        const leilao = {
            valorInicial: 10,
            lances: [],
        };
            const resultado = validaLance(valorLance,leilao);
            expect(resultado).toBe(MENOR_QUE_VALOR_INICIAL);
        });

        it("deve retornar MENOR_OU_IGUAL_AOS_LANCES se o lance for menor ou igual ao maior lance", () => {
            const valorLance = 30;
            const leilao = {
                valorInicial: 10,
                lances: [{valor: 10},{valor: 30},{valor: 20}],
            };
            const resultado = validaLance(valorLance,leilao);
            expect(resultado).toBe(MENOR_OU_IGUAL_AOS_LANCES);
        });

        it("deve retornar VALIDO se o lance for um número", () => {
            const valorLance = '40';
            const resultado = validaFormatoNumericoDoLance(valorLance);
            expect(resultado).toBe(VALIDO);
        });

        it("deve retornar INVALIDO se o lance não for um número", () => {
            const valorLance = "R$ 40";
            const resultado = validaFormatoNumericoDoLance(valorLance);
            expect(resultado).toBe(INVALIDO);
        });

    });

});