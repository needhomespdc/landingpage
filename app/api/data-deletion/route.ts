import { NextResponse } from 'next/server';

type DataDeletionPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  details?: string;
  confirm?: boolean;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: DataDeletionPayload;

  try {
    body = (await request.json()) as DataDeletionPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const fullName = body.fullName?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const details = body.details?.trim() ?? '';

  if (fullName.length < 2) {
    return NextResponse.json(
      { message: 'Please enter your full name.' },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { message: 'Please enter the email address on your NeedHomes account.' },
      { status: 400 }
    );
  }

  if (details.length > 2000) {
    return NextResponse.json(
      { message: 'Additional details must be 2000 characters or fewer.' },
      { status: 400 }
    );
  }

  if (body.confirm !== true) {
    return NextResponse.json(
      { message: 'Please confirm that you are requesting deletion of your data.' },
      { status: 400 }
    );
  }

  console.info('[data-deletion-request]', {
    fullName,
    email,
    phone: phone || null,
    details: details || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: 'Your deletion request has been received.',
  });
}
