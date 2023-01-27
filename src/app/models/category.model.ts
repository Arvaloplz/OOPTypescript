export enum AccessType{
  PRIVETE = 'private',
  PUBLIC = 'public',
}
export interface Category {
  id: number;
  name: string;
  image: string;
  access ?: AccessType ;
}
