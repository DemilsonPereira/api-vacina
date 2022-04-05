import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Vacinado } from './Vacinado';

@Entity("vacina")
class Vacina {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    vacinador: string;

    @Column()
    dose: number;

    @Column()
    lote_vacina: string;

    @Column()
    vacinado_id: string;

    @ManyToOne(() => Vacinado)
    @JoinColumn({ name: "vacinado_id" })
    vacinado: Vacinado;

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

export { Vacina };