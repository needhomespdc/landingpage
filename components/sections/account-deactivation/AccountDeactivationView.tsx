'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RiMailLine, RiTimeLine } from 'react-icons/ri';
import { CONTACT } from '@/lib/constants';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  details: string;
  confirm: boolean;
};

const INITIAL_FORM: FormState = {
  fullName: '',
  email: '',
  phone: '',
  details: '',
  confirm: false,
};

export function AccountDeactivationView() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!form.confirm) {
      setError('Please confirm that you are requesting account deactivation.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/account-deactivation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          details: form.details.trim(),
          confirm: form.confirm,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.message || 'Could not submit your request.');
      }

      setSent(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Could not submit your request.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-[#333D42] py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">
            Request account deactivation<span className="text-[#E55820]">.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Deactivation temporarily disables your NeedHomes account. Your data
            is kept so you can ask support to restore access later. You do not
            need to be logged in to submit a request.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                  How to request deactivation
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                  <li>
                    In the NeedHomes app: open More, then choose Deactivate
                    account.
                  </li>
                  <li>
                    On this page: submit the form with the email on your account.
                    We will verify the request and follow up at that address.
                  </li>
                  <li>
                    Or email{' '}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-[#E55820] hover:underline"
                    >
                      {CONTACT.email}
                    </a>{' '}
                    with the subject “Account deactivation request”.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                  What deactivation does
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                  <li>Your account is temporarily disabled and you cannot sign in.</li>
                  <li>Active sessions are signed out, including biometric login.</li>
                  <li>
                    Your profile, investments, wallet, and KYC records are kept
                    so the account can be restored.
                  </li>
                  <li>
                    To restore access later, contact support from the email on
                    the account.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                  Deactivation vs deletion
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-gray-700">
                  Choose deactivation if you only want to pause the account.
                  Choose deletion if you want your personal data erased. Deletion
                  cannot be undone.
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  To erase your account and personal data instead, use{' '}
                  <Link href="/data-deletion" className="text-[#E55820] hover:underline">
                    Request data deletion
                  </Link>
                  .
                </p>
              </div>

              <div className="flex items-start gap-2 rounded-xl bg-gray-50 p-5 text-sm text-gray-600">
                <RiTimeLine className="mt-0.5 h-4 w-4 shrink-0 text-[#E55820]" />
                <p>
                  Valid deactivation requests are processed within{' '}
                  <strong>7 days</strong> after we confirm the account. Read our{' '}
                  <Link href="/privacy-policy" className="text-[#E55820] hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  for how we handle your information while the account is paused.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="mb-2 text-xl font-bold text-[#1A1A1A]">
                Submit a request<span className="text-[#E55820]">.</span>
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                We will only use this information to verify and process your
                deactivation request.
              </p>

              {sent ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-[#E55820]">
                    Request received
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    We will contact you at the email you provided. If we need
                    more information to verify the account, we will ask before
                    deactivating it.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-500">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(event) =>
                        setForm({ ...form, fullName: event.target.value })
                      }
                      className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-500">
                      ACCOUNT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-500">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(event) =>
                        setForm({ ...form, phone: event.target.value })
                      }
                      className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-500">
                      ADDITIONAL DETAILS
                    </label>
                    <textarea
                      rows={5}
                      maxLength={2000}
                      value={form.details}
                      onChange={(event) =>
                        setForm({ ...form, details: event.target.value })
                      }
                      placeholder="Optional: anything that helps us find your account."
                      className="w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <input
                      type="checkbox"
                      checked={form.confirm}
                      onChange={(event) =>
                        setForm({ ...form, confirm: event.target.checked })
                      }
                      className="mt-1 h-4 w-4 accent-[#E55820]"
                    />
                    <span>
                      I confirm I am the account owner and I request temporary
                      deactivation of my NeedHomes account.
                    </span>
                  </label>
                  {error ? (
                    <p className="text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <p className="text-xs leading-relaxed text-gray-500">
                    By submitting, you consent to NeedHomes using this
                    information to process your request, as described in the{' '}
                    <Link href="/privacy-policy" className="text-[#E55820] hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-[#E55820] py-3 font-bold text-white transition-colors hover:bg-[#C44A15] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit deactivation request'}
                  </button>
                  <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <RiMailLine className="h-3.5 w-3.5 text-[#E55820]" />
                    Prefer email? Write to {CONTACT.email}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
