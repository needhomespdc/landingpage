import { NextResponse } from 'next/server';

type WaitlistPayload = {
  email?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: WaitlistPayload;

  try {
    body = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const email = body.email?.trim() ?? '';

  if (!email) {
    return NextResponse.json(
      { message: 'Please enter your email.' },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  // Persist later (CRM / email / DB). For now acknowledge a valid signup.
  console.info('[waitlist]', { email });

  return NextResponse.json({
    ok: true,
    message: 'Successfully joined the waitlist.',
  });
}
