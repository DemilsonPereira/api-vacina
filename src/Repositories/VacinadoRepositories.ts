import { EntityRepository, Repository } from "typeorm";
import { Vacinado } from "../entities/Vacinado";

@EntityRepository(Vacinado)
class VacinadoRepositories extends Repository<Vacinado>{

}

export {
    VacinadoRepositories
};