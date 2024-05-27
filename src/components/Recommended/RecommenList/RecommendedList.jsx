import { RecommendedListWrapper } from './RecommendedList.styled';
import { RecommendedListItem } from '../RecommendedListItem/RecommendedListItem';
export const RecommendedList = ({ results }) => {
  return (
    <RecommendedListWrapper>
      {results?.map((book) => {
        return <RecommendedListItem book={book} key={book._id} />;
      })}
    </RecommendedListWrapper>
  );
};
