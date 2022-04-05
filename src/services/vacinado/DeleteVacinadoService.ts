import { getCustomRepository } from "typeorm";
import { VacinadoRepositories } from "../../Repositories/VacinadoRepositories";

class DeleteVacinadoService {
    async execute(id: string) {
        const vacinadoRepositories = getCustomRepository(VacinadoRepositories);

        if (!id) {
            throw new Error("ID incorreto");
        }

        const notIdVacinado = await vacinadoRepositories.findOne({
            id
        });

        if (!notIdVacinado) {
            throw new Error("ID não existe!");
        }

        const deleteVacindoId = await vacinadoRepositories.delete(id);

        return deleteVacindoId;
    }
}

export {
    DeleteVacinadoService
};