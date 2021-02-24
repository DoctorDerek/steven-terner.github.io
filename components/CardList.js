const CardList = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-1 space-y-12 sm:space-y-0 sm:grid-cols-3 sm:gap-2 xl:gap-3">
      {children}
    </div>
  )
}

export default CardList
