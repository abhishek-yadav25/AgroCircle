import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useLanguage } from "../context/LanguageContext";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
} from "@mui/material";

function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.home, path: "/" },
    { name: t.about, path: "/about" },
    { name: t.services, path: "/services" },
    { name: t.marketplace, path: "/marketplace" },
    { name: t.farmer, path: "/farmer" },
    { name: t.buyer, path: "/buyer-registration" },
    { name: t.contact, path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1350px",
          width: "100%",
          margin: "0 auto",
          minHeight: "80px !important",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
                                   {/* Logo */}

        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="AgroCircle"
            style={{
              width: 55,
              height: 55,
              marginRight: 12,
            }}
          />

          <Box>
            <Typography
              sx={{
                color: "#1B5E20",
                fontWeight: 700,
                fontSize: 28,
                lineHeight: 1,
              }}
            >
              AgroCircle
            </Typography>

            <Typography
              sx={{
                color: "#757575",
                fontSize: 12,
                letterSpacing: 1,
              }}
            >
              SMART FARMING PLATFORM
            </Typography>
          </Box>
        </Box>

                                    {/* Navigation */}

        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color:
                  location.pathname === item.path
                    ? "#fff"
                    : "#2E7D32",

                backgroundColor:
                  location.pathname === item.path
                    ? "#2E7D32"
                    : "transparent",

                fontWeight: 600,

                textTransform: "none",

                borderRadius: "30px",

                px: 2.5,

                py: 1,

                transition: ".3s",

                "&:hover": {
                  bgcolor: "#2E7D32",
                  color: "#fff",
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

                                {/* Right Section */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            size="small"
            sx={{
              width: 120,
              bgcolor: "#f7f7f7",
              borderRadius: 2,
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="hi">हिन्दी</MenuItem>
            <MenuItem value="mr">मराठी</MenuItem>
          </Select>


        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
