import { IUser } from './user.interface';

export class User implements IUser {
    constructor(
        public id: number,
        public login: string,
        public password: string,
        public email: string
    ) {}
}


// export class User implements IUser {
//     id: number;
//     email: string;
//     password: string;
//     constructor(id: number, email: string, password: string) {
//         this.id = id;
//         this.email = email;
//         this.password = password;
//     }
// }



// export class User implements IUser {
//     id: number;
//     email: string;
//     password: string;
//     constructor(userId: number, userEmail: string, userPassword: string) {
//         this.id = userId;
//         this.email = userEmail;
//         this.password = userPassword;
//     }
// }
