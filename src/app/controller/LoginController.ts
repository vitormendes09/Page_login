"use client"; 
import {useState} from "react"
import {LoginData} from "../contract/loginData"

export const LoginController = () => {
    const [formData, setFormData] = useState<LoginData>({
        name: "",
        age: 0,
        email: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: name === "age" ? Number(value) : value,
        }));
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form Data:", formData);
      };
    
      return {
        formData,
        handleChange,
        handleSubmit,
      };
}

