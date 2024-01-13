import { cookies } from 'next/headers';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

type CookieOption = Partial<Omit<ResponseCookie, 'name' | 'value'>>;

export default class Cookie {
  private cookieName: string;
  private cookieStore = cookies();

  constructor(cookieName: string) {
    this.cookieName = cookieName;
  }

  has() {
    return this.cookieStore.has(this.cookieName);
  }

  get() {
    return this.cookieStore.get(this.cookieName)?.value;
  }

  set(value: string, option: CookieOption) {
    this.cookieStore.set(this.cookieName, value, option);
  }

  delete() {
    this.cookieStore.delete(this.cookieName);
  }

  static getAll() {
    return cookies().getAll();
  }
}
