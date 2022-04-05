import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Vacina } from "./Vacina";

@Entity("vacinado")
class Vacinado {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @CreateDateColumn()
    data_nascimento: Date;

    @Column()
    cns: string;

    @Column()
    comorbidade: boolean;

    @OneToMany(() => Vacina, vacina => vacina.vacinado)
    vacinas: Vacina[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Vacinado };
