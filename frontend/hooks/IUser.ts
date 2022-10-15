export interface User {
  _id: string;
  role: string;
  name: string;
  mail: string;
  ca?: string;
  telephone: string;
  numberEA?: string;
  description?: string;
  user_id?: string | undefined;
}