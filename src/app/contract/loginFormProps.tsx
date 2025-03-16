import React from "react"

export interface LoginFormProps{
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
    name: string;
    age: number;
    email: string;
    password: string;
  };
}