"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
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

      <Box sx={{ position: "absolute", right: "15%", top: "10%" }}>
        <Image src={ProfileImage} alt="" width={580} height={580} />

        <Stack position={"absolute"} top={"15%"} right={"2%"}>
          <Typography variant="caption" fontWeight="bolder">
            Phone
          </Typography>
          <Typography variant="caption">073 693 693 1</Typography>

          <Divider sx={{ my: 1, borderColor: "#0002" }} />

          <Typography variant="caption" fontWeight="bolder">
            Email
          </Typography>
          <Typography variant="caption">Omar.zaza@hyperisland.se</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
