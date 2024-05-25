import { QuoteBlockWrapper } from './QuoteBlock.styled';
import * as img from '../../assets/img/recommended/index';

export const QuoteBlock = () => {
  return (
    <QuoteBlockWrapper>
      <picture>
        <source
          type="image/webp"
          srcSet={`${img.bookWebDesc} 1x, ${img.bookWebDesc2} 2x`}
        />
        <source
          type="image/png"
          srcSet={`${img.bookPngDesc} 1x, ${img.bookPngDesc2} 2x`}
        />
        <img className="hero-img" srcSet={img.bookPngDesc} alt="Iphone" />
      </picture>

      <p className="desc">
        "Books are <span className="fillWord">windows </span>to the world, and
        reading is a journey into the unknown."
      </p>
    </QuoteBlockWrapper>
  );
};
