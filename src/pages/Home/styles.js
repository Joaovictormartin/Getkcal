import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input, select {
    width: 80%;
    height: 3rem;
    padding: 0 1rem;
    font-size: 1rem;

    background: var(--background-input);
    color: var(--text-color);
    border: 1px solid transparent;
    border-radius: 0.25rem;

    margin-bottom: 2rem;


    &:focus {
      border-color: var(--border-input);
    }

  }

  button {
    background-image: linear-gradient(-90deg, #FF7373 0%, #FDDB33 100%);
    width: 80%;
    height: 3rem;

    border: 0;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    font-weight: 600;

    cursor: pointer;
  }
`;

export const WraperLabel = styled.div`
  width: 80%;
  margin-bottom: 5px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Label = styled.p`
  font-size: 1rem;
`;

