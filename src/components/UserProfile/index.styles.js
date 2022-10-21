import styled from 'styled-components';

export const UserSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
  margin-top: 100px;
`;

export const UserArticle = styled.div`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
`;
export const UserName = styled.h2`
  color: #d3573c;
  font-size: 36px;
  font-weight: normal;
`;
export const UserDescription = styled.p`
  font-size: 13px;
  color: #d3573c;
`;
export const UserLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 200px;
  border-radius: 10em;
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.2);
  border: 10px solid red;
  padding: 5px;
  border-image-slice: 10%;
`;
