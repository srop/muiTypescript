import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box

      sx={{
        boxShadow: '0.3rem -0.46875rem 2.1875rem rgb(8 10 37 / 2%), 0.3rem -0.9375rem 1.40625rem rgb(8 10 37 / 2%), 0.3rem -0.25rem 0.53125rem rgb(8 10 37 / 4%), 0.3rem -0.125rem 0.1875rem rgb(8 10 37 / 2%)',
        padding: theme.spacing(2),
         zIndex: "100",
  //       position:"fixed",
         bottom:"0",
  //       width:"100%",
  //       flex: "0 0 50px",/*or just height:50px;*/
  // marginTop: "auto"
      }}
    >
      <Typography component="div" align="center">
        ©Copyright NITMX 2022 ,All Right Reserved
      </Typography>
    </Box>
  );
};

export default Footer;