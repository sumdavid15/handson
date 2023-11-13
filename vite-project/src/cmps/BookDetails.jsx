import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function BookDetails({ book, onCheckboxChange, isChecked }) {
  function rating() {
    return Array(5)
      .fill()
      .map((_, i) => {
        if (i <= Math.round(book.rating) - 1) {
          return <AiFillStar key={i} />;
        } else {
          return <AiOutlineStar key={i} />;
        }
      });
  }

  if (!book) return;
  return (
    <section className='book-preview'>
      <div className='book-details'>
        <div className='book-title'>
          <p>{book.title}</p>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={(e) => onCheckboxChange(e.target.checked)}
          />
        </div>
        <div className='divider'></div>
        <p className='book-author'>{book.author}</p>
        <p className='description'>{book.description}</p>
        <p className='rating'>Rating: {rating().map((rating) => rating)}</p>
        <p>Price: ${book.price}</p>
      </div>
    </section>
  );
}
