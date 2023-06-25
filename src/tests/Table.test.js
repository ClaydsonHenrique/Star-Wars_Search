import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Table from "../componentes/Table";

describe('Verificando pagina Table', () => {
  it('verificando se pagina table faz quisição a api e se todos componentes aparecem na tela', () => {
    render(<Table />);
  })
})