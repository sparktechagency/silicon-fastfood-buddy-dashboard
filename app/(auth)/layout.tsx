import Image from "next/image";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001526] gap-1 p-6">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={600}
          height={800}
          className="w-auto h-auto" // Keep the image responsive
        />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
