type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

export default function CustomButton({
  children,
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      style={{
        backgroundColor:
          props.variant === "primary" ? "var(--primary)" : "var(--secondary)",
        color: props.variant === "primary" ? "white" : "black",
      }}
      className={`w-[250px] h-[50px] rounded-[10px] bg-[var(--nav-button)] text-[16px] leading-[19.36px] text-white font-bold `}
    >
      {children}
    </button>
  );
}
