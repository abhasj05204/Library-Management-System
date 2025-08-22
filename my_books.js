const books = [
  {
    title: "Deep Learning",
    author: "Ian Goodfellow",
    subject: "Deep Learning",
    issueDate: "2025-06-15",
    dueDate: "2025-07-10",
    returned: false
  },
  {
    title: "Hands-On ML with Scikit-Learn",
    author: "Aurélien Géron",
    subject: "Machine Learning",
    issueDate: "2025-06-20",
    dueDate: "2025-07-05",
    returned: true
  },
  {
    title: "Speech & Language Processing",
    author: "Jurafsky & Martin",
    subject: "NLP",
    issueDate: "2025-06-30",
    dueDate: "2025-07-15",
    returned: false
  }
];

function getStatus(book) {
  if (book.returned) return `<span class="status returned">Returned</span>`;
  const due = new Date(book.dueDate);
  const today = new Date();
  const diff = (due - today) / (1000 * 60 * 60 * 24);
  if (diff <= 0) return `<span class="status overdue">Overdue</span>`;
  if (diff <= 3) return `<span class="status due-soon">Due Soon</span>`;
  return `<span class="status">Due: ${book.dueDate}</span>`;
}

function renderBooks() {
  const list = document.getElementById("books-list");
  books.forEach(book => {
    list.innerHTML += `
      <div class="book-card">
        <h3>${book.title}</h3>
        <div class="book-info">👤 Author: ${book.author}</div>
        <div class="book-info">📘 Subject: ${book.subject}</div>
        <div class="book-info">📅 Issued: ${book.issueDate}</div>
        <div class="book-info">⏳ Due Date: ${book.dueDate}</div>
        ${getStatus(book)}
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderBooks);
