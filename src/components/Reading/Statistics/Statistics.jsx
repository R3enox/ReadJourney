import {
  CircleBackground,
  CircleProgress,
  DiaryWrapper,
  Svg,
  Text,
} from './Statistics.styled.jsx';
import { useSelector } from 'react-redux';
import { selectBook } from '../../../redux/books/booksSelectors';

export const Statistics = ({ getTotalPagesRead }) => {
  const { totalPages } = useSelector(selectBook);

  const totalAllRead = ((getTotalPagesRead() * 100) / totalPages).toFixed(2);

  const radius = 53;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (totalAllRead / 100) * circumference;

  return (
    <DiaryWrapper>
      <Svg>
        <g transform={`rotate(-90 ${radius + 5} ${radius + 5})`}>
          <CircleBackground cx="58" cy="58" r={radius} />
          <CircleProgress
            cx="58"
            cy="58"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </g>
        <Text x="35%" y="55%">
          100%
        </Text>
      </Svg>
      <div className="recWrapper">
        <p className="totalAllRead">{totalAllRead}%</p>
        <svg
          className="icon-green-rec"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="4" fill="#30b94d" />
          <rect x="4" y="4" width="8" height="8" rx="2" fill="#30b94d" />
        </svg>
      </div>

      <p className="pageTotal">{getTotalPagesRead()} pages read</p>
    </DiaryWrapper>
  );
};
