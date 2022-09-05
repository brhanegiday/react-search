export interface UserI {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: {
    lat: string;
    lon: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
