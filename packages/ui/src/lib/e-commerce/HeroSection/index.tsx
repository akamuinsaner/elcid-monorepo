import { Button } from '@elcid-monorepo/widgets';
import HeroImage from './hero.webp';

const HeroSection = () => {
  return (
    <section className="px-3 tablet:px-4 desktop:px-24 py-12 tablet:py-16 desktop:py-24 flex flex-col gap-12 tablet:gap-8">
      <div>
        <h1 className="text-primary text-4xl font-semibold mb-4">
          Summer styles are finally here
        </h1>
        <p className="text-secondary text-lg mb-8">
          This year, our new summer collection will be your haven from the
          world's harsh elements.
        </p>
        <Button>Shop now</Button>
      </div>
      <div className="">
        <img src="/hero.webp" alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
