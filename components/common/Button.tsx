import { tv } from "tailwind-variants";

const buttonVariant = tv({
  base: "rounded-full font-satoshi",
  variants: {
    color: {
      primary: "text-white bg-primary h-13",
      white: "text-primary bg-transparent",
      cyan: "text-primary bg-primary-50",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
    },
    border: {
      none: "border-none",
      cyan: "border border-primary-200",
      primary: "border border-primary",
    },
    font: {
      bold: "font-bold",
      normal: "font-normal",
    },
    padding: {
      base: "py-4 px-5",
      sm: "py-3 px-6",
    },
    tracking: {
      base: "leading-[19.2px] tracking-[1%]",
      cyan: "leading-[22.4px] tracking-[-2%]",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    border: "none",
    font: "bold",
    padding: "base",
    tracking: "base",
  },
});

const variants = {
  primary: buttonVariant(),
  cyan: buttonVariant({
    color: "cyan",
    size: "sm",
    border: "cyan",
    font: "normal",
    padding: "sm",
    tracking: "cyan",
  }),
  white: buttonVariant({
    color: "white",
    size: "sm",
    border: "primary",
    font: "bold",
    padding: "base",
    tracking: "base",
  }),
};

export default function Button({
  text,
  variant = "primary",
}: {
  text: string;
  variant?: "primary" | "white" | "cyan";
}) {
  return <button className={variants[variant]}>{text}</button>;
}
