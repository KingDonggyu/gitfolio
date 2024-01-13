import Cookie from '@/lib/cookie';

export class AuthCookie extends Cookie {
  constructor() {
    super('access_token');
  }

  login(accessToken: string) {
    this.set(accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });
  }

  logout() {
    this.delete();
  }

  getAccessToken() {
    return this.get();
  }

  get isLogin() {
    return this.has();
  }
}
