export default function Card({children, ...rest}) {
  return (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}
