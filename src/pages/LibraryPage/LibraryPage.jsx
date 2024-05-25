import { LibraryPageWrapper } from './LibraryPage.styled';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { AddBook } from '../../components/Library/AddBook/AddBook';
import { Books } from '../../components/Library/Books/Books';
import { MyLibrary } from '../../components/Library/MyLibrary/MyLibrary';

const LibraryPage = () => {
  return (
    <LibraryPageWrapper>
      <Dashboard>
        <AddBook />
        <Books />
      </Dashboard>
      <MyLibrary />
    </LibraryPageWrapper>
  );
};

export default LibraryPage;
