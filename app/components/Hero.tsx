const Heading = (props: any) => {
  return (
    <div className="font-display mb-4 text-[4rem] leading-tight">
      {props.children}
    </div>
  );
};

const HeroButton = (props: any) => {
  return (
    <div className="inline-block rounded bg-green-700 px-4 py-2">
      {props.children}
    </div>
  );
};

export const Hero = () => {
  return (
    <div
      className="h-[550] bg-cover"
      style={{
        backgroundImage: `url("/hero-bg.jpg")`,
      }}
    >
      <div className="flex-rows flex h-full w-full backdrop-brightness-50 ">
        <div className="container mx-auto self-center text-white">
          <Heading>
            Teaching from a Biblical
            <br /> Christian Worldview
          </Heading>
          <HeroButton>Get Started</HeroButton>
        </div>
      </div>
    </div>
  );
};
