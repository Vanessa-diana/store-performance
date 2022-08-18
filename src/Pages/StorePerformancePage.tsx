import {  Grid } from "@mui/material";
import React, { useEffect, useState, } from "react";
import  styled  from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Map } from "../components/Map";
import { Search } from "../components/Search";

 export const Content = styled.div`
  background: #E0FFFF	;
  width:100%;
  height: 100%;
`;

interface IData {
  name: string;
  revenue: number;
  latitude: number;
  longitude: number;
}

export const StorePerformance = () => {

  const [data, setData] = useState<IData[]>([]);
  const [storeName, setStoreName] = useState('');
  const [billing, setBilling] = useState('');
    
  useEffect(()=>{
    fetch('./data/data.json',{
      headers:{
        Accept:'application/json'
      }
    })
      .then(res=>res.json())
      .then(res=> setData(res.stores))
  },[]);


  const handleStore = (value:string) => {
      setStoreName(value);
  };

  const handleBilling = (value:string) => {
     setBilling(value);
     setStoreName('');
  };

  const filteredBilling = data.filter(
      revenue => {
        return (
          revenue
            .revenue.toString()
            .includes(billing)
          );
      }
  );

  const filteredStores = data.filter(
    store => {
      return (
        store
        .name
        .toLowerCase()
        .includes(storeName.toLocaleLowerCase()))
    }
  );

  return (
      <Content>
        <Header/>
          <Grid container spacing={4} p={'10px 30px'}> 
             <Grid item xs={6} p={'10px'}>
                <Search 
                  onChange={handleStore}
                  label="Nome da Loja" 
                  type={'text'}
                  value={storeName}
                  information="Busque a loja pelo nome"
                />
                <List data={storeName? filteredStores : filteredBilling} /> 
              </Grid>
              <Grid item xs={6} p={'10px'}>
                <Search
                  onChange={handleBilling}
                  type='text'
                  information="Busque a loja pelo faturamento"
                  defaultValue={'15.000,00'}
                  label="Faturamento mínimo esperado"
                />
                <Map data={storeName? filteredStores : filteredBilling} />
              </Grid>
          </Grid>
        <Footer/>
      </Content>
    )
  }
