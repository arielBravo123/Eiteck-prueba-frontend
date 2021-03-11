import styled from "styled-components";

export const PageNumber = styled.li`
  color: ${({ actualPage }) => (actualPage ? "#21d8ff" : "#000")};
`;
