import styles from "./Button.module.css";
import { getButtonStyles } from "./getButtonsStyles";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface Props {
  label: string;
  variant: ButtonVariant;
  type?: "button" | "submit";
  onButtonClick: () => void;
}

export const Button = (props: Props): JSX.Element => {
  const type = props.type || "button";
  const css = getButtonStyles(props.variant);
  //`${styles.button} ${
  //  props.variant === "primary" ? styles.primary : styles.secondary
  //}`;

  return (
    <button type={type} onClick={props.onButtonClick} className={css}>
      {props.label}
    </button>
  );
};
