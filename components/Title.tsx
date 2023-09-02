interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h2 className="mb-4 text-xl font-bold">{children}</h2>;
}
