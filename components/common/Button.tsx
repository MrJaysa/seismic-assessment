import { tv } from "tailwind-variants";

const buttonVariant = tv({
  base: "rounded-full cursor-pointer outline-none",
  variants: {
    color: {
      primary: "bg-primary h-13",
      primary_lg: "bg-primary h-15.5",
      white: "bg-transparent",
      cyan: "bg-primary-50",
    },
    text: {
      primary: "text-primary",
      white: "text-white",
      primary_400: "text-primary-400",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    border: {
      none: "border-none",
      cyan: "border border-primary-200",
      primary: "border border-primary",
      primary_400: "border border-primary-400",
    },
    font: {
      bold: "font-bold",
      normal: "font-normal",
    },
    padding: {
      base: "py-4 px-5",
      sm: "py-3 px-6",
      md: "py-5 px-6",
      lg: "py-5 px-10",
    },
    tracking: {
      base: "leading-[19.2px] tracking-[1%]",
      cyan: "leading-[22.4px] tracking-[-2%]",
      lg: "leading-[21.6px] tracking-[1%]",
    },
  },
  defaultVariants: {
    color: "primary",
    text: "white",
    size: "md",
    border: "none",
    font: "bold",
    padding: "base",
    tracking: "base",
  },
});

const variants = {
  primary: buttonVariant(),
  primary_lg: buttonVariant({
    color: "primary_lg",
    size: "lg",
    padding: "lg",
    tracking: "lg",
    text: "white",
  }),
  cyan: buttonVariant({
    color: "cyan",
    size: "sm",
    border: "cyan",
    font: "normal",
    padding: "sm",
    tracking: "cyan",
    text: "primary",
  }),
  white: buttonVariant({
    color: "white",
    size: "sm",
    border: "primary",
    font: "bold",
    padding: "base",
    tracking: "base",
    text: "primary",
  }),
  footer: buttonVariant({
    color: "white",
    size: "lg",
    padding: "md",
    tracking: "lg",
    text: "primary_400",
    border: "primary_400",
    font: "normal",
  }),
};

export default function Button({
  text,
  variant = "primary",
}: {
  text: string;
  variant?: "primary" | "primary_lg" | "white" | "cyan" | "footer";
}) {
  return <button className={variants[variant]}>{text}</button>;
}
