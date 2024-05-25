import { TextWrapper } from './Details.styled';
import * as img from '../../../assets/img/reading/index.js';
import { useSelector } from 'react-redux';
import { selectBook } from '../../../redux/books/booksSelectors';
import { Diary } from '../Diary/Diary.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';

export const Details = ({ status, isProgress }) => {
  const { progress } = useSelector(selectBook);

  const getTotalPagesRead = () => {
    if (progress.length === 0) return 0;
    const firstPage = progress[0].startPage;
    const lastPage = progress[progress.length - 1].finishPage;
    return lastPage - firstPage + 1;
  };
  return (
    <TextWrapper>
      {isProgress ? (
        <div className="emptyWrapper">
          <h2 className="title">Progress</h2>
          <p className="desc">
            Here you will see when and how much you read. To record, click on
            the red button above.
          </p>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 768px)"
              srcSet={`${img.starWebTab} 1x, ${img.starWebTab2} 2x`}
            />
            <source
              type="image/png"
              media="(min-width: 768px)"
              srcSet={`${img.starPngTab} 1x, ${img.starPngTab2} 2x`}
            />
            <source
              type="image/webp"
              media="(max-width: 767px)"
              srcSet={`${img.starWebMob} 1x, ${img.starWebMob2} 2x`}
            />
            <source
              type="image/png"
              media="(max-width: 767px)"
              srcSet={`${img.starPngMob} 1x, ${img.starPngMob2} 2x`}
            />
            <img className="starImg" srcSet={img.starPngTab} alt="Star" />
          </picture>
        </div>
      ) : (
        <>
          {status ? (
            <Diary getTotalPagesRead={getTotalPagesRead} />
          ) : (
            <Statistics getTotalPagesRead={getTotalPagesRead} />
          )}
        </>
      )}
    </TextWrapper>
  );
};
