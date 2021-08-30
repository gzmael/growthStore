import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategories1617023945736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pets',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isNullable: false,
            default: 'shard.id_generator()',
          },
          {
            name: 'public_id',
            type: 'uuid',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'numeric',
          },
          {
            name: 'breed',
            type: 'varchar',
          },
          {
            name: 'vaccinated',
            type: 'boolean',
            default: false,
          },
          {
            name: 'gener',
            type: 'varchar',
          },
          {
            name: 'photo',
            type: 'varchar',
            default: null,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pets');
  }
}
