import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500, marginTop: 20, marginLeft: 50 }}>
      <Typography variant="h3" gutterBottom>
        Top Market Statistics
      </Typography>
      <Typography variant="h6" gutterBottom>
        The top NFTs on _________ , ranked by volume, floor price and other
        statistics.
      </Typography>
      <Button variant="outlined">Client</Button>
      <Button variant="outlined">Seller</Button>
    </Box>
  );
}
