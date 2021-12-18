import { FC } from 'react';
import styled from 'styled-components';
import { Offer } from '~/data/offers';

interface OfferProps {
  offer: Offer;
}

const Image = styled.div<{ img: string }>`
  height: 60%;
  background: url(${(p) => p.img});
  background-position: center;
  background-size: cover;
  @media ${(p) => p.theme.breakpoints.md} {
    flex: 55%;
    height: 100%;
  }
`;

const VideoContainer = styled.div`
  height: 60%;
  overflow: hidden;
  @media ${(p) => p.theme.breakpoints.md} {
    flex: 55%;
    height: 100%;
  }
`;

const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledCard = styled.div`
  background-color: #fff;
  height: 105vh;
  text-align: left;
  flex-direction: column;
  display: flex;
  font-size: 18px;
  @media ${(p) => p.theme.breakpoints.sm} {
    height: 90vh;
  }
  @media ${(p) => p.theme.breakpoints.md} {
    flex-direction: row;
    height: 400px;
  }
`;

const Content = styled.div`
  height: 40%;
  padding: 2rem;
  @media ${(p) => p.theme.breakpoints.md} {
    flex: 45%;
    height: 100%;
    padding: 3rem;
  }
  @media ${(p) => p.theme.breakpoints.lg} {
    padding: 4rem;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  & span {
    margin-left: 0.5rem;
    transition: all 0.2s linear;
  }
  &:hover span {
    margin-left: 0.7rem;
  }
`;

const OfferCard: FC<OfferProps> = ({ offer }) => {
  const { id, media, title, text } = offer;
  return (
    <StyledCard>
      {media.type === 'image' ? (
        <Image img={media.url} />
      ) : (
        <VideoContainer>
          <StyledVideo
            src={media.url}
            autoPlay
            muted
            loop
            style={{ objectFit: 'cover' }}
          />
        </VideoContainer>
      )}

      <Content>
        <h1 style={{ marginBottom: '1.4rem' }}>{title}</h1>
        <div style={{ marginBottom: '1.4rem' }}>{text}</div>
        <StyledLink href={`/offers/${id}`}>
          See Details
          <span>{`>`}</span>
        </StyledLink>
      </Content>
    </StyledCard>
  );
};

export default OfferCard;
