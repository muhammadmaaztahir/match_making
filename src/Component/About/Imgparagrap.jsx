import React from "react";
import { Box, Typography } from "@mui/material";

const Imgparagrap = () => {
  return (
    <>
      {/* First section: Image first, then Typography */}
      <Box sx={{paddingTop:"10vh",paddingBottom:"vh"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" }, // Stack on mobile, horizontal on medium and larger screens
          alignItems: "center",
          justifyContent: "", // Ensure even spacing between image and text
          mb: 4, // Margin-bottom for spacing between sections
          px: { xs: 2, sm: 3, md: 2, lg: 4 }, // Padding for all screen sizes
        }}
      >
        <Box
          component="img"
          src="8a905aef575f3acb820ba79b4641770d.jpg" // Replace with your image
          alt="First Image"
          sx={{
            width: { xs: "40%", sm: "35%", md: "20%" }, // Responsive width to ensure circular shape on different screens
            height: "auto", // Keep the aspect ratio of the image
            objectFit: "cover", // Cover the entire box area
            borderRadius: "50%", // Ensure the image is circular
            mb: { xs: 2, md: 0 }, // Margin bottom for mobile screens
            pr: { md: 2 }, // Padding-right for spacing on medium+ screens
          }}
        />
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: "center", sm: "center", md: "left" }, // Responsive text alignment
            fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" }, // Font size increases with screen size
            width: { xs: "100%", sm: "80%", md: "60%" }, // Adjust paragraph width to be responsive
          }}
        >
       Matchmaker was started with the simple goal of helping Jewish singles find their soul mates, their bashert. Now the challenge is finding the soul mate, the bashert, that you saw at Sinai. </Typography>
      </Box>

      {/* Second section: Typography first, then Image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row-reverse" }, // Reverse layout for medium+ screens
          alignItems: "center",
          justifyContent: "", // Ensure even spacing between image and text
          px: { xs: 2, sm: 3, md: 4, lg: 6 }, // Padding for all screen sizes
        }}
      >
     <Box
          component="img"
          src="360_F_277685185_UAYxm224UPelni1rxsuAUZQbfhly0RpL.jpg" // Replace with your image
          alt="Second Image"
          sx={{
            width: { xs: "40%", sm: "35%", md: "20%" }, // Responsive width to ensure circular shape
            height: "auto", // Keep the aspect ratio of the image
            objectFit: "cover", // Cover the entire box area
            borderRadius: "50%", // Ensure the image is circular
            mb: { xs: 2, md: 0 }, // Margin bottom for mobile screens
            pl: { md: 2 }, // Padding-left for spacing on medium+ screens
          }}
        />
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: "center", sm: "center", md: "right" }, // Responsive text alignment
            fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" }, // Font size increases with screen size
            width: { xs: "100%", sm: "80%", md: "60%" }, // Adjust paragraph width to be responsive
          }}
        >
        </Typography>
        
      </Box>
   
   </Box>
   
    </>
  );
};

export default Imgparagrap;
