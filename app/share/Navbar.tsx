import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-primary px-8 py-3 rounded-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-3xl font-semibold">Overview</h1>

        <div className="flex items-center gap-3">
          <Image
            src="/profile.png"
            alt="logo"
            width={50}
            height={60}
            className="w-12 h-12 rounded-full"
            sizes="100vh"
          />
          <div className="text-white">
            <div className="font-medium">Kristin Watson</div>
            <div className="text-sm text-blue-200">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
