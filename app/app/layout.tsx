import "../styles/globals.css";

export default function RootLayout(props: { children: any }) {
  const { children } = props;
  return <div>{children}</div>;
}
