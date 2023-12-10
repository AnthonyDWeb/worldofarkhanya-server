import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (isMatch) {
      user.password = undefined;
      return user;
    }
    throw new UnauthorizedException("Le nom d'utilisateur ou le mot de passe est incorrect");
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: any) {
    const userCheckIn = await this.usersService.findOneByUsername(user.username);
    if (userCheckIn)
      throw new UnauthorizedException("Ce nom d'utilisateur est déjà pris");
    user.password = await bcrypt.hash(user.password, 15);
    const createUser = await this.usersService.create(user);
    return createUser;
    return createUser ? true : false;
  }
}
