import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import {LoginForm} from "../components/LoginForm";
import { useLoginController } from "../controller/LoginController";

const LoginView: React.FC = () => {
  const { formData, handleChange, handleSubmit } = useLoginController();

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <LoginForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      </Paper>
    </Container>
  );
};

export default LoginView;
