import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateShardSchema1617023945736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS shard');
    await queryRunner.query(
      'CREATE SEQUENCE IF NOT EXISTS shard.global_id_sequence',
    );
    await queryRunner.query(`
CREATE OR REPLACE FUNCTION shard.id_generator(OUT result bigint) AS $$
DECLARE
  our_epoch bigint := 1314220021721;
  seq_id bigint;
  now_millis bigint;
  -- the id of this DB shard, must be set for each
  -- schema shard you have - you could pass this as a parameter too
  shard_id int := 1;
BEGIN
  SELECT nextval('shard.global_id_sequence') % 1024 INTO seq_id;

  SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
  result := (now_millis - our_epoch) << 23;
  result := result | (shard_id << 10);
  result := result | (seq_id);
END;
$$ LANGUAGE PLPGSQL;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP FUNCTION shard.id_generator');
    await queryRunner.dropSchema('shard');
  }
}
