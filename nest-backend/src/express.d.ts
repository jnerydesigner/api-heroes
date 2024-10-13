import { UserRequestDTO } from './dto/UserRequestDTO';

declare global {
    namespace Express {
        interface Request {
            user?: UserRequestDTO;
        }
    }
}