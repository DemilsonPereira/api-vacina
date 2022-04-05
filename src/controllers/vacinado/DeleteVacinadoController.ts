import { Request, Response } from "express";
import { DeleteVacinadoService } from "../../services/vacinado/DeleteVacinadoService";

class DeleteVacinadoController {
    async handle(request: Request, response: Response) {
        const { id: idVacinado } = request.body;

        const deleteVacinadoService = new DeleteVacinadoService();

        const deleteVacinadoId = await deleteVacinadoService.execute(idVacinado);

        return response.status(200).send();
    }
}

export {
    DeleteVacinadoController
};