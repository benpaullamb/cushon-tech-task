interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <div className="h-64 bg-[url('../public/banner.svg')] bg-cover bg-no-repeat bg-center flex items-center">
      <div className="container mx-auto">
        <h1 className="text-5xl text-white font-medium">{title}</h1>
      </div>
    </div>
  );
}
