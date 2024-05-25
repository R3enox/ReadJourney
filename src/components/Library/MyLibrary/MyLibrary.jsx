import { Title } from '../../Title/Title';
import { LibraryFilter } from '../LibraryFilter/LibraryFilter';
import { MyLibraryWrapper } from './MyLibrary.styled';
import * as img from '../../../assets/img/library/index';
import { useDispatch, useSelector } from 'react-redux';
import { getLibrary } from '../../../redux/library/libraryOperations';
import { useEffect, useState } from 'react';
import { selectLibraryBooks } from '../../../redux/library/librarySelectors';
import { LibraryList } from '../LibraryList/LibraryList';

export const MyLibrary = () => {
  const [filteredBooks, setFilteredBooks] = useState(null);
  const dispatch = useDispatch();
  const results = useSelector(selectLibraryBooks);

  useEffect(() => {
    dispatch(getLibrary());
  }, [dispatch]);

  return (
    <MyLibraryWrapper>
      <div className="flexWrapper">
        <Title title={'My Library'} />
        <LibraryFilter books={results} setFilteredBooks={setFilteredBooks} />
      </div>
      <LibraryList results={filteredBooks ? filteredBooks : results} />

      {results.length === 0 && (
        <div className="imgWrapper">
          <picture>
            <source
              type="image/webp"
              media="(min-width: 768px)"
              srcSet={`${img.bookWebTab} 1x, ${img.bookWebTab2} 2x`}
            />
            <source
              type="image/png"
              media="(min-width: 768px)"
              srcSet={`${img.bookPngTab} 1x, ${img.bookPngTab2} 2x`}
            />
            <source
              type="image/webp"
              media="(max-width: 767px)"
              srcSet={`${img.bookWebMob} 1x, ${img.bookWebMob2} 2x`}
            />
            <source
              type="image/png"
              media="(max-width: 767px)"
              srcSet={`${img.bookPngMob} 1x, ${img.bookPngMob2} 2x`}
            />
            <img className="libImg" srcSet={img.bookPngTab} alt="Iphone" />
          </picture>
          <p className="desc">
            <span className="textFill">To start training, add</span> some of
            your books{' '}
            <span className="textFill">or from the recommended ones</span>
          </p>
        </div>
      )}
    </MyLibraryWrapper>
  );
};
