import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const PostCard1 = ({ cardImage, cardTitle, cardText }) => {
  const fallbackImage = ""; // Fallback image
  return (
    <Card
      className=""
      variant="outlined"
      sx={{
        borderRadius: 4,
        border: 0.5,
        overflow: "hidden", // Ensure the hover effect stays within the card
        // boxShadow: 1, // Add some shadow for depth
        ":hover": {
          //   boxShadow: 6, // Increase shadow on hover for depth
          transition: "all 0.3s ease-in-out", // Smooth transition for scaling and shadow
          "& .card-media": {
            filter: "grayscale(10%)", // Apply grayscale to the image when the card is hovered
          },
        },
      }}
    >
      <CardMedia
        className="card-media" // Add a class to target this element
        sx={{
          height: 140,
          filter: "grayscale(80%)", // Default state: no grayscale
          transition: "filter 0.3s ease-in-out", // Smooth transition for grayscale
        }}
        image={cardImage || fallbackImage} // Use fallback if cardImage is missing
        title="card image"
      />

      <CardContent
        sx={{
          paddingTop: {
            sx: "1rem",
            md: "1rem",
          },
          borderTop: ".05rem solid #262626", // Subtle border at the top
        }}
      >
        {/* <Typography gutterBottom variant="h5" component="div"> */}
        <h5 className="font-bold mb-2 text-lg">{cardTitle}</h5>
        {/* </Typography> */}
        {/* <Typography variant="body2" sx={{ color: "text.secondary" }}> */}
        <span className="text-sm">{cardText}</span>
        {/* </Typography> */}
      </CardContent>
    </Card>
  );
};

export default PostCard1;
