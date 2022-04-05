import { getCustomRepository } from "typeorm";
import { VacinaRepositories } from "../../Repositories/VacinaRepositories";

class ListaVacinaPorVacinadoService {
    async execute(vacinado_id: string) {
        const vacinaRepositories = getCustomRepository(VacinaRepositories);

        const vacinaVacinado = await vacinaRepositories.find({
            where: {
                vacinado_id: vacinado_id,
            },
            relations: ["vacinado"]
        });
        return vacinaVacinado;
    }
}

export {
    ListaVacinaPorVacinadoService
};