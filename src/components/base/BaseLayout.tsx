import React from "react";
import styled from "styled-components";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default BaseLayout;

const Wrapper = styled.div`
  min-width: 1200px;
  width: 100%;
  padding: 1rem;
`;
