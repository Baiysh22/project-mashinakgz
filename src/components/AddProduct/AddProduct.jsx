import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();
  //   console.log(navigate);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [info, setInfo] = useState("");

  function handleSave() {
    if (!brand || !price || !image || !info) {
      alert("Заполните все поля!");
    } else {
      let newProduct = {
        brand,
        price: +price,
        image,
        info,
      };
      // navigate("/");
      addProduct(newProduct);
      console.log(newProduct);
    }
  }

  return (
    <div  className="addproduct">
      <img  style={{width:"30%"}} src="https://i.pinimg.com/736x/5f/d2/d5/5fd2d58ef6e60e0a3640bffc73900a90.jpg" alt="" />
      <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
        >
        <TextField
          value={brand}
          label="Brand"
          variant="outlined"
          color="primary"
          onChange={e => setBrand(e.target.value)}
        />
        <TextField
          type="number"
          value={price}
          label="Price"
          variant="outlined"
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          value={image}
          label="Image"
          variant="outlined"
          onChange={e => setImage(e.target.value)}
        />
        <TextField
          value={info}
          label="Info"
          variant="outlined"
          onChange={e => setInfo(e.target.value)}
        />
        <Button onClick={() => handleSave()} sx={{ m: 1 }} variant="contained">
          Save
        </Button>
      </Box>
    </div>
    </div>
  );
};

export default AddProduct;
