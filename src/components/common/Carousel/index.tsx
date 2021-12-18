import { FC } from 'react';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

type ArrowType = 'prev' | 'next';

type CarouselType = 'inner' | 'outer';

const StyledArrow = styled.div<{
  left?: string;
  right?: string;
  type: ArrowType;
}>`
  position: absolute;
  left: ${(p) => p.left};
  right: ${(p) => p.right};
  top: 45%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% center;
  transform: ${(p) => (p.type === 'next' ? 'rotate(180deg)' : 'null')};
  transition: all 0.2s linear;
  &:hover {
    transform: ${(p) =>
      p.type === 'next'
        ? 'rotate(180deg) translateX(-5px)'
        : 'translateX(-5px)'};
  }
`;

const BlueArrow = styled(StyledArrow)`
  background-image: url(/images/arrows/blue-arrow.png);
`;

const WhiteArrow = styled(StyledArrow)`
  background-image: url(/images/arrows/white-arrow.png);
`;

interface StyledArrowProps {
  type: ArrowType;
  color: 'blue' | 'white';
  left?: string;
  right?: string;
}

const CustomArrow: FC<CustomArrowProps & StyledArrowProps> = (props) => {
  const { onClick, color, className, style, ...rest } = props;
  return color === 'blue' ? (
    <BlueArrow onClick={onClick} {...rest} />
  ) : (
    <WhiteArrow onClick={onClick} {...rest} />
  );
};

const baseSliderSettings: Settings = {
  autoplay: true,
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  arrows: true,
  speed: 1500,
  autoplaySpeed: 40000,
};

function formSliderSettings({
  type = 'inner',
  autoplaySpeed = 10000,
  slidesToShow = 1,
}: {
  type?: CarouselType;
  autoplaySpeed?: number;
  slidesToShow?: number;
}) {
  const nextArrow =
    type === 'inner' ? (
      <CustomArrow color="white" type="next" right="40px" />
    ) : (
      <CustomArrow color="blue" type="next" right="-40px" />
    );
  const prevArrow =
    type === 'inner' ? (
      <CustomArrow color="white" type="prev" left="40px" />
    ) : (
      <CustomArrow color="blue" type="prev" left="-40px" />
    );
  return {
    ...baseSliderSettings,
    nextArrow,
    prevArrow,
    autoplaySpeed,
    slidesToShow,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, slidesToShow),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, slidesToShow),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
}

interface CarouselProps {
  type?: CarouselType;
  autoplaySpeed?: number;
  slidesToShow?: number;
  fade?: boolean;
}

const Carousel: FC<CarouselProps> = ({
  slidesToShow,
  children,
  type,
  autoplaySpeed,
  fade,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' });
  const settings = formSliderSettings({
    type: isBigScreen ? type : 'inner',
    slidesToShow,
    autoplaySpeed,
  });
  return (
    <Slider {...settings} fade={Boolean(fade)}>
      {children}
    </Slider>
  );
};

export default Carousel;
