import { FC, memo, useCallback, useMemo, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    []
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;
      const fieldData: Partial<FormData> = { [name]: value };
      setData({ ...data, ...fieldData });
    },
    [data]
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus('sending');
      try {
        const response = await fetch('https://formspree.io/f/mldjedng', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          setStatus('success');
          setData(defaultData); // Reset form on success
        } else {
          setStatus('error');
          console.error('Form submission error', response.statusText);
        }
      } catch (error) {
        setStatus('error');
        console.error('Form submission error', error);
      }
    },
    [data, defaultData]
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      method="POST"
      onSubmit={handleSendMessage}
    >
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
      >
        {status === 'sending'
          ? 'Sending...'
          : status === 'success'
          ? 'Sent!'
          : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
