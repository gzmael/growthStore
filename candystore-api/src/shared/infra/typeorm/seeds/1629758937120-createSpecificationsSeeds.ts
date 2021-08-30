import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 } from 'uuid';

interface ISpecification {
  name: string;
  description: string;
}

const dataAttributesMap: ISpecification[] = [
  { name: 'Color', description: 'Black' },
  { name: 'Color', description: 'Blue' },
  { name: 'Color', description: 'Pink' },
  { name: 'Color', description: 'Purple' },
  { name: 'Type', description: 'Caramels' },
  { name: 'Type', description: 'Chocolate' },
  { name: 'Type', description: 'Gummies' },
  { name: 'Type', description: 'Hard Candies' },
  { name: 'Size', description: 'Small' },
  { name: 'Size', description: 'Medium' },
  { name: 'Size', description: 'Big' },
  { name: 'Flavors', description: 'Banana' },
  { name: 'Flavors', description: 'Coffe' },
  { name: 'Flavors', description: 'Lemon' },
  { name: 'Flavors', description: 'Apple' },
  { name: 'Flavors', description: 'Cherry' },
  { name: 'Flavors', description: 'Orange' },
];

export class createSpecificationsSeeds1629758937120
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
