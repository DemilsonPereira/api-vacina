import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDose1649017019106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "vacina",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "vacinador",
                    type: "varchar"
                },
                {
                    name: "dose",
                    type: "varchar"
                },
                {
                    name: "lote_vacina",
                    type: "varchar"
                },
                {
                    name: "vacinado_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKVacinadoVacina",
                    referencedTableName: "vacinado",
                    referencedColumnNames: ["id"],
                    columnNames: ["vacinado_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("vacina");
    }

}
