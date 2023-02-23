import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'Hello from SignUp';
  }

  signin() {
    return 'Hello from  Login';
  }
}
