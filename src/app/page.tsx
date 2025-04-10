import Image from "next/image";

export default function Home() {
  const dbUrl = process.env.DATABASE_URL;

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-900">
      <h1 className="text-3xl text-white bg-red-600">
        This my first official landing page that is centred in the middle
        woohoo!
      </h1>
      <h3 className="text-3xl text-white bg-green-600">{dbUrl}</h3>
    </div>
  );
}
