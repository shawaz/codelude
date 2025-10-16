
import GlobeComp from "@/components/globe";
import Services from "@/components/services";
import Technologies from "@/components/technologies";
import Industries from "@/components/industries";
import Newsletter from "@/components/Newsletter";
import WorkSection from "@/components/work";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <GlobeComp /> 
      <WorkSection />
      <Services />  
      <Technologies />
      <Industries />
      <Testimonials />
      <Newsletter />
    </>
  );
}
