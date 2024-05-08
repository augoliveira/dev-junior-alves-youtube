import dynamic from 'next/dynamic';

import dataSlider from "./_data/slider-data.json";

const DemoSlider = dynamic(() => import('./_components/DemoSlider'), {
  loading: () => <p>Loading...</p>,
})

export default async function HomePage() {
  return (
    <>
    <DemoSlider data={dataSlider} />
    </>
  );
}
