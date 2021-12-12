import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../modules/HomePage/components/Header";
import NavBar from "../modules/HomePage/components/NavBar";
import DoctorPicture from "../modules/HomePage/components/DoctorPicture";
import AppointmentSection from "../modules/HomePage/components/AppointmentSection";
import FindDoctor from "../modules/HomePage/components/FindDoctor";

export default function Home() {
  return (
    <Box>
      <Head>
        <title> Cuet Medical</title>
      </Head>
      <Header />
      <NavBar />
      <DoctorPicture />
      <AppointmentSection />
      <FindDoctor />
    </Box>
  );
}
