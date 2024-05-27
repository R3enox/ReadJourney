import { Link } from 'react-router-dom';
import { Wrapper } from './SummaryBlock.styled';
import sprite from '../../../assets/sprite.svg';

export const SummaryBlock = () => {
  return (
    <Wrapper>
      <h2 className="title">Start your workout</h2>
      <ul className="listItem">
        <li className="item">
          <p className="number">1</p>
          <p className="text">
            Create a personal library:{' '}
            <span className="fill">
              add the books you intend to read to it.
            </span>
          </p>
        </li>
        <li className="item">
          <p className="number">2</p>
          <p className="text">
            Create your first workout:{' '}
            <span className="fill">
              define a goal, choose a period, start training.
            </span>
          </p>
        </li>
      </ul>
      <div className="linkWrapper">
        <Link className="libraryLink " to="/library">
          My library
        </Link>
        <Link to="/library">
          <button className="arrowBtn">
            <svg className="arrowIcon">
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
