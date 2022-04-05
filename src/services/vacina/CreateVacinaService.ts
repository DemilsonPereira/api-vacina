import { getCustomRepository } from "typeorm";
import { VacinaRepositories } from "../../Repositories/VacinaRepositories";



class CreateVacinaService {
    async execute(
        {
            vacinador,
            dose,
            lote_vacina,
            vacinado_id,
        }) {
        const vacinaRepositories = getCustomRepository(VacinaRepositories);

        if (!lote_vacina) {
            throw new Error("Lote de vacina incorreto");
        }

        const vacinaAlreayExists = await vacinaRepositories.findOne({
            lote_vacina,
            vacinado_id
        });

        if (vacinaAlreayExists) {
            throw new Error("Lote de vacina já foi utilizado");
        }

        const vacina = vacinaRepositories.create({
            vacinador,
            dose,
            lote_vacina,
            vacinado_id
        });

        await vacinaRepositories.save(vacina);

        return vacina;

    }
}

export {
    CreateVacinaService
};