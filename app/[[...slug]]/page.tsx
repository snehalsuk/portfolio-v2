import ClientAppWrapper from "../../components/ClientAppWrapper";

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['about'] },
    { slug: ['services'] },
    { slug: ['work'] },
    { slug: ['journey'] },
    { slug: ['contact'] },
  ];
}

export default function Home() {
  return <ClientAppWrapper />;
}
