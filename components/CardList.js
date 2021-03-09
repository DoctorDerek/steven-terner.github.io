const CardList = ({ children }) => {
  return (
    <div className="grid w-full grid-cols-1 divide-y-2 divide-gray-600 sm:divide-x md:divide-x-2 xl:divide-x-4 sm:divide-y-0 divide-solid sm:grid-cols-3 sm:border-0">
      {children}
    </div>
  )
}

export default CardList
