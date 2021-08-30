import faker from 'faker';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 } from 'uuid';

const colors = ['Black', 'White', 'Caramels', 'Brown'];
const category = ['Apartment Living', 'Family', 'Gummies', 'Hard Candies'];
const sizes = ['Small', 'Medium', 'Big'];
const energy = ['High', 'Low'];
const level = ['Easy', 'Hard'];
const weather = ['Cold', 'Hot', 'No'];

export class createPetsSeeds1629758937120 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=1');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()},  
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=2');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=3');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=4');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=5');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=6');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=7');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=8');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=9');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=10');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=11');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=12');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=13');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=14');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=15');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()},  
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=16');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=17');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=18');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()},  
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=19');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=20');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()},  
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=21');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=22');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=23');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=24');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=25');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()},  
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=26');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=27');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=28');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()},  
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=29');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=30');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=31');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=32');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await queryRunner.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=33');`,
    );

    await queryRunner.query(`
    insert into pets_specifications select p.id ,s.id 
from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);
    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      energy[Math.floor(Math.random() * energy.length)]
    }'`);

    await queryRunner.query(`
        insert into pets_specifications select p.id ,s.id 
    from pets p, specifications s where p.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE pets_specifications');
    await queryRunner.query('TRUNCATE TABLE pets');
  }
}
