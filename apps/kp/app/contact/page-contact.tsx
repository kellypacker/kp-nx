'use client';
import { FormEvent, useState } from 'react';
import ButtonSubmit from '../components/submit-button';

export const encodeFormData = (data: any) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

export function PageContact() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasSubmitError, setHasSubmitError] = useState(false);
    const [hasSuccess, setHasSuccess] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        setIsLoading(true);
        setHasSubmitError(false);
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData);

        // does not work locally - will error with Method Not Allowed
        // uncomment success status below to test locally
        try {
            const res = await fetch(
                // either proxy or origin url
                `https://${window.location.host}/__forms`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: encodeFormData({
                        'form-name': 'contact',
                        ...values,
                    }),
                }
            );
            if (res.status === 200) {
                setHasSuccess(true);
            }
            if (res.status !== 200) {
                setHasSubmitError(true);
            }
            console.log({ res });
        } catch (e) {
            console.log('error submitting form', e);
            setHasSubmitError(true);
        } finally {
            setHasSubmitted(true);
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-lg min-h-[70vh]">
            <h1 className="mt-4 mb-2 text-3xl">
                Start <em>a</em> Conversation
            </h1>
            <p className="text-2xl">I would love to hear from you.</p>
            {hasSubmitError && (
                <div className="mt-6">
                    <p className="font-bold text-salmon">
                        There was an error submitting the form. Please try
                        again.
                    </p>
                </div>
            )}
            {hasSuccess && (
                <div className="">
                    <div className="flex items-center">
                        <p className="ml-1 text-blue-400 p2 text-teal">
                            Thank you! The message was sent.
                        </p>
                    </div>
                </div>
            )}
            {!hasSubmitted && (
                <form
                    name="contact"
                    method="POST"
                    className="mb-6"
                    onSubmit={handleFormSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label>
                            Don’t fill this out if you’re human:{' '}
                            <input name="bot-field" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Name <input type="text" name="name" required />
                        </label>
                    </p>
                    <p>
                        <label>
                            Email <input type="email" name="email" required />
                        </label>
                    </p>

                    <p>
                        <label>
                            Message{' '}
                            <textarea rows={10} name="message" required />
                        </label>
                    </p>
                    <p>
                        <ButtonSubmit isLoading={isLoading} label="Send" />
                    </p>
                </form>
            )}
        </div>
    );
}

export default PageContact;
