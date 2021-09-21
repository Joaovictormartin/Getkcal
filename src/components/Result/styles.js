import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1120px;
  margin: 5rem auto;

  width: 80%;
  height: 10rem;
`;

export const Title = styled.h2`
  color: var(--text-color);
  font-size: 1.8rem;
  font-weight: 400;

  margin-bottom: 1rem;
`;

export const Content = styled.div`
  background: var(--background-input);
  width: 100%;

  padding: 2rem 0 2rem 1rem;

  li {
    font-size: 1.2rem;

    list-style: none;
    padding: 0.5rem 0;

    strong {
      color: #FF7373;
    }
  }
`;
