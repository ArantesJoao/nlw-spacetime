/* eslint-disable react/no-unescaped-entities */
export function EmptyMemories() {
  return (
    <div className="flex items-center justify-center flex-1">
      <p className="w-[360px] text-center leading-relaxed">
        You haven't recorded any memories yet, start{" "}
        <a href="" className="hover:text-gray-50 underline">
          creating now
        </a>
        !
      </p>
    </div>
  )
}
