import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data.json";

export default async function HomePage() {
  return (
    <>
    <DemoSlider data={dataSlider} />
    </>
  );
}
