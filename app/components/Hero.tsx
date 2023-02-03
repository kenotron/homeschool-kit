const Heading = (props: any) => {
  return (
    <div className="font-display mt-8 mb-4 max-w-[80%] text-[3rem] font-semibold leading-tight">
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

export const Hero = (props: any) => {
  return (
    <section
      className="h-[500] bg-cover"
      style={{
        backgroundImage: `url("/hero-bg.jpg")`,
      }}
    >
      <div className="flex-rows flex h-full w-full backdrop-brightness-50 ">
        <div className="container mx-auto self-center text-white">
          <Heading>{props.heading}</Heading>
          <HeroButton>{props.buttonText}</HeroButton>
        </div>
      </div>
    </section>
  );
};
