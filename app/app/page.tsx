import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

export default function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
    </div>
  );
}
