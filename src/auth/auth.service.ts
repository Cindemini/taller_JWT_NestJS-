import {
    Injectable,
    ConflictException,
    UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto) {
        const existing = this.usersService.findByEmail(registerDto.email);
        if (existing) {
            throw new ConflictException('El email ya está registrado');
        }

        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const { password, ...user } = this.usersService.create({
            ...registerDto,
            password: hashedPassword,
        });

        return {
            message: 'Usuario registrado exitosamente',
            user,
        };
    }

    async login(loginDto: LoginDto) {
        const user = this.usersService.findByEmail(loginDto.email);
        if (!user || !user.password) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const payload = { sub: user.id, email: user.email, nombre: user.nombre };
        return {
            message: 'Login exitoso',
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                nombre: user.nombre,
                email: user.email,
            }
        };
    }
}
