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
      style={
        {
          // backgroundColor:
          // props.variant === "primary" ? "var(--primary)" : "var(--secondary)",
          // color: props.variant === "primary" ? "white" : "black",
        }
      }
      className={`w-[250px] h-[50px] rounded-[10px] text-[16px] leading-[19.36px]
         text-white font-bold ${
           props.variant === "primary"
             ? "bg-[var(--primary)]"
             : "bg-[var(--secondary)]"
         }
         disabled:bg-[var(--secondary)] disabled:active:scale-100 disabled:text-[#CDCDCD]
         active:bg-[var(--common-blue)] active:scale-95
         transition duration-400 ease-in-out disabled:cursor-not-allowed disabled:border-slate-200 disabled:border
         `}
    >
      {children}
    </button>
  );
}
