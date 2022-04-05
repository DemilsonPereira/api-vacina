import { getCustomRepository } from "typeorm";
import { VacinadoRepositories } from "../../Repositories/VacinadoRepositories";

interface IVacinadoRequest {
    nome: string;
    cpf: string;
    data_nascimento: Date;
    cns: string;
    comorbidade: boolean;
}

class CreateVacinadoService {
    async execute({ nome, cpf, data_nascimento, cns, comorbidade }: IVacinadoRequest) {
        const vacinadoRepositories = getCustomRepository(VacinadoRepositories);

        if (!cpf) {
            throw new Error("CPF incorreto");
        }

        const cpfAlreayExists = await vacinadoRepositories.findOne({
            cpf
        });

        if (cpfAlreayExists) {
            throw new Error("CPF já existe!");
        }

        const vacinado = vacinadoRepositories.create({
            nome,
            cpf,
            data_nascimento,
            cns,
            comorbidade
        });

        await vacinadoRepositories.save(vacinado);

        return vacinado;
    }
}

export {
    CreateVacinadoService
};