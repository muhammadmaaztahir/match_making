import React from "react";
import { Box } from "@mui/material";

const Heroseation = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "",
          alignItems: "",
          height: "70%",
          backgroundColor: "#f5f5f5", // Background color for contrast
          px: 0, // Padding for small devices
        }}
      >
        <Box
          component="img"
          src="Cover@.svg"
          alt="Cover Image"
          sx={{
            width: {
              xs: "100%",   // Full width on extra small devices (mobile)
              sm: "100%",    // 80% width on small devices (tablets)
              md: "100%",    // 70% width on medium devices (small laptops)
              lg: "100%",    // 60% width on large devices (desktops)
              xl: "100%",    // 50% width on extra large devices (large desktops)
            },
            maxHeight: "50%",
            objectFit: "cover",  // Ensures the image maintains its aspect ratio
            boxShadow: 3,        // Adds a subtle shadow for a more professional look
          }}
        />
      </Box>
    </>
  );
};

export default Heroseation;
