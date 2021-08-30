import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 } from 'uuid';

interface ISpecification {
  name: string;
  description: string;
}

const dataAttributesMap: ISpecification[] = [
  { name: 'Color', description: 'Black' },
  { name: 'Color', description: 'White' },
  { name: 'Color', description: 'Caramels' },
  { name: 'Color', description: 'Brown' },
  { name: 'Category', description: 'Apartment Living' },
  { name: 'Category', description: 'Family' },
  { name: 'Category', description: 'Guard' },
  { name: 'Category', description: 'Gummies' },
  { name: 'Category', description: 'Hard Candies' },
  { name: 'Size', description: 'Small' },
  { name: 'Size', description: 'Medium' },
  { name: 'Size', description: 'Big' },
  { name: 'Level To Train', description: 'Easy' },
  { name: 'Level To Train', description: 'Hard' },
  { name: 'Energy Level', description: 'Low' },
  { name: 'Energy Level', description: 'High' },
  { name: 'Tolerates Weather', description: 'Cold' },
  { name: 'Tolerates Weather', description: 'Hot' },
  { name: 'Tolerates Weather', description: 'No' },
];

export class createSpecificationsSeeds1628709343776
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Creating Specifications

    dataAttributesMap.forEach(async ({ description, name }: ISpecification) => {
      await queryRunner.query(
        `INSERT INTO specifications (public_id, name, description) 
        VALUES ('${v4()}', '${name}', '${description}')`,
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE specifications');
  }
}
