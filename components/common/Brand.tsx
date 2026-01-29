import { cn } from "@/utils";

const brandType: Record<"top" | "footer", { bg: string; color: string }> = {
  top: { bg: "bg-primary", color: "text-grey-950" },
  footer: { bg: "bg-white", color: "text-white" },
};
export default function Brand({ type }: { type: "top" | "footer" }) {
  const style = brandType[type];

  return (
    <a href="#hero" className="flex items-center gap-2">
      <div className={cn("size-8 rounded-full", style.bg)} />
      <h1
        className={cn(
          "font-bold text-lg leading-[21.6px] tracking-[1%]",
          style.color,
        )}
      >
        Brand Name
      </h1>
    </a>
  );
}
