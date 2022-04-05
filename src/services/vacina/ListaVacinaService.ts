import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { VacinaRepositories } from "../../Repositories/VacinaRepositories";

class ListaVacinaService {
    async excute() {
        const vacinaRepositories = getCustomRepository(VacinaRepositories);

        const vacinas = await vacinaRepositories.find();

        return classToPlain(vacinas);
    }
}

export {
    ListaVacinaService
};