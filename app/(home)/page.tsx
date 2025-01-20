
import {Container} from "@mantine/core";
import {Hero} from "./Components/Hero/Hero";
import {Header} from "../../components/Header/Header";
import {Faq} from "./Components/Faq/Faq";
import { ContactSection } from "./Components/Contact/Contact";
import {AboutSection} from "./Components/About/About";

export default function HomePage() {
  return <>
    
      <Hero />
      <AboutSection />
      <Faq />
      <ContactSection/> 
      
  </>;
}
