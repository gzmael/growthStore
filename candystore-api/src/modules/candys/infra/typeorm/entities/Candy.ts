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

@Entity('candys')
class Candy {
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
  brand: string;

  @Column()
  description: string;

  @Column()
  rating: number;

  @Column()
  photo?: string;

  @ManyToMany(() => Specification, specification => specification.candys)
  @JoinTable({
    name: 'candys_specifications',
    joinColumns: [{ name: 'candy_id' }],
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

export { Candy };
