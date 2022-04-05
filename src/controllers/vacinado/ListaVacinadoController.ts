import { Request, Response } from "express";
import { ListaVacinadoService } from "../../services/vacinado/ListaVacinadoService";

class ListaVacinadoController {
    async handle(request: Request, response: Response) {
        const listaVacinadoService = new ListaVacinadoService();

        const vacinados = await listaVacinadoService.execute();

        return response.json(vacinados);
    }
}

export {
    ListaVacinadoController
};