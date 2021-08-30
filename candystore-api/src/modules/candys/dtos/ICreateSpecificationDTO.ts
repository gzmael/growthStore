interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationResponseDTO {
  name: string;
  description: string;
  public_id: string;
}

export { ICreateSpecificationDTO, ISpecificationResponseDTO };
