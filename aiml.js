const books = {
  ml1: {
    title: "Intro to ML",
    author: "Andrew Ng",
    description: "A beginner-friendly guide to Machine Learning concepts.",
    edition: "2021 Edition",
    price: "650",
    cover: "https://covers.openlibrary.org/b/id/10584357-L.jpg",
    link: "#",
    stock: 33
  },
  ml2: {
  title: "Hands-On ML with Scikit-Learn",
  author: "Aurélien Géron",
  description: "Practical ML using Scikit-Learn, Keras & TensorFlow.",
  edition: "2023 Edition",
  price: "850",
  cover: "https://covers.openlibrary.org/b/id/10982865-L.jpg",
  link: "#",
  stock: 22
},
  dl1: {
    title: "Deep Learning",
    author: "Ian Goodfellow",
    description: "The most cited book for deep learning foundations.",
    edition: "2020 Edition",
    price: "899",
    cover: "https://covers.openlibrary.org/b/id/10909208-L.jpg",
    link: "#",
    stock: 29
  },
  dl2: {
    title: "DL with PyTorch",
    author: "Eli Stevens",
    description: "Practical deep learning with PyTorch.",
    edition: "2021 Edition",
    price: "780",
    cover: "https://covers.openlibrary.org/b/id/11032733-L.jpg",
    link: "#",
    stock: 17
  },
  nlp1: {
    title: "Speech & Language Processing",
    author: "Jurafsky & Martin",
    description: "Core textbook for NLP and computational linguistics.",
    edition: "2024 Edition",
    price: "950",
    cover: "https://covers.openlibrary.org/b/id/10523365-L.jpg",
    link: "#",
    stock: 11
  },
  nlp2: {
    title: "Practical NLP",
    author: "Sowmya Vajjala",
    description: "Real-world NLP with hands-on tasks.",
    edition: "2023 Edition",
    price: "670",
    cover: "https://covers.openlibrary.org/b/id/11146367-L.jpg",
    link: "#",
    stock: 29
  },
  ds1: {
    title: "Data Science from Scratch",
    author: "Joel Grus",
    description: "Fundamentals of Data Science explained simply.",
    edition: "2022 Edition",
    price: "710",
    cover: "https://covers.openlibrary.org/b/id/11119330-L.jpg",
    link: "#",
    stock: 55
  },
  ds2: {
    title: "DS with Python",
    author: "Wes McKinney",
    description: "Data science workflows using Python and Pandas.",
    edition: "2025 Edition",
    price: "790",
    cover: "https://covers.openlibrary.org/b/id/11027671-L.jpg",
    link: "#",
    stock: 22
  },
  nn1: {
    title: "Neural Networks",
    author: "Simon Haykin",
    description: "In-depth explanation of neural networks.",
    edition: "2024 Edition",
    price: "830",
    cover: "https://covers.openlibrary.org/b/id/11074162-L.jpg",
    link: "#",
    stock: 49
  },
  nn2: {
    title: "Neural Networks with TensorFlow",
    author: "Giancarlo Zaccone",
    description: "Practical NN modeling using TensorFlow.",
    edition: "2022 Edition",
    price: "870",
    cover: "https://covers.openlibrary.org/b/id/11138719-L.jpg",
    link: "#",
    stock: 67
  }
};

function openBookInfo(bookId) {
  const book = books[bookId];
  if (!book) return;

  document.getElementById("book-cover").src = book.cover;
  document.getElementById("book-title").textContent = book.title;
  document.getElementById("book-author").textContent = book.author;
  document.getElementById("book-description").textContent = book.description;
  document.getElementById("book-edition").textContent = book.edition;
  document.getElementById("book-price").textContent = book.price;
  document.getElementById("book-stock").textContent = book.stock;
  document.getElementById("book-modal").style.display = "block";
}

function closeBookInfo() {
  document.getElementById("book-modal").style.display = "none";
}
