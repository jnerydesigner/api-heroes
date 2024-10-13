import { randomUUID } from "node:crypto";

export class UsersModel {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly github?: string,
        readonly createdAt?: Date,
        readonly updatedAt?: Date
    ) { }

    static create(data: any): UsersModel {
        const id = randomUUID();
        return new UsersModel(
            id,
            data.name,
            data.email,
            data.password,
            data.github,
        );
    }
}