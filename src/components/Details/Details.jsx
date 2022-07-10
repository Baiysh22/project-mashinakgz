import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Details = ({ getOneProduct, oneProduct }) => {
  console.log(oneProduct);
  const params = useParams();
  // console.log(params);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  return (
    <Container className="section__details" >
      {oneProduct ? (
        <Box
          marjinTop={"20px"}
          display={"flex"}
          flexDirection={"column"}
          alingItems={"center"}>
          <Typography 
          textAlign={"center"} 
          color={"black"} 
          backgroundColor={"white"} 
          borderRadius={"90px"}
          variant="h2">{oneProduct.brand}</Typography>
          <Typography textAlign={"center"} color={"white"} variant="h4">
            {oneProduct.price}
          </Typography>
         <Box
          display={"flex"}
          flexDirection={"row"}
          marginBottom={"40px"}>
         <Typography color={"white"} textAlign={"center"} variant="h6">
            {oneProduct.info}
          </Typography>
          <img  width={"50%"} src={oneProduct.image} alt="" />
         </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Details;
