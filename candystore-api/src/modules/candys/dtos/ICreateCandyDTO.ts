import { ISpecificationResponseDTO } from './ICreateSpecificationDTO';

interface ICreateCandyDTO {
  name: string;
  price: number;
  brand: string;
  description: string;
  rating: number;
  photo?: string;
}

interface ICandyResponseDTO {
  public_id: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  rating: number;
  photo?: string;
  created_at: Date;
  specifications: ISpecificationResponseDTO[];
}

export { ICreateCandyDTO, ICandyResponseDTO };
