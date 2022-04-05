import { getCustomRepository } from "typeorm";
import { VacinadoRepositories } from "../../Repositories/VacinadoRepositories";
import { classToPlain } from 'class-transformer'

class ListaVacinadoService {
    async execute() {
        const vacinadoRepositories = getCustomRepository(VacinadoRepositories);

        const vacinados = await vacinadoRepositories.find();

        return classToPlain(vacinados);
    }
}

export {
    ListaVacinadoService
};