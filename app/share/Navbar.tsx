export default function Navbar() {
  return (
    <div className="bg-[#012846] px-8 py-6 rounded-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-3xl font-semibold">Overview</h1>

        <div className="flex items-center gap-3">
          {/* <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
            alt="Kristin Watson"
            className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover"
          /> */}
          <div className="text-white">
            <div className="font-medium">Kristin Watson</div>
            <div className="text-sm text-blue-200">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
