import faker from 'faker';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 } from 'uuid';

const colors = ['Black', 'Blue', 'Pink', 'Purple'];
const types = ['Caramels', 'Chocolate', 'Gummies', 'Hard Candies'];
const sizes = ['Small', 'Medium', 'Big'];
const flavors = ['Banana', 'Coffe', 'Apple', 'Cherry', 'Orange'];

export class createCandysSeeds1629767778980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let candy_id = v4();

    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=1');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=2');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=3');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=4');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=5');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=6');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=7');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=8');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=9');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=10');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=11');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=12');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);
    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=13');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=14');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=15');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=16');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=17');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=18');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=19');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=20');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=21');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=22');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=23');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);
    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=24');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=25');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=26');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=27');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=28');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=29');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=1');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=30');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=31');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=32');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

    candy_id = v4();
    await queryRunner.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=33');`,
    );

    await queryRunner.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE candys_specifications');
    await queryRunner.query('TRUNCATE TABLE candys');
  }
}
