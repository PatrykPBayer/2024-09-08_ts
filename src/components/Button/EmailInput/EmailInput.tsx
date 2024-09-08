import { useState } from "react";

interface Props {
  placeholder?: string;
  onEmailChange: (email: string) => void;
}

export const EmailInput = (props: Props): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleChange = (event: any) => {
    const value: string = event.target.value;
    setEmail(value);

    const isEmailValid = value.length > 3 && value.includes("@");
    if (isEmailValid) {
      props.onEmailChange(value);
    }
  };

  return (
    <div>
      <input
        placeholder={props.placeholder || "Your email"}
        type="email"
        value={email}
        onChange={handleChange}
      />
    </div>
  );
};
