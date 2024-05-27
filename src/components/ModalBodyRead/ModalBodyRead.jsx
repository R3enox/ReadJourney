import { Wrapper } from './ModalBodyRead.styled';
import * as img from '../../assets/img/recommended/index';

export const ModalBodyRead = () => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/webp"
          srcSet={`${img.bookWebDesc} 1x, ${img.bookWebDesc2} 2x`}
        />
        <source
          type="image/png"
          srcSet={`${img.bookPngDesc} 1x, ${img.bookPngDesc2} 2x`}
        />
      </picture>
      <img srcSet={img.bookPngDesc} alt="Thumbs up" className="imgBook" />
      <h2 className="titleBook">The book is read</h2>
      <p className="desc">
        It was an <span className="fillWord">exciting journey</span>, where each
        page revealed new horizons, and the characters became inseparable
        friends.
      </p>
    </Wrapper>
  );
};
