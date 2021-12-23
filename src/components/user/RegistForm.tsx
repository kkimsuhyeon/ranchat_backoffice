import React, { useCallback, useState } from "react";
import styled from "styled-components";

import useInput from "hooks/useInput";

export interface RegistFormProps {
  onSubmit: ({
    email,
    password,
    firstName,
    lastName,
    bio,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    bio?: "W" | "M";
  }) => void;
}

function RegistForm({ onSubmit }: RegistFormProps) {
  const [email, setEmail] = useInput({});
  const [password, setPassword] = useInput({});
  const [firstName, setFirstName] = useInput({});
  const [lastName, setLastName] = useInput({});
  const [bio, setBio] = useState<"W" | "M" | "">("");

  const handleChangeBio = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (
        value === "W" ||
        value === "M" ||
        value === "w" ||
        value === "m" ||
        value === ""
      )
        setBio(value.toUpperCase() as "W" | "M");
      return;
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        email,
        password,
        bio: bio !== "" ? bio : undefined,
        firstName,
        lastName,
      });
    },
    [onSubmit, email, password, bio, firstName, lastName]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          value={email}
          onChange={setEmail}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="password">패스워드</label>
        <input
          id="passowrd"
          value={password}
          onChange={setPassword}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="firstName">이름</label>
        <input
          id="firstName"
          value={firstName}
          onChange={setFirstName}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="lastName">성</label>
        <input
          id="lastName"
          value={lastName}
          onChange={setLastName}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="bio">성별</label>
        <input
          id="bio"
          value={bio}
          onChange={handleChangeBio}
          placeholder="W or M"
          autoComplete="off"
        />
      </div>
      <button type="submit">등록</button>
    </Form>
  );
}

export default RegistForm;

const Form = styled.form`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    & > input {
      margin-left: 0.5rem;
      width: 10rem;
      height: 1.8rem;
      padding: 0.4rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 0.3rem;
    }
  }

  & > button {
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(255, 150, 200, 0.8);
  }
`;
