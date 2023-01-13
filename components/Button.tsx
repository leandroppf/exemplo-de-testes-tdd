import { ButtonHTMLAttributes, useMemo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | JSX.Element;
  color?: "default" | "success" | "danger" | "warning";
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children = "",
  loading = false,
  color = "default",
  disabled = false,
  ...rest
}: ButtonProps): JSX.Element => {
  const buttonColors = {
    default: "blue",
    success: "green",
    danger: "red",
    warning: "yellow",
  };

  const isDisabled = useMemo(() => {
    return disabled || loading;
  }, [disabled, loading]);

  const backgroundColor = useMemo(() => {
    return buttonColors[color] ?? "blue";
  }, [color]);

  return (
    <button
      disabled={isDisabled}
      style={{
        backgroundColor: backgroundColor,
      }}
      {...rest}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
