function BookStats({ books }) {
  const totalCount = books.length
  const availableCount = books.filter((book) => book.status === 'Rafta').length
  const loanedCount = books.filter((book) => book.status === 'Odunc Verildi').length

  const statCards = [
    { label: 'Toplam Kitap', value: totalCount, color: 'primary' },
    { label: 'Raftaki Kitap', value: availableCount, color: 'success' },
    { label: 'Oduncteki Kitap', value: loanedCount, color: 'warning' },
  ]

  return (
    <div className="row g-3">
      {statCards.map((stat) => (
        <div key={stat.label} className="col-sm-4">
          <div className={`todo-highlight p-3 h-100 text-center border border-${stat.color} border-opacity-25`}>
            <p className="small text-uppercase mb-2">{stat.label}</p>
            <p className="display-6 fw-bold mb-0">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookStats
