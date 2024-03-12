import React from "react";
import styles from "./Service.module.css";
import ServiceBanner from "../assets/Service.png";
import { Avatar, Box, Chip, Container, Divider, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Masonry } from "@mui/lab";
import { services } from "../services";
import { LocationOn, LocationOnOutlined, LocationOnSharp } from "@mui/icons-material";

const Service = () => {

  let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
  });

  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={styles.Service}>
      <div
        style={{ backgroundImage: `url(${ServiceBanner})` }}
        className={styles.s_banner}
      >
        <p></p>
        <div className={styles.sb_title}>
          <div>
            <h2>Elagant</h2>
            <h1>Service.</h1>
            <span>Live your best life</span>
          </div>
        </div>
      </div>
      <div className={styles.c_form}>
        <h1>Our Services</h1>
        <p></p>
      </div>
      <Container maxWidth={'lg'}>
        <Masonry columns={isMobile ? 1 : isTab ? 2 : 3} sx={{ mb: 4 }} spacing={3}>
          {services.map((service, index) => (
            <Box key={index}>
              <Box id={service.service}>
                <Box  display={'flex'} alignItems={'center'}>
                  <Box sx={{ padding: 2, borderRadius: '50%', bgcolor: '#ffc3ee' }} >

                    <Avatar sx={{ width: 90, height: 90 }} src={service.image} alt={service.service} />
                  </Box>
                  <Box width={1} marginLeft={-2} padding={1} display={'flex'} alignItems={'center'} sx={{ borderRadius: '0 40px  40px 0' }} height={80} bgcolor={'#ffc3ee'}>

                    <Typography variant="h6" fontWeight={'bold'} fontSize={18}>{service.service}</Typography>
                  </Box>
                </Box>
                
                {service.branchs.map((branch, j) => <Box key={j}>
                  <Box display={'flex'} justifyContent={'center'}  p={1} gap={1}>{
                    branch.branchs.split(',').map((name)=><Chip  key={name} icon={<LocationOnOutlined />} label={name} variant="outlined" />)
                    }</Box>
                <Divider className={styles.service}>{ branch.option }</Divider>
                  {
                    branch.services.map((option, z) => <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} key={z}> <ListItem
                    >
                      <ListItemText
                      primaryTypographyProps={{fontWeight:500}}
                        primary={option.title}
                        secondary={option.subTitle !== "" ? option.subTitle.split(',').join(' + ') : null}
                      />
                    </ListItem>
                      <Typography variant="body1" fontWeight={500}>{euro.format(option.price)}</Typography></Box>)
                  }
                </Box>)}
              </Box>
            </Box>
          ))}
        </Masonry>
      </Container>
    </div>
  );
};

export default Service;
