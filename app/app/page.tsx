import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

async function getData() {
  const res = await fetch("http://localhost:5333/api/landing-page");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = (await getData())?.data.attributes;

  console.log(data);

  return (
    <div>
      <NavBar />
      <Hero heading={data.hero_heading} buttonText={data.hero_button_text} />
      <Features />
    </div>
  );
}
