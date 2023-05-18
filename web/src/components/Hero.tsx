import Image from "next/image"
import nlwLogo from "../assets/nlw-spacetime-logo.svg"

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-gray-50 text-5xl font-bold leading-tight">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Collect memorable moments from your journey and share them (if you
          want) with the world!
        </p>
      </div>

      <a
        className="hover:bg-green-600 font-alt inline-block px-5 py-3 text-sm leading-none text-black uppercase bg-green-500 rounded-full"
        href=""
      >
        REGISTER MEMORY
      </a>
    </div>
  )
}
