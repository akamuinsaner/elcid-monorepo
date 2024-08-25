import { Button } from '@elcid-monorepo/widgets';

const HeroSection = () => {
  return (
    <section className="px-3 tablet:px-4 desktop:px-24 py-12 tablet:py-16 desktop:py-24 flex flex-col gap-12 tablet:gap-8 desktop:flex-row desktop:items-center">
      <div>
        <h1 className="text-primary text-4xl tablet:text-5xl desktop:text-6xl font-semibold mb-4 tablet:mb-6">
          Summer styles are finally here
        </h1>
        <p className="text-secondary text-lg tablet:text-xl mb-8 tablet:mb-16">
          This year, our new summer collection will be your haven from the
          world's harsh elements.
        </p>
        <Button className="w-[152px] py-3 text-base tablet:py-4 tablet:text-lg tablet:w-[213px] desktop:w-[175px]">
          Shop now
        </Button>
      </div>
      <div className="w-full desktop:w-[696px] shrink-0 tablet:max-w-[704px]">
        <img
          src="/hero.webp"
          alt="hero"
          className="w-full h-full object-center object-fill"
        />
      </div>
    </section>
  );
};

export default HeroSection;
