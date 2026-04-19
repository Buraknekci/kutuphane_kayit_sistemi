function BookList({ books, onDelete, onEdit, onQuickStatusChange }) {
  if (!books.length) {
    return (
      <div className="todo-empty text-center p-5">
        <h3 className="h4 mb-2">Henuz kitap eklenmedi</h3>
        <p className="todo-muted mb-0">
          Soldaki formu kullanarak kutuphaneye ilk kitabi ekleyebilirsiniz.
        </p>
      </div>
    )
  }

  return (
    <div className="d-grid gap-3">
      {books.map((book) => {
        const isAvailable = book.status === 'Rafta'

        return (
          <article
            key={book.id}
            className={`todo-task-item p-4 ${isAvailable ? 'is-complete' : ''}`}
          >
            <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
              <div>
                <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                  <h3 className="h5 mb-0">{book.title}</h3>
                  <span
                    className={`badge ${
                      isAvailable ? 'text-bg-success' : 'text-bg-warning'
                    }`}
                  >
                    {book.status}
                  </span>
                </div>
                <p className="mb-1">
                  <span className="fw-semibold">Yazar:</span> {book.author}
                </p>
                <p className="todo-muted mb-0">
                  <span className="fw-semibold">Tur:</span> {book.category}
                </p>
              </div>

              <div className="d-flex flex-wrap gap-2 align-items-start">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => onEdit(book)}
                >
                  Guncelle
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() =>
                    onQuickStatusChange(
                      book.id,
                      isAvailable ? 'Odunc Verildi' : 'Rafta',
                    )
                  }
                >
                  {isAvailable ? 'Odunce Cikar' : 'Rafa Al'}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(book.id)}
                >
                  Sil
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default BookList
