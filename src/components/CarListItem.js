import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import axios from "axios";
import { Card } from "@mui/material";

function CarListItem({ id, regNo, driverName, checkin }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/parked/${id}`);
    window.location.reload();
  };

  return (
    <CarListStyle>
      <Info>
        <h1>{regNo}</h1>
        <h3>{driverName}</h3>
        <h3>{checkin}</h3>
        <Button variant="contained" onClick={() => handleDelete(id)}>
          CheckOut
        </Button>
      </Info>
    </CarListStyle>
  );
}

const CarListStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  width: 50%;
`;

const Info = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 30px;
  h1 {
    margin: 5px;
    text-transform: uppercase;
  }
  h3 {
    margin: 5px;
    margin-bottom: 10px;
  }
  background-color: #eeeeee !important;
`;

export default CarListItem;
