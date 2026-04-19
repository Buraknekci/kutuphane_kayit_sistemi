const starterBooks = [
  {
    id: 1,
    title: 'Simyaci',
    author: 'Paulo Coelho',
    category: 'Roman',
    status: 'Rafta',
  },
  {
    id: 2,
    title: 'Sefiller',
    author: 'Victor Hugo',
    category: 'Klasik',
    status: 'Odunc Verildi',
  },
]

function createBook(bookData) {
  return {
    id: Date.now(),
    title: bookData.title.trim(),
    author: bookData.author.trim(),
    category: bookData.category.trim(),
    status: bookData.status,
  }
}

function getEmptyBook() {
  return {
    title: '',
    author: '',
    category: '',
    status: 'Rafta',
  }
}

export { createBook, getEmptyBook, starterBooks }
