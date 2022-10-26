import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import CarListItem from "./CarListItem";
import axios from "axios";
import { useState } from "react";
import ReactLoading from "react-loading";
import { Card } from "@mui/material";

function ListofCar() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetail = async () => {
      setDetails(await axios.get("http://localhost:3001/parked/"));
    };
    getDetail();
  }, []);

  return (
    <>
      {!details.data ? (
        <ReactLoading type="bubbles" color="blue"></ReactLoading>
      ) : (
        <Details>
          <ListofCarStyle>
            {details.data.map((detail) => (
              <CarListItem
                key={detail.id}
                id={detail.id}
                driverName={detail.driverName}
                regNo={detail.regNo}
                checkin={detail.checkin}
              ></CarListItem>
            ))}
          </ListofCarStyle>
          <VehicleDetails>
            <h3>
              Vehicles Parked : <span>{details.data.length}</span>
            </h3>
          </VehicleDetails>
        </Details>
      )}
    </>
  );
}

const Details = styled.div`
  width: 100%;
  height: 34em;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const ListofCarStyle = styled.div`
  width: 70%;
  height: 100%;
  padding: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const VehicleDetails = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;

  h3 {
    display: flex;
    flex-direction: column;

    span {
      font-size: 5rem;
    }
  }
`;

export default ListofCar;
