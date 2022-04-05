import { Request, Response } from "express";
import { ListaVacinaService } from "../../services/vacina/ListaVacinaService";

class ListaVacinaController {
    async handle(request: Request, response: Response) {
        const listaVacinaService = new ListaVacinaService();

        const vacinas = await listaVacinaService.excute();

        return response.json(vacinas);
    }
}

export {
    ListaVacinaController
};