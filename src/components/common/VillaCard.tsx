import { FC } from 'react';
import styled from 'styled-components';
import { Villa } from '~/data/villas';

interface CardProps {
  villa: Villa;
}

const Image = styled.div<{ img: string }>`
  min-height: 55%;
  background: url(${(p) => p.img});
  margin-bottom: 1rem;
  background-position: center;
  background-size: cover;
  @media ${(p) => p.theme.breakpoints.sm} {
    min-height: 50%;
  }
  @media ${(p) => p.theme.breakpoints.lg} {
    min-height: 40%;
  }
`;

const StyledCard = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  margin: 0 1rem;
  height: 80vh;
  text-align: left;
  display: flex;
  flex-direction: column;
  @media ${(p) => p.theme.breakpoints.sm} {
    height: 70vh;
  }
  @media ${(p) => p.theme.breakpoints.lg} {
    height: 480px;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
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

const Title = styled.h2`
  height: 40px;
  margin-bottom: 1rem;
  @media ${(p) => p.theme.breakpoints.lg} {
    height: 50px;
  }
`;

const VillaCard: FC<CardProps> = ({ villa }) => {
  const { id, img, title, text } = villa;
  return (
    <StyledCard>
      <Image img={img} />
      <Content>
        <Title>{title}</Title>
        <div style={{ flex: 1 }}>{text}</div>
        <StyledLink href={`/accomodations/${id}`}>
          See Details
          <span>{`>`}</span>
        </StyledLink>
      </Content>
    </StyledCard>
  );
};

export default VillaCard;
