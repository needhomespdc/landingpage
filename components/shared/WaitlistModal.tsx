'use client';

import { useEffect, useId, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { RiCloseLine } from 'react-icons/ri';

type WaitlistModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
};

const INITIAL_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  whatsapp: '',
};

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const formId = useId();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      setForm(INITIAL_FORM);
      setError(null);
      setIsSubmitting(false);
      setIsSuccess(false);
    }
  }, [open]);

  const patch = (partial: Partial<FormState>) => {
    setForm((current) => ({ ...current, ...partial }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.whatsapp.trim()
    ) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          whatsapp: form.whatsapp.trim(),
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.message || 'Could not join the waitlist.');
      }

      setIsSuccess(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Could not join the waitlist.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-xl outline-none md:p-7">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <Dialog.Title className="text-xl font-bold text-[#1A1A1A]">
                Join our waitlist
              </Dialog.Title>
              <Dialog.Description className="mt-1.5 text-sm text-[#666666]">
                Be first to know when the NeedHomes app launches.
              </Dialog.Description>
            </div>
            <Dialog.Close
              type="button"
              className="rounded-md p-1.5 text-[#888888] transition-colors hover:bg-[#F3F3F3] hover:text-[#1A1A1A]"
              aria-label="Close"
            >
              <RiCloseLine className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {isSuccess ? (
            <div className="space-y-5 py-2">
              <p className="text-sm leading-relaxed text-[#666666]">
                Thanks for joining! We&apos;ll reach out on WhatsApp or email
                when the app is ready.
              </p>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="w-full rounded-md bg-[#E55820] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
                >
                  Done
                </button>
              </Dialog.Close>
            </div>
          ) : (
            <form id={formId} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    First name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(event) =>
                      patch({ firstName: event.target.value })
                    }
                    className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#E55820]"
                    placeholder="Ada"
                    required
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    Last name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(event) =>
                      patch({ lastName: event.target.value })
                    }
                    className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#E55820]"
                    placeholder="Okafor"
                    required
                  />
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-[#1A1A1A]">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => patch({ email: event.target.value })}
                  className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#E55820]"
                  placeholder="ada@email.com"
                  required
                />
              </label>

              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-[#1A1A1A]">
                  WhatsApp number
                </span>
                <input
                  type="tel"
                  name="whatsapp"
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={(event) => patch({ whatsapp: event.target.value })}
                  className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#E55820]"
                  placeholder="+234 801 234 5678"
                  required
                />
              </label>

              {error ? (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-[#E55820] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Join waitlist'}
              </button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
