import User from "@/models/User";

export const createUser = (email, name, password) => {
  const user = new User(email, name, password);
  user.save();
  return user;
};
