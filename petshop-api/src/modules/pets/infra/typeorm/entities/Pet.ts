import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Specification } from './Specification';

@Entity('pets')
class Pet {
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: string;

  @Column('uuid')
  public_id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  breed: string;

  @Column()
  gener: string;

  @Column()
  vaccinated: boolean;

  @Column()
  photo?: string;

  @ManyToMany(() => Specification, specification => specification.pets)
  @JoinTable({
    name: 'pets_specifications',
    joinColumns: [{ name: 'pet_id' }],
    inverseJoinColumns: [{ name: 'specification_id' }],
  })
  specifications: Specification[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.public_id) {
      this.public_id = uuid();
    }
  }
}

export { Pet };
