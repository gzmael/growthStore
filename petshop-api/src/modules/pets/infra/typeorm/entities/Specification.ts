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

import { Pet } from './Pet';

@Entity('specifications')
class Specification {
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: string;

  @Column('uuid')
  public_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => Pet, pet => pet.specifications)
  @JoinTable({
    name: 'pets_specifications',
    joinColumns: [{ name: 'specification_id' }],
    inverseJoinColumns: [{ name: 'pet_id' }],
  })
  pets: Pet[];

  constructor() {
    if (!this.public_id) {
      this.public_id = uuid();
    }
  }
}

export { Specification };
