const FeatureCTA = (props: any) => {
  return <div className="rounded bg-green-600 text-white"></div>;
};

const FeatureHeading = (props: any) => {
  return (
    <div className="bg-red-700 py-4 px-4 text-lg text-white">
      {props.children}
    </div>
  );
};

const FeatureContent = (props: any) => {
  return <div className="p-4 text-sm">{props.children}</div>;
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
    <div className="container isolate mx-auto mt-[-50] flex justify-between gap-8">
      <FeatureItem>
        <FeatureHeading>About Legacy HC</FeatureHeading>
        <FeatureImage></FeatureImage>
        <FeatureContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <a href="#">Statement of faith</a>
        </FeatureContent>
      </FeatureItem>
      <FeatureItem>
        <FeatureHeading>Student Life</FeatureHeading>
        <FeatureImage></FeatureImage>
        <FeatureContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </FeatureContent>
      </FeatureItem>
      <FeatureItem>
        <FeatureHeading>Courses</FeatureHeading>
        <FeatureImage></FeatureImage>
        <FeatureContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </FeatureContent>
      </FeatureItem>
    </div>
  );
};
