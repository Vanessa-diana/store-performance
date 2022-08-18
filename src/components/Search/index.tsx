import { TextField } from '@mui/material';
import React from 'react';
import { Container, Information } from './Search.styles';

interface ISearch {
  onChange: (value:string) => void;
  label?: string;
  type: string;
  value?:string | number;
  defaultValue?:string | number;
  information:string;
}

export const Search = ({ 
  onChange, 
  label, 
  type, 
  defaultValue, 
  value, 
  information,
} :ISearch) => {
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
      <Container>
        <Information>{information}</Information>
        <TextField 
            id="standard-basic"
            type={type}
            label={label} 
            onChange={handleChange}
            defaultValue={defaultValue}
            value={value}
            variant="outlined"
            fullWidth
            autoComplete={'off'}
            size="small"
          />
      </Container>
  );
}
