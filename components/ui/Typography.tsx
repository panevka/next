type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "lead"
  | "small"
  | "muted"
  | "blockquote"
  | "inline-code"
  | "large"
  | "ul"
  | "table";

const VARIANT_MAP: Record<
  TypographyVariant,
  { tag: keyof JSX.IntrinsicElements; className: string }
> = {
  h1: {
    tag: "h1",
    className:
      "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
  },
  h2: {
    tag: "h2",
    className:
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  },
  h3: {
    tag: "h3",
    className: "scroll-m-20 text-2xl font-semibold tracking-tight",
  },
  h4: {
    tag: "h4",
    className: "scroll-m-20 text-xl font-semibold tracking-tight",
  },
  p: { tag: "p", className: "leading-7 [&:not(:first-child)]:mt-6" },
  lead: { tag: "p", className: "text-muted-foreground text-xl" },
  small: { tag: "small", className: "text-sm leading-none font-medium" },
  muted: { tag: "p", className: "text-muted-foreground text-sm" },
  "inline-code": {
    tag: "code",
    className:
      "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  },
  blockquote: { tag: "blockquote", className: "mt-6 border-l-2 pl-6 italic" },
  ul: { tag: "ul", className: "my-6 ml-6 list-disc [&>li]:mt-2" },
  table: { tag: "div", className: "my-6 w-full overflow-y-auto" }, // you might need extra table handling
  large: { tag: "div", className: "text-lg font-semibold" },
};

type TypographyProps = {
  variant: TypographyVariant;
  as?: keyof JSX.IntrinsicElements; // optional override of HTML tag
  className?: string; // optional extra classes
  children: React.ReactNode;
};

export function Typography({
  variant,
  as,
  className = "",
  children,
}: TypographyProps) {
  const { tag, className: defaultClassName } = VARIANT_MAP[variant];
  const Component = as || tag; // use override tag if provided

  return (
    <Component className={`${defaultClassName} ${className}`}>
      {children}
    </Component>
  );
}
