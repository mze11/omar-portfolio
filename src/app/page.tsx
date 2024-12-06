"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import ProfileImage from "../../public/profile.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        pt: 14,
        px: 14,
        pb: 10,
        height: "100%",
      }}
    >
      <Box mt="auto">
        <Typography variant="h2">I’m</Typography>
        <Typography variant="h1" fontWeight="bold">
          Omar
        </Typography>
        <Typography variant="h1" fontWeight="bold">
          Zaza
        </Typography>
      </Box>

      <Stack flexDirection={"row"} gap={3} mt={2} alignItems="center">
        <Typography variant="body1">Business developer</Typography>
        <span
          style={{
            borderColor: "#222",
            borderWidth: 0.5,
            width: 200,
            height: 0,
          }}
        />
      </Stack>

      <Box sx={{ position: "absolute", right: "20%", top: "20%" }}>
        <Image src={ProfileImage} alt="" width={480} height={480} />
      </Box>
    </Box>
  );
};

export default Home;
