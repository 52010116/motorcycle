export interface Motorcycle {
  id: number;
  brand: string;
  model: string;
  year: number;
  hp: number;
  ccm: number;
  kilometers: number;
  valid_inspection: boolean;
  next_inspection : Date;
  next_service : Date;
}
