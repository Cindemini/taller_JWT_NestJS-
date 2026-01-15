import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    private idCounter;
    create(userData: Omit<User, 'id' | 'createdAt'>): User;
    findByEmail(email: string): User | undefined;
    findById(id: number): User | undefined;
    findAll(): Omit<User, 'password'>[];
}
