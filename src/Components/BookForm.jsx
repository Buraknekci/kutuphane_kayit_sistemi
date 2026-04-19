function BookForm({
  draft,
  isEditing,
  onCancel,
  onChange,
  onSubmit,
}) {
  return (
    <div className="card todo-panel h-100">
      <div className="card-body p-4 p-lg-5">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <span className="badge text-bg-primary mb-2">
              {isEditing ? 'Kitap Guncelleme' : 'Yeni Kitap'}
            </span>
            <h2 className="h3 mb-2">Kutuphane Formu</h2>
            <p className="todo-muted mb-0">
              Kutuphaneye kitap ekleyin ya da secilen kitabi guncelleyin.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="d-grid gap-3">
          <div>
            <label htmlFor="title" className="form-label fw-semibold">
              Kitap Adi
            </label>
            <input
              id="title"
              name="title"
              className="form-control form-control-lg"
              placeholder="Ornek: Beyaz Dis"
              value={draft.title}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="form-label fw-semibold">
              Yazar
            </label>
            <input
              id="author"
              name="author"
              className="form-control"
              placeholder="Ornek: Jack London"
              value={draft.author}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="form-label fw-semibold">
              Tur
            </label>
            <input
              id="category"
              name="category"
              className="form-control"
              placeholder="Ornek: Roman"
              value={draft.category}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="form-label fw-semibold">
              Kitap Durumu
            </label>
            <select
              id="status"
              name="status"
              className="form-select"
              value={draft.status}
              onChange={onChange}
            >
              <option value="Rafta">Rafta</option>
              <option value="Odunc Verildi">Odunc Verildi</option>
              <option value="Bakimda">Bakimda</option>
            </select>
          </div>

          <div className="d-flex flex-wrap gap-2 pt-2">
            <button type="submit" className="btn btn-primary btn-lg">
              {isEditing ? 'Kitabi Guncelle' : 'Kitap Ekle'}
            </button>
            {isEditing && (
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={onCancel}
              >
                Iptal
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookForm
