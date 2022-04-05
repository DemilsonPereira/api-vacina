import { Request, Response } from "express";
import { CreateVacinaService } from "../../services/vacina/CreateVacinaService";


class CreateVacinaController {
    async handle(request: Request, response: Response) {
        const { vacinador, dose, lote_vacina, vacinado_id } = request.body;

        const createVacinaService = new CreateVacinaService();

        const vacina = await createVacinaService.execute({
            vacinador,
            dose,
            lote_vacina,
            vacinado_id
        });

        return response.json(vacina);

    }
}

export {
    CreateVacinaController
};