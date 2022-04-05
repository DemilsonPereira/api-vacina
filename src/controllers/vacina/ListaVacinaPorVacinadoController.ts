import { Request, Response } from 'express';
import { ListaVacinaPorVacinadoService } from "../../services/vacina/ListaVacinaPorVacinadoService";

class ListaVacinaPorVacinadoController {
    async handle(request: Request, response: Response) {
        const { vacinado_id } = request.body;

        const listaVacinaPorVacinadoService = new ListaVacinaPorVacinadoService();

        const vacinaVacinado = await listaVacinaPorVacinadoService.execute(vacinado_id);

        return response.json(vacinaVacinado);
    }
}

export {
    ListaVacinaPorVacinadoController
};