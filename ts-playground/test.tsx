export interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: UserClass) {
  return `${user.firstName} ${user.lastName}`;
}

class UserClass implements User {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const a = {
  firstName: "Tom",
  lastName: "Hanks",
  address: "123 Main St",
};

formatName(new UserClass("Jane", "User"));
// formatName({ firstName: "Jane", lastName: "User", address: "123 Main St" }); // broken
formatName(a);
