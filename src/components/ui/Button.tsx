import { ButtonHTMLAttributes, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;
type TVariant = "primary" | "secondary" | "tertiary";
type TButtonOptions = { variant?: TVariant };
type TButtonProps = React.DetailedHTMLProps< ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & TButtonOptions

const Button = forwardRef<TRef, TButtonProps>(({ className, variant = "primary", children, ...rest }, ref) => {
  const getVariant = (variant : TVariant) => {
    switch (variant) {
      case "primary":
        return "bg-red-500";
      case "secondary":
        return "bg-blue-500";
      default:
        return "bg-green-500";
    }
  };
  return (
    <button
      {...rest}
      ref={ref}
      className={cn("btn-primary", getVariant(variant), className)}
    >
      {children}
    </button>
  );
});

export default Button;
