import Link from "next/link";

function Apresentacao() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white text-2xl text-blue-500">
      <Link href="/">Home</Link>
    </div>
  );
}

export default Apresentacao;
