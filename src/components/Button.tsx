
import type { ButtonProps } from "../types/types";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "responsive";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-btn-primary text-primary hover:bg-btn-primary-hover bg-white",
  secondary:
    "bg-btn-secondary text-primary hover:bg-btn-secondary-hover",
  accent:
    "bg-btn-accent text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm shadow-sm",
  md: "px-4 py-2 text-base shadow-md",
  lg: "px-5 py-3 text-lg shadow-lg",
  xl: "px-6 py-4 text-xl shadow-xl",
  responsive: "px-2 py-1 text-xs md:px-5 md:py-3 md:text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-3xl font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    />
  );
}
