import { WishListPreview } from './WishListPreview';

export function WishList({ wishlist, onDelete }) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        overflowY: 'scroll',
        maxHeight: '300px',
      }}
    >
      {wishlist.map((book) => (
        <WishListPreview key={book.title} book={book} onDelete={onDelete} />
      ))}
    </section>
  );
}
