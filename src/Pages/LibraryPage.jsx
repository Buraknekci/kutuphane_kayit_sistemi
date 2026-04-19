import { useEffect, useState } from 'react'
import BookForm from '../Components/BookForm'
import BookList from '../Components/BookList'
import BookStats from '../Components/BookStats'
import { createBook, getEmptyBook, starterBooks } from '../Interfaces/book'

const STORAGE_KEY = 'library-management-react-bootstrap'

function LibraryPage() {
  const [books, setBooks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY)
    return savedTasks ? JSON.parse(savedTasks) : starterBooks
  })
  const [draft, setDraft] = useState(getEmptyBook())
  const [editingBookId, setEditingBookId] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  }, [books])

  function handleDraftChange(event) {
    const { name, value } = event.target
    setDraft((currentDraft) => ({ ...currentDraft, [name]: value }))
  }

  function resetForm() {
    setDraft(getEmptyBook())
    setEditingBookId(null)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (editingBookId) {
      setBooks((currentBooks) =>
        currentBooks.map((book) =>
          book.id === editingBookId ? { ...book, ...draft } : book,
        ),
      )
      resetForm()
      return
    }

    setBooks((currentBooks) => [createBook(draft), ...currentBooks])
    resetForm()
  }

  function handleEdit(book) {
    setDraft({
      title: book.title,
      author: book.author,
      category: book.category,
      status: book.status,
    })
    setEditingBookId(book.id)
  }

  function handleQuickStatusChange(bookId, nextStatus) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, status: nextStatus } : book,
      ),
    )
  }

  function handleDelete(bookId) {
    setBooks((currentBooks) =>
      currentBooks.filter((book) => book.id !== bookId),
    )

    if (editingBookId === bookId) {
      resetForm()
    }
  }

  return (
    <main className="todo-shell">
      <div className="container">
        <section className="card todo-hero-card mb-4">
          <div className="card-body p-4 p-lg-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h1 className="display-5 fw-bold mb-3">
                  Kutuphane Kayit ve Takip Sistemi
                </h1>
                <p className="lead mb-0">Kitap ekleme, listeleme ve guncelleme islemleri tek ekranda yonetilir.</p>
              </div>
              <div className="col-lg-4">
                <BookStats books={books} />
              </div>
            </div>
          </div>
        </section>

        <section className="row g-4">
          <div className="col-lg-5">
            <BookForm
              draft={draft}
              isEditing={Boolean(editingBookId)}
              onCancel={resetForm}
              onChange={handleDraftChange}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="col-lg-7">
            <div className="card todo-panel h-100">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
                  <div>
                    <span className="badge text-bg-secondary mb-2">
                      Listeleme Alani
                    </span>
                    <h2 className="h3 mb-1">Kitap Listesi</h2>
                    <p className="todo-muted mb-0">
                      Eklenen kitaplar burada listelenir ve guncellenebilir.
                    </p>
                  </div>
                  <div className="badge text-bg-dark fs-6">
                    {books.length} kayit
                  </div>
                </div>

                <BookList
                  books={books}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onQuickStatusChange={handleQuickStatusChange}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LibraryPage
