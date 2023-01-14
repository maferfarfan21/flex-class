import { Hero } from "../components/Hero";
import { Teambehind } from "../components/Team-behind";
import { Form } from "../components/Form";
import { Teambehind2 } from "../components/Team-behind2";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
  const Landingpage = () => {
    return (
      <div className="landing">
        <Hero />
        <Teambehind />
        <Form />
        <Teambehind2 />
        <Card />
        <Footer />
      </div>
    );
  };
  
  export default Landingpage;
  