import React, { FormEvent, useRef, MutableRefObject } from "react";
import styles from "./newsletter-registration.module.css";

export default function NewsletterRegistration() {
  const emailRef = useRef();

  function registrationHandler(event: FormEvent) {
    const enteredEmail = (emailRef.current as unknown as HTMLInputElement)
      .value;
    event.preventDefault();
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status === 201) {
          (emailRef.current as unknown as HTMLInputElement).value = "";
        }
        return resp.json();
      })
      .then((data) => {
        alert(data.message);
      });
  }
  return (
    <section>
      <h2 className={styles.text}>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div>
          <input
            ref={emailRef as unknown as MutableRefObject<HTMLInputElement>}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            className={styles.input}
          />
          <button className={styles.button}>Register</button>
        </div>
      </form>
    </section>
  );
}
