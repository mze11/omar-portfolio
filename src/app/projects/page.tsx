"use client";

import { Container, Divider, Stack, Typography } from "@mui/material";
import Volvo from "../../../public/20927360-volvo-logotyp-varumarke-bil-symbol-namn-vit-design-svenska-bil-vektor-illustration-med-svart-bakgrund-gratis-vector.jpg";
import QD from "../../../public/307006141_510955841036118_7380821839073575013_n.jpg";
import BB from "../../../public/Blockbuster_logo.svg.png";
import MS from "../../../public/mysafety_ab_logo.jpeg";
import DH from "../../../public/dh.png";
import RIVO from "../../../public/Screenshot 2024-12-05 070533.png";

import Image from "next/image";

const Projects = () => {
  const projectsArray = [
    {
      title: "Blockbuster",
      image: BB,
      link: "https://mangrove-shawl-300.notion.site/Blockbuster-152ab900093b80b39dc5fbe75dc034b6?pvs=4",
    },
    {
      title: "MySafety",
      image: MS,
      link: "https://mangrove-shawl-300.notion.site/MySafety-152ab900093b80068f38c7d715449c4b?pvs=4",
    },
    {
      title: "Volvo",
      image: Volvo,
      link: "https://mangrove-shawl-300.notion.site/Volvo-152ab900093b806d8bfae6e7b9c1a03f?pvs=4",
    },
    {
      title: "Rivo",
      image: RIVO,
      link: "https://mangrove-shawl-300.notion.site/Rivo-152ab900093b80b19789e437fa7a6cfb?pvs=4",
    },
    {
      title: "Drivhuset",
      image: DH,
      link: "https://mangrove-shawl-300.notion.site/Drivhuset-152ab900093b808dbadbcc4ae2ed5595?pvs=4",
    },
    {
      title: "Quality Dental",
      image: QD,
      link: "https://mangrove-shawl-300.notion.site/Quality-Dental-152ab900093b8049a4fedef05e4f9c43?pvs=4",
    },
    {
      title: "Robotica AB",
      image: "",
      link: "http://mangrove-shawl-300.notion.site",
    },
  ];

  return (
    <Container sx={{ p: 20, pb: 20 }}>
      <Typography variant="h3" fontWeight={"bold"}>
        My Projects
      </Typography>
      <Typography mt={4} variant="body1">
        Welcome to my project portfolio, a showcase of the collaborative and
        individual projects I’ve led and contributed to during my time at Hyper
        Island and beyond.
        <br />
        Each project highlights my skills in strategic planning, business
        development, research, and innovation. Explore the links below to dive
        into the details of my work and see how I’ve tackled challenges, created
        value, and delivered impactful solutions.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "#0002" }} />

      <Stack
        my={2}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
      >
        {projectsArray.map((project) => (
          <Stack
            sx={{
              background: "#fefefe",
              flex: "0 1 32%",
              boxSizing: "border-box",
              p: 2,
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            key={project.title}
            onClick={() => window.open(project.link, "_blank")} // Opens link in a new tab
          >
            <Stack
              sx={{
                background: "#efefef",
                height: 250, // Set a fixed height for the container
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="intrinsic"
                  width={200}
                  height={200}
                  style={{
                    objectFit: "contain", // Ensures the image fits properly within the container
                  }}
                />
              ) : (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontStyle: "italic",
                    color: "#888",
                  }}
                >
                  {project.title}
                </Typography>
              )}
            </Stack>
            <Typography variant="h5" textAlign="center" mt={1}>
              {project.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default Projects;
