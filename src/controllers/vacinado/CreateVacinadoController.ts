import { Request, Response } from "express";
import { CreateVacinadoService } from "../../services/vacinado/CreateVacinadoService";

class CreateVacinadoController {
    async handle(request: Request, response: Response) {
        const { nome, cpf, data_nascimento, cns, comorbidade } = request.body;

        const createVacinadoService = new CreateVacinadoService();

        const vacinado = await createVacinadoService.execute({
            nome,
            cpf,
            data_nascimento,
            cns,
            comorbidade
        });

        return response.json(vacinado);
    }
}

export {
    CreateVacinadoController
};