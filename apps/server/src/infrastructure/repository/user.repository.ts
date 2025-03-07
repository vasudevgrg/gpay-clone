import { Injectable } from "@nestjs/common";
import { User } from "src/domain/user.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async loginUser (payload) {
        return this.findOne({where: {...payload}});
    }

    async findUser(payload) {
        return this.findOne({where: {...payload}})
    }

    async signUpUser (payload) {
        return this.save({...payload});
    }
}