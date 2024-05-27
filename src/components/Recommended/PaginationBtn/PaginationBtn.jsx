import sprite from '../../../assets/sprite.svg';
import { PaginationWrapper, BtnLeft } from './PaginationBtn.styled';

export const PaginationBtn = ({ page, setPage }) => {
  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  return (
    <PaginationWrapper>
      <BtnLeft
        className="arrowLeft"
        onClick={goToPreviousPage}
        page={page}
        disabled={page === 1}
      >
        <svg className="arrowIcon left">
          <use href={sprite + '#icon-chevron-left'} />
        </svg>
      </BtnLeft>
      <button className="arrowRight" onClick={goToNextPage}>
        <svg className="arrowIcon">
          <use href={sprite + '#icon-chevron-right'} />
        </svg>
      </button>
    </PaginationWrapper>
  );
};
