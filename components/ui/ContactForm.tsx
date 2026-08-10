'use client';

import { FormEvent, useState } from 'react';

import { CheckCircle2, Loader2, SendHorizontal } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Pesan gagal dikirim.');
      }

      setStatus('success');

      setForm({
        name: '',
        email: '',
        message: '',
        website: '',
      });
    } catch (error) {
      console.error(error);

      setStatus('error');
    }
  };

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/70

        sm:rounded-3xl
      "
    >
      {/* =========================
          TERMINAL HEADER
      ========================= */}

      <div
        className="
          flex
          items-center
          border-b
          border-slate-800
          px-4
          py-3

          sm:px-5
          sm:py-4
        "
      >
        <div className="flex gap-1.5 sm:gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />

          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />

          <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
        </div>

        <p className="ml-3 font-mono text-xs text-slate-500 sm:ml-4 sm:text-sm">message</p>
      </div>

      {/* =========================
          SUCCESS
      ========================= */}

      {status === 'success' ? (
        <div
          className="
            flex
            min-h-[350px]
            flex-col
            items-center
            justify-center
            px-5
            py-10
            text-center

            sm:min-h-[420px]
            sm:px-8
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-emerald-400/10

              sm:h-16
              sm:w-16
            "
          >
            <CheckCircle2 size={30} className="text-emerald-400 sm:h-[34px] sm:w-[34px]" />
          </div>

          <h3
            className="
              mt-5
              text-xl
              font-bold
              text-white

              sm:mt-6
              sm:text-2xl
            "
          >
            Message Sent!
          </h3>

          <p
            className="
              mt-3
              max-w-md
              text-sm
              leading-6
              text-slate-400

              sm:text-base
              sm:leading-7
            "
          >
            Terima kasih sudah menghubungi saya. Pesan Anda sudah berhasil dikirim dan saya akan membalasnya secepatnya.
          </p>

          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="
              mt-6
              rounded-xl
              border
              border-slate-700
              px-5
              py-2.5
              text-sm
              text-slate-300
              transition

              hover:border-cyan-400
              hover:text-cyan-400

              sm:mt-8
              sm:rounded-2xl
              sm:px-6
              sm:py-3
            "
          >
            Send Another Message
          </button>
        </div>
      ) : (
        /* =========================
           FORM
        ========================= */

        <form
          onSubmit={handleSubmit}
          className="
            space-y-4
            p-5

            sm:space-y-6
            sm:p-8
          "
        >
          {/* Honeypot */}

          <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          {/* Name */}

          <div>
            <label
              htmlFor="name"
              className="
                mb-1.5
                block
                text-xs
                text-slate-400

                sm:mb-2
                sm:text-sm
              "
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={100}
              placeholder="John Doe"
              className="
                w-full
                rounded-xl
                border
                border-slate-800
                bg-slate-950
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition
                placeholder:text-slate-600
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-400/10

                sm:rounded-2xl
                sm:px-5
                sm:py-4
                sm:text-base
              "
            />
          </div>

          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="
                mb-1.5
                block
                text-xs
                text-slate-400

                sm:mb-2
                sm:text-sm
              "
            >
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={150}
              placeholder="john@example.com"
              className="
                w-full
                rounded-xl
                border
                border-slate-800
                bg-slate-950
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition
                placeholder:text-slate-600
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-400/10

                sm:rounded-2xl
                sm:px-5
                sm:py-4
                sm:text-base
              "
            />
          </div>

          {/* Message */}

          <div>
            <label
              htmlFor="message"
              className="
                mb-1.5
                block
                text-xs
                text-slate-400

                sm:mb-2
                sm:text-sm
              "
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={5000}
              rows={5}
              placeholder="Tell me about your project..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-slate-800
                bg-slate-950
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition
                placeholder:text-slate-600
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-400/10

                sm:rounded-2xl
                sm:px-5
                sm:py-4
                sm:text-base
              "
            />
          </div>

          {/* Error */}

          {status === 'error' && (
            <div
              className="
                rounded-xl
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-3
                text-xs
                text-red-400

                sm:rounded-2xl
                sm:text-sm
              "
            >
              Pesan gagal dikirim. Silakan coba lagi.
            </div>
          )}

          {/* Submit */}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="
              flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-400
              px-6
              py-3
              text-sm
              font-semibold
              text-slate-950
              transition

              hover:bg-cyan-300
              hover:scale-[1.01]

              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:scale-100

              sm:rounded-2xl
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <SendHorizontal size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
