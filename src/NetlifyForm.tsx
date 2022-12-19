import { ReactNode } from "react";

interface NetlifyFormProps {
  formName: string;
  method: string;
  children: ReactNode;
}

export function NetlifyForm({ formName, method, children }: NetlifyFormProps) {
  return (
    <form
      name={formName}
      method={method}
      data-netlify
      data-netlify-honeypot="bot-field"
    >
      {children}
    </form>
  );
}

export function BasicForm() {
  return (
    <form>
      <input type="hidden" name="form-name" value="feedback" />
      <p>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />

      <label htmlFor="feedback">What is your feedback?</label>
      <textarea id="feedback" wrap="soft" name="feedback" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
