import PropTypes from "prop-types";
import { useState } from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function PageCard({ children }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SwipeableDrawer
      PaperProps={{
        elevation: 0,
        style: { backgroundColor: "white", borderRadius: "25px 25px 0 0" },
      }}
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Close
        fontSize="large"
        color="primary"
        sx={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
        }}
        onClick={handleClose}
      />

      <Box
        sx={{
          minHeight: "75vh",
          padding: "4rem 1rem",
        }}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  );
}

PageCard.propTypes = {
  children: PropTypes.node.isRequired,
};