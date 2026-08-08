import { NextResponse } from 'next/server';

type WaitlistPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsapp?: string;
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

  const firstName = body.firstName?.trim() ?? '';
  const lastName = body.lastName?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const whatsapp = body.whatsapp?.trim() ?? '';

  if (!firstName || !lastName || !email || !whatsapp) {
    return NextResponse.json(
      { message: 'Please fill in all fields.' },
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
  console.info('[waitlist]', { firstName, lastName, email, whatsapp });

  return NextResponse.json({
    ok: true,
    message: 'Successfully joined the waitlist.',
  });
}
