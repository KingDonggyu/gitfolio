import { type NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

import { login } from '@/app/actions';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    redirect('/');
  }

  try {
    await login(code);
  } catch (error) {
    console.error(error);
    redirect('/');
  }

  redirect('/portfolio/template');
}
