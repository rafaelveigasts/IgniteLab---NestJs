export type Replace<T, R> = Omit<T, keyof R> & R;

// comment: This is a helper type that allows you to replace a property in an interface with another type. This is useful when you want to make a property optional or required. For example, if you want to make a property required, you can use the following syntax:
//
// import { Replace } from 'src/helpers/Replace';
//
// interface User {
//   name: string;
//   age: number;
// }
//
// const user: Replace<User, { age?: number }> = {
//   name: 'John',
//   age: 30,
// };
//
// This will make the age property required.
//
// If you want to make a property optional, you can use the following syntax:
//
// import { Replace } from 'src/helpers/Replace';
//
// interface User {
//   name: string;
//   age: number;
// }
//
// const user: Replace<User, { age?: number }> = {
//   name: 'John',
// };
//
// This will make the age property optional.
//
