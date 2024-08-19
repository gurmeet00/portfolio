import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { useFirebase } from "./firebase/firebaseconfig";
function ContactForm() {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  console.log(firebase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleFormData(name, email, phone, subject);
    console.log(name, email, phone, subject);
  };

  return (
    <>
      <Grid item xs={12} sx={{ my: 10 }}>
        <Stack direction="row" spacing={1}>
          <Chip
            variant="outlined"
            avatar={<FeedOutlinedIcon style={{ color: "white" }} />}
            label="Contact"
            sx={{ color: "white" }}
          />
        </Stack>

        <Typography
          sx={{
            fontSize: { xs: "34px", md: "60px" },
            fontWeight: "regular",
            color: "White",
            mt: 4,
            fontFamily: "poppins",
          }}
        >
          Let's Work <span style={{ color: "#7844e9" }}> Together!</span>
        </Typography>
      </Grid>

      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: "white", fontFamily: "poppins" }}>
            {" "}
            Name
          </Typography>
          <TextField
            type="text"
            id="standard-basic"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            fullWidth
            sx={{ color: "white", borderBottom: "1px solid white" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: "white", fontFamily: "poppins" }}>
            {" "}
            Email
          </Typography>

          <TextField
            type="email"
            id="standard-basic"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ color: "white", borderBottom: "1px solid white" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: "white", fontFamily: "poppins" }}>
            {" "}
            Phone
          </Typography>

          <TextField
            type="tel"
            id="standard-basic"
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            sx={{ color: "white", borderBottom: "1px solid white" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: "white", fontFamily: "poppins" }}>
            {" "}
            Message
          </Typography>
          <TextField
            type="text"
            id="standard-basic"
            variant="standard"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
            sx={{ color: "white", borderBottom: "1px solid white" }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          {/* <TextField rows={6} style={{width:"100%",borderRadius:"15px", value={comment} onChange={(e)=> setComment(e.target.value)} backgroundColor:"transparent", color:"white", fontFamily:"poppins", padding:"10px 0px 5px 10px"}}/ > */}
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            size="large"
            fullWidth
            sx={{
              border: "1px solid #7844e9",
              p: 1,
              color: "white",
              borderRadius: "10px",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactForm;
