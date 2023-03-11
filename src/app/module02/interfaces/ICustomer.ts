export interface ICustomer {
  CustomerTypeID: number;
  CustomterTypeName: string;
  Customers: {
    ID: string;
    Name: string;
    Email: string;
    Age: number;
    Image: string;
  };
}
