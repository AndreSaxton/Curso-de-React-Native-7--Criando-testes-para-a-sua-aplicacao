import { obtemLeiloes, obtemLeilao } from "../../src/repositorio/leilao";
import apiLeiloes from '../../src/servicos/apiLeiloes';

jest.mock('../../src/servicos/apiLeiloes');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descrição do Leilão'
    }
];
const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200);
    });
}
const mockRequisicaoErro = () => {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
}

describe('repositorio/leilao', () => {

    beforeEach(() => {
        /* Para limpar o mock depois de cada teste.
         * A obtemLeiloes é chamada em 2 testes e contador entende que foi executada 2 vezes.
        */
        apiLeiloes.get.mockClear();
    });

    describe('obtemLeiloes', () => {
        it('deve retornar uma lista de leilões', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes));
            
            const leiloes = await obtemLeiloes();

            expect(leiloes).toEqual(mockLeiloes);

            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });

        it('deve retornar uma lista vazia quando a requisição falhar', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());
            
            const leiloes = await obtemLeiloes();

            expect(leiloes).toEqual([]);

            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });
    });

    describe('obtemLeilao', () => {
        it('deve retornar um leilão', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes[0]));
            
            const leilao = await obtemLeilao(1);

            expect(leilao).toEqual(mockLeiloes[0]);

            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes/1');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });

        it('deve retornar um objeto vazia quando a requisição falhar', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());
            
            const leilao = await obtemLeilao(1);
            expect(leilao).toEqual({});

            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes/1');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });
    });


});