import { Wrapper } from './ModalBody.styled';

export const ModalBody = ({ book, btn }) => {
  const { imageUrl, title, author, totalPages } = book;
  return (
    <Wrapper>
      <img srcSet={imageUrl} alt={title} className="imgBook" />
      <h2 className="titleBook">{title}</h2>
      <p className="author">{author}</p>
      <p className="totalPages">{totalPages} pages</p>
      {btn}
    </Wrapper>
  );
};
