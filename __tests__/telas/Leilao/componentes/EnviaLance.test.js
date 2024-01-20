import React from 'react';
import { render } from "@testing-library/react-native";

import EnviaLance from "../../../../src/telas/Leilao/componentes/EnviaLance";

describe('telas/Leilao/componentes/EnviaLance', () => {
    it('deve enviar o lance quanod o botão for pressionado', () => {
const enviaLance = jest.fn(() => new Promisse(resolve => resolve (ENVIADO)));

      const { toJSON }      = render(
        <EnviaLance
            enviaLance = {enviaLance}
            cor="blue"
        />
      );
    });
});