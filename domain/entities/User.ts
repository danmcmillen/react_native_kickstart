type User = Readonly<{
  id: number;
  name: string;
  email: string;
}>

const createUser = (id: number, name: string, email: string): User => ({ id, name, email });

export {User, createUser};
