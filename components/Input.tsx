type InputProps = React.ComponentPropsWithoutRef<'input'>;

export default function Input(props: InputProps) {
  return <input type="number" min={0} step={1} className="max-w-xs w-full block px-3 py-1.5 bg-gray-200 rounded text-right" {...props} />;
}
