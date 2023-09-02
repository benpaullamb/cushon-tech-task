type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return <button {...props} className={`px-3 py-4 block font-bold text-white bg-cushon rounded ${className}`}>{children}</button>;
}
