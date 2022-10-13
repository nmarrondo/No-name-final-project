export interface User {
  _id: string;
  role: string;
  name: string;
  password: string;
  mail: string;
  ca?: string;
  telephone: string;
  account: string;
  numberEA?: string;
  description?: string;
  user_id?: string | undefined;
}