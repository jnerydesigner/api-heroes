export interface UserLoginDTO {
  email: string;
  password: string;
}

export interface UserCreateDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserRequestDTO {
  sub: string;
  username: string;
  image: string;
  iat: number;
  exp: number;
}
