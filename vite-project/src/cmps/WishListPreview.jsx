export function WishListPreview({ book, onDelete }) {
  return (
    <section className='whist-list-preview'>
      <p className='wish-list-title'>
        {book.title.length > 25 ? `${book.title.slice(0, 25)}...` : book.title}
      </p>
      <button className='delete-btn' onClick={() => onDelete(book)}>
        X
      </button>
    </section>
  );
}
