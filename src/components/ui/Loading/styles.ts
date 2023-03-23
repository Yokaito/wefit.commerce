import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
`;

export const LoadingContainer = styled.div`
  img {
    animation: rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
