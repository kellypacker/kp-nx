export function PageContact() {
    return (
        <div className="max-w-lg">
            <h1 className="mt-4 mb-2 text-3xl">
                Start <em>a</em> Conversation
            </h1>
            <p className="text-2xl">I would love to hear from you.</p>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mb-6"
            >
                <input type="hidden" name="form-name" value="contact" />
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
                        Message <textarea rows={10} name="message" required />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    );
}

export default PageContact;
