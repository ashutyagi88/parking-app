import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import axios from "axios";

function AddCar() {
  const [regNo, setRegNo] = useState("");
  const [driverName, setDriverName] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAdd = async () => {
    const date = new Date();
    const data = {
      regNo: regNo,
      driverName: driverName,
      checkin: date.toString(),
    };
    window.location.reload();

    if (!regNo || !driverName) {
      setSnackbarMessage("Enter Details");
      setOpen(true);
    } else {
      await axios.post("http://localhost:3001/parked/", data);
      setSnackbarMessage("Car Added");
      setOpen(true);
      setRegNo("");
      setDriverName("");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setSnackbarMessage("");
  };

  return (
    <AddCarStyle>
      <form action="">
        <TextField
          id="regNo"
          label="Registration Number"
          variant="outlined"
          value={regNo}
          onChange={(e) => {
            setRegNo(e.target.value);
          }}
          inputProps={{ maxLength: 10 }}
          sx={{ input: { textTransform: "uppercase" } }}
        />
        <TextField
          id="driverName"
          label="Driver Name"
          variant="outlined"
          value={driverName}
          onChange={(e) => {
            setDriverName(e.target.value);
          }}
          sx={{ input: { textTransform: "capitalize" } }}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add Car
        </Button>
        <Snackbar
          open={open}
          message={snackbarMessage}
          onClose={handleClose}
          autoHideDuration={2000}
        />
      </form>
    </AddCarStyle>
  );
}

const AddCarStyle = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  background-color: #eeeeee;
  border-radius: 15px;
  text-align: center;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export default AddCar;
