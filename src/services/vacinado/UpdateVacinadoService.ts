import { getConnection, getCustomRepository } from "typeorm";
import { Vacinado } from "../../entities/Vacinado";
import { VacinadoRepositories } from "../../Repositories/VacinadoRepositories";

interface IVacinadoUpdate {
    id: string;
    nome: string;
    cpf: string;
    data_nascimento: string;
    cns: string;
    comorbidade: boolean;
}

class UpdateVacinadoService {
    async execute({ id, nome, cpf, data_nascimento, cns, comorbidade }: IVacinadoUpdate) {
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

        const updateVacinadoId = await getConnection()
            .createQueryBuilder()
            .update(Vacinado)
            .set({
                id,
                nome,
                cpf,
                data_nascimento,
                cns,
                comorbidade
            })
            .where({ id: id })
            .execute();

        return updateVacinadoId;
    }
}

export {
    UpdateVacinadoService
};