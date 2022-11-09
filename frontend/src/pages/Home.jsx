import { Typography, Box } from "@mui/material";
import Search from "../components/Search";

export default function Home({ setData }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          paddingTop: 10,
          minHeight: "100vh",
          backgroundColor: "primary.main",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 300,
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              color: "primary.light",
              fontFamily: "Impact",
              lineHeight: 0.8,
              fontSize: 100,
            }}
          >
            WILD FOOD FACTS
          </Typography>
        </Box>
        <Search setData={setData} />
      </Box>
    </div>
  );
}
