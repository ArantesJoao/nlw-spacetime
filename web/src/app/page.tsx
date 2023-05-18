import { Copyright } from "@/components/Copyright"
import { EmptyMemories } from "@/components/EmptyMemories"
import { Hero } from "@/components/Hero"
import { SignIn } from "@/components/SignIn"

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="px-28 border-white/10 relative flex flex-col items-start justify-between py-16 overflow-hidden border-r bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="bg-stripes right-2 absolute top-0 bottom-0 w-2" />

        <SignIn />

        <Hero />

        <Copyright />
      </div>

      {/* Right */}
      <div className=" flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  )
}
