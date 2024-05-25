import { LibraryListItem } from '../LibraryListItem/LibraryListItem';
import { LibraryListWrapper } from './LibraryListstyled';
export const LibraryList = ({ results }) => {
  return (
    <LibraryListWrapper>
      {results?.map((book) => {
        return <LibraryListItem book={book} key={book._id} />;
      })}
    </LibraryListWrapper>
  );
};
