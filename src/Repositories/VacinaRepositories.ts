import { EntityRepository, Repository } from "typeorm";
import { Vacina } from "../entities/Vacina";

@EntityRepository(Vacina)
class VacinaRepositories extends Repository<Vacina>{

}

export {
    VacinaRepositories
};