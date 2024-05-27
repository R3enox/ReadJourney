import { Wrapper } from './ModalBodyAdd.styled';
import * as img from '../../assets/img/modalBodyAdd/index';

export const ModalBodyAdd = () => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcSet={`${img.upTabletWeb} 1x, ${img.upTabletWeb2} 2x`}
        />
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcSet={`${img.upTabletPng} 1x, ${img.upTabletPng2} 2x`}
        />
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcSet={`${img.upMobWeb} 1x, ${img.upMobWeb2} 2x`}
        />
        <source
          type="image/png"
          media="(max-width: 767px)"
          srcSet={`${img.upMobPng} 1x, ${img.upMobPng2} 2x`}
        />
      </picture>
      <img srcSet={img.upTabletPng} alt="Thumbs up" className="imgBook" />
      <h2 className="titleBook">Good job</h2>
      <p className="desc">
        Your book is now in <span className="fillWord">the library!</span> The
        joy knows no bounds and now you can start your training
      </p>
    </Wrapper>
  );
};
