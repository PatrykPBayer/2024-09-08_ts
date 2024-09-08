import { ButtonVariant } from "./Button";
import styles from "./Button.module.css";

export const getButtonStyles = (variant: ButtonVariant): string => {
  const css = [styles.button];

  if (variant === "primary") {
    css.push(styles.primary);
  }

  if (variant === "secondary") {
    css.push(styles.secondary);
  }

  if (variant === "ghost") {
    css.push(styles.ghost);
  }

  return css.join(" ");
};
