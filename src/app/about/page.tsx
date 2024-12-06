"use client";

import { Container, Divider, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ p: 20, pb: 20 }}>
      <Typography variant="h3" fontWeight={"bold"}>
        About me
      </Typography>
      <Typography mt={4} variant="body1">
        Welcome! I’m Omar Zaza, a passionate and results-driven business
        developer with a knack for bridging creativity and strategy. My journey
        has been shaped by diverse experiences, from spearheading innovative
        projects at Hyper Island to leading operations in dynamic industries.
        <br />
        <br />
        With a strong foundation in technology and management, I thrive on
        tackling challenges, analyzing data, and designing solutions that
        deliver real impact. Whether it’s creating a platform for sustainable
        furniture trading, enhancing digital solutions for global brands like
        Volvo, or mentoring entrepreneurs at Drivhuset, I bring a mix of
        strategic thinking, creativity, and execution to every endeavor.
        <br />
        <br />
        What truly drives me is the power of transformation—whether it’s
        redefining a business model, unlocking team potential, or helping
        clients embrace sustainability. Collaboration, adaptability, and a
        relentless curiosity fuel my approach, ensuring that every project I
        undertake is meaningful and impactful.
        <br />
        <br />
        When I’m not immersed in work, you’ll find me exploring new
        technologies, diving into trends analysis, or sketching out fresh ideas
        for the next challenge. Let’s connect and build something remarkable
        together.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "#0002" }} />

      <Stack my={2} flexDirection={"row"} gap={4}>
        <Stack flexDirection={"row"} gap={4}>
          <Typography variant="caption" fontWeight="bolder">
            Phone:
          </Typography>
          <Typography variant="caption">073 693 693 1</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          gap={4}
          borderLeft={"1px solid #ccc"}
          pl={4}
        >
          <Typography variant="caption" fontWeight="bolder">
            Email:
          </Typography>
          <Typography variant="caption">Omar.zaza@hyperisland.se</Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
