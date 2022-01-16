// /** @jsxImportSource @emotion/react */
import "./button.css";

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export interface ButtonProps {
  primary: boolean;
  backgroundColor: any;
  size: "small" | "medium" | "large";
  label: string;
  onClick: () => void;
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
