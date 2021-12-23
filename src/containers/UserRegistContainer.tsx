import React, { useCallback } from "react";
import styled from "styled-components";

import useCustomQuery, { MUTATION } from "hooks/useCustomQuery";
import useSpinner from "hooks/useSpinner";

import { MUTATION_REQUEST_CREATE_USER } from "graphql/user";

import RegistForm, { RegistFormProps } from "components/user/RegistForm";

function UserRegistContainer() {
  const [activeSpinner] = useSpinner();

  const { request } = useCustomQuery<
    {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      bio?: "W" | "M";
    },
    { createUser: boolean },
    typeof MUTATION
  >({
    type: MUTATION,
    query: MUTATION_REQUEST_CREATE_USER,
  });

  const registUser = useCallback<RegistFormProps["onSubmit"]>(
    async ({ bio, email, firstName, password, lastName }) => {
      try {
        activeSpinner(true);
        const { data } = await request({
          variables: { bio, lastName, password, email, firstName },
        });

        if (!data?.createUser) alert("실패");
      } catch (e) {
        console.log(e);
      } finally {
        activeSpinner(false);
      }
    },
    [request, activeSpinner]
  );

  return (
    <Wrapper>
      <RegistForm onSubmit={registUser} />
    </Wrapper>
  );
}

export default UserRegistContainer;

const Wrapper = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
