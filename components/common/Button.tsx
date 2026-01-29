import { cn } from "@/utils";

type variantTypes = "primary" | "primary_lg" | "white" | "cyan" | "footer";

// const variants = {
//   primary: buttonVariant(),
//   primary_lg: buttonVariant({
//     color: "primary_lg",
//     size: "lg",
//     padding: "lg",
//     tracking: "lg",
//     text: "white",
//   }),
//   cyan: buttonVariant({
//     color: "cyan",
//     size: "sm",
//     border: "cyan",
//     font: "normal",
//     padding: "sm",
//     tracking: "cyan",
//     text: "primary",
//   }),
//   white: buttonVariant({
//     color: "white",
//     size: "sm",
//     border: "primary",
//     font: "bold",
//     padding: "base",
//     tracking: "base",
//     text: "primary",
//   }),
//   footer: buttonVariant({
//     color: "white",
//     size: "lg",
//     padding: "md",
//     tracking: "lg",
//     text: "primary_400",
//     border: "primary_400",
//     font: "normal",
//   }),
// };

const variants = {
  primary:
    "bg-primary h-13 text-white text-base border-none font-bold py-4 px-5 leading-[19.2px] tracking-[1%]",
  primary_lg:
    "bg-primary h-15.5 text-white text-lg border-none font-bold py-5 px-10 leading-[21.6px] tracking-[1%]",
  cyan: "bg-primary-50 text-primary text-sm border border-primary-200 font-normal py-3 px-6 leading-[22.4px] tracking-[-2%]",
  white:
    "bg-transparent text-primary text-sm border border-primary font-bold py-4 px-5 leading-[19.2px] tracking-[1%]",
  footer:
    "bg-transparent text-primary-400 text-lg border border-primary-400 font-normal py-5 px-6 leading-[21.6px] tracking-[1%]",
};

export default function Button({
  text,
  variant = "primary",
}: {
  text: string;
  variant?: variantTypes;
}) {
  return (
    <button
      className={cn(
        "rounded-full cursor-pointer outline-none",
        variants[variant],
      )}
    >
      {text}
    </button>
  );
}
