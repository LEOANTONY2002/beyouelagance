import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import _ from "lodash";
import queryString from "query-string";
import {
  BorderAll,
  BorderBottom,
  BorderClear,
  LocalPhone,
  LocationOn,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import ContactLeft from "../assets/ContactLeft.png";
import ContactRight from "../assets/ContactRight.png";

const locations = [
  {
    view: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84138.40804645313!2d1.9175157027345684!3d48.775680530723875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e683fc4b3e7237%3A0x913cee1ffc4f69a4!2s42%20Rue%20Jean%20Jaur%C3%A8s%2C%2078190%20Trappes%2C%20France!5e0!3m2!1sen!2sin!4v1710091007016!5m2!1sen!2sin",
    name: "Trappes",
    address: "42 Rue Jean Jaurès, 78190 Trappes, France",
    mobile: "+33 789 38 62 75",
  },
  {
    view: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.846126762595!2d2.0431603764468407!3d48.78482780588057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e687c9f92c3f31%3A0x93386f67960f3956!2sBE%20YOU%20ELEGANCE!5e0!3m2!1sen!2sin!4v1710078105572!5m2!1sen!2sin",
    name: "Montigny",
    address: "29 Av. du Centre, 78180 Montigny-le-Bretonneux, France",
    mobile: "+33 647 00 49 49",
  },
  {
    view: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.291702203924!2d1.9347422764454207!3d48.75722550782051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6831667f34361%3A0x385d2b9a15f78126!2sForum%20de%20Coigni%C3%A8res%2C%2078310%20Coigni%C3%A8res%2C%20France!5e0!3m2!1sen!2sin!4v1710091670759!5m2!1sen!2sin",
    name: "Coignières",
    address: "Forum de Coignières, 78310 Coignières, France",
    mobile: "+33 758 70 17 29",
  },
];

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.c_banner}>
        <div className={styles.cb_left}>
          <h2>We Celebrate Beauty in All Its Forms.</h2>
          <div style={{ backgroundImage: `url(${ContactLeft})` }}>
            <p></p>
          </div>
        </div>
        <div className={styles.cb_right}>
          <div style={{ backgroundImage: `url(${ContactRight})` }}>
            <p></p>
          </div>
          <h2>Make your</h2>
          <h1>Contact.</h1>
          <span>Beauty in Full Bloom</span>
        </div>
      </div>
      <Box p={{ xs: 1, sm: 2 }}>
        <ContactForm />
        <Box height={100}></Box>
        <Typography variant="h4">You can find us on below Locations</Typography>
        <Container>
          <Grid container p={2} spacing={8}>
            {locations.map((item, i) => (
              <Grid key={i} item xs={12} sm={4}>
                {" "}
                <MapCard data={item} />{" "}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;

const formUrl =
  `https://docs.google.com/forms/d/` +
  process.env.REACT_APP_FORM_ID +
  `/formResponse`;
const nameId = process.env.REACT_APP_NAME_ID;
const phoneId = process.env.REACT_APP_PHONE_ID;
const emailId = process.env.REACT_APP_EMAIL_ID;
const commentId = process.env.REACT_APP_COMMENT_ID;

export const ContactForm = () => {
  const [open, setopen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const query = queryString.stringifyUrl({
      url: formUrl,
      query: Object.keys(data).reduce((a, b) => {
        a[`entry.${b}`] = data[b];
        return a;
      }, {}),
    });
    await fetch(query, { method: "POST", mode: "no-cors" })
      .then((res) => res)
      .then((r) => {
        reset();
        setopen(true);
      });
  };

  const handleClose = () => setopen(false);
  return (
    <React.Fragment className={styles.c_form}>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { borderRadius: 4 } }}
      >
        <DialogTitle textAlign={"center"}>
          {"Thanks for the Request"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            We have recieved your request and contact you shortly.
          </DialogContentText>
        </DialogContent>
        <Box py={2} display={"flex"} justifyContent={"center"}>
          <Button
            sx={{ height: "45px", color: "white" }}
            onClick={handleClose}
            autoFocus
          >
            Close
          </Button>
        </Box>
      </Dialog>

      <div className={styles.c_form}>
        <h1>Reach Us</h1>
        <p></p>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} alignItems={"center"}>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                placeholder="Name"
                fullWidth
                {...register(nameId, { required: "Field is Required" })}
                name={nameId}
                error={!_.isEmpty(errors[nameId])}
                helperText={!_.isEmpty(errors[nameId]) ? "Required" : ""}
              />
              <TextField
                variant="standard"
                placeholder="Phone"
                fullWidth
                {...register(phoneId, {
                  required: "Phone Number is Required",
                  pattern: {
                    value: /^[1-9][0-9]{8}$/i,
                    message: "Invalid Phone Number",
                  },
                })}
                type="tel"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">+33</InputAdornment>
                  ),
                }}
                name={phoneId}
                error={!_.isEmpty(errors[phoneId])}
                helperText={
                  !_.isEmpty(errors[phoneId]) ? errors[phoneId].message : ""
                }
              />

              <TextField
                variant="standard"
                placeholder="Email"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                name={emailId}
                {...register(emailId, {
                  required: "Field is Required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                    message: "Invalid Email Id",
                  },
                })}
                error={!_.isEmpty(errors[emailId])}
                helperText={
                  !_.isEmpty(errors[emailId]) ? errors[emailId].message : ""
                }
              />
              <TextField
                variant="standard"
                placeholder="What can we help you with?"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                name={commentId}
                {...register(commentId)}
                minRows={3}
                multiline
              />
              <Button sx={{ color: "#FFFFFF", height: "45px" }} type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export const MapCard = ({ data }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 4,
        height: "550px",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          height: "600px",
          marginTop: "-25px",
          transition: "ease-in-out 0.5s",
        },
      }}
    >
      <Box textAlign={"center"} p={1.5}>
        <Typography variant="h5" fontWeight={500}>
          {data.name}
        </Typography>
      </Box>

      <iframe
        style={{ border: "none", flex: 1 }}
        src={data.view}
        title={data.name}
        width={"100%"}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Box p={1} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} gap={2} m={1} alignItems={"center"}>
          <LocationOn color="primary" />
          <Typography variant="body2" color={"GrayText"}>
            {data.address}
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} m={1} alignItems={"center"}>
          <LocalPhone color="primary" />
          <Typography
            variant="body2"
            color={"GrayText"}
            onClick={() => {
              if (matches) {
                window.location.href = `tel:${data.mobile}`;
              } else {
              }
            }}
          >
            {data.mobile}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

// https://drive.google.com/drive/folders/1ds75ZcqodJ_C_5WIV89oOTXLwIAiETi5?usp=drive_link
