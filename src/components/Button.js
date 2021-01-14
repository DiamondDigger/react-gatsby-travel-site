import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  min-width: 100px;
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  border: none;
  border-radius: 2.5rem;
  transform: 0.3s !important;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`
