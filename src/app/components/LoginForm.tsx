import React from "react"
import {TextField, Button, Box} from "@mui/material"
import {LoginFormProps} from "../contract/loginFormProps"

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onChange, formData}) =>{
    return(
        <>
          <Box component="form" onSubmit={onSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Nome" name="name" value={formData.name} onChange={onChange} fullWidth required />
      <TextField label="Idade" name="age" type="number" value={formData.age} onChange={onChange} fullWidth required />
      <TextField label="Email" name="email" type="email" value={formData.email} onChange={onChange} fullWidth required />
      <TextField label="Senha" name="password" type="password" value={formData.password} onChange={onChange} fullWidth required />
      <Button type="submit" variant="contained" color="primary">Entrar</Button>
    </Box>
        </>
    )
}
