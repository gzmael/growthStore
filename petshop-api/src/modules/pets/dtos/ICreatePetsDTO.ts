import { ISpecificationResponseDTO } from './ICreateSpecificationDTO';

interface ICreatePetDTO {
  name: string;
  breed: string;
  gener: string;
  vaccinated: boolean;
  photo?: string;
  price: number;
}

interface IPetsResponseDTO {
  public_id: string;
  name: string;
  breed: string;
  gener: string;
  vaccinated: boolean;
  photo?: string;
  price: number;
  created_at: Date;
  specifications: ISpecificationResponseDTO[];
}

export { ICreatePetDTO, IPetsResponseDTO };
