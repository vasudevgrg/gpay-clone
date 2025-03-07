import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/infrastructure/repository/user.repository";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly reposiotry: UserRepository
    ) {}

    async login(payload) {
        const {username, number, password} = payload;
        let user = null;

        if(username) {
             user = await this.reposiotry.findUser({username});
        }else if(number) {
             user = await this.reposiotry.findUser({number});
            
        }
        if(!user) {
            throw new Error('User doesnt exist');
        }
        return this.reposiotry.loginUser(payload);
    }

    async signUp(payload) {
        
    }
}