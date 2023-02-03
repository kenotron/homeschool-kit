const FeatureCTA = (props: any) => {
  return <div className="rounded bg-green-600 text-white"></div>;
};

const FeatureHeading = (props: any) => {
  const colors = [`bg-red-600`, `bg-red-800`, `bg-red-900`];
  return (
    <div className={`text-md py-4 px-4 text-white ${colors[props.index]}`}>
      {props.children}
    </div>
  );
};

const FeatureContent = (props: any) => {
  return (
    <div className="mr-4 mt-4 text-xs text-gray-600">{props.children}</div>
  );
};

const FeatureImage = (props: any) => {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1672845977153-a36851780cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTAzMzAzOQ&ixlib=rb-4.0.3&q=80&w=1080" />
    </div>
  );
};

const FeatureItem = (props: any) => {
  return <div className="h-full w-full bg-white">{props.children}</div>;
};

export const Features = () => {
  return (
    <section className="container isolate mx-auto mt-[-50] flex justify-between">
      <FeatureItem index={1}>
        <FeatureHeading>About Legacy HC</FeatureHeading>
        <FeatureImage></FeatureImage>
        <FeatureContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <a href="#">Statement of faith</a>
        </FeatureContent>
      </FeatureItem>
      <FeatureItem index={2}>
        <FeatureHeading>Student Life</FeatureHeading>
        <FeatureImage></FeatureImage>
        <FeatureContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </FeatureContent>
      </FeatureItem>
      <FeatureItem index={3}>
        <FeatureHeading>Courses</FeatureHeading>
        <FeatureImage></FeatureImage>
        <FeatureContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </FeatureContent>
      </FeatureItem>
    </section>
  );
};
