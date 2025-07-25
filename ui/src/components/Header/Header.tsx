import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import {
  styledBrand,
  styledBtnLogin,
  styledHeader,
  styledIcon,
} from "./HeaderStyled";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styledHeader}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <FontAwesomeIcon icon={faHeart} style={styledIcon} />
              <Typography component="span" sx={styledBrand}>
                Pet Love
              </Typography>
            </Link>
          </Box>
          <Button
            startIcon={<FontAwesomeIcon icon={faUser} />}
            sx={styledBtnLogin}
          >
            Entrar
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
