import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: {
            id: number;
            nombre: string;
            email: string;
            createdAt: Date;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        access_token: string;
        user: {
            id: number;
            nombre: string;
            email: string;
        };
    }>;
    getProfile(req: any): {
        message: string;
        user: any;
    };
    protectedRoute(req: any): {
        message: string;
        timestamp: string;
        userId: any;
    };
}
