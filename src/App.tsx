import "./styles.css";
import { NetlifyForm, BasicForm } from "./NetlifyForm";
import { useEffect, useState } from "react";

export function Form() {
  return (
    <NetlifyForm formName="feedback" method="POST">
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
    </NetlifyForm>
  );
}

export default function App() {
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    setIsForm(true);
  }, []);
  if (!isForm) {
    return null;
  }

  // const form = isForm ? Form : BasicForm
  console.log(Form());

  return <div suppressHydrationWarning={true}>{Form()}</div>;
}
