import { Request, Response } from "express";
import { UpdateVacinadoService } from "../../services/vacinado/UpdateVacinadoService";

class UpdateVacinadoController {
    async handle(request: Request, response: Response) {
        const { id, nome, cpf, data_nascimento, cns, comorbidade } = request.body;

        const updateVacinadoService = new UpdateVacinadoService();

        const updateVacinadoId = await updateVacinadoService.execute(
            {
                id,
                nome,
                cpf,
                data_nascimento,
                cns,
                comorbidade
            }
        )

        return response.status(200).send();
    }
}

export {
    UpdateVacinadoController
};