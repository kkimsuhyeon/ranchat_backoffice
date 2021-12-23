import React, { useState, useCallback } from "react";

export interface useInputProps {
  defaultValue?: string;
  preChange?: (value: string) => string;
}

function useInput({ defaultValue, preChange }: useInputProps) {
  const [value, setValue] = useState(defaultValue ?? "");

  const change = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => {
      const value = typeof e === "string" ? e : e.target.value;
      const result = (preChange && preChange(value)) ?? value;
      setValue(result);
    },
    [preChange]
  );

  return [value, change] as const;
}

export default useInput;
