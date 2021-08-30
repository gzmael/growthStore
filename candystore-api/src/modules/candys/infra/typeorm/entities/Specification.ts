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

import { Candy } from './Candy';

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

  @ManyToMany(() => Candy, candy => candy.specifications)
  @JoinTable({
    name: 'candys_specifications',
    joinColumns: [{ name: 'specification_id' }],
    inverseJoinColumns: [{ name: 'candy_id' }],
  })
  candys: Candy[];

  constructor() {
    if (!this.public_id) {
      this.public_id = uuid();
    }
  }
}

export { Specification };
