import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCandysSpecifications1629757807605
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'candys_specifications',
        columns: [
          {
            name: 'candy_id',
            type: 'bigint',
          },
          {
            name: 'specification_id',
            type: 'bigint',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_candy_id',
            columnNames: ['candy_id'],
            referencedTableName: 'candys',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_attributes_id',
            columnNames: ['specification_id'],
            referencedTableName: 'specifications',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('candys_specifications');
  }
}
