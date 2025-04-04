import { Anchor, Text, Title } from "@mantine/core";

const Home = () => {
  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>
      <h1 className="h1-bold font-space-grotesk">Next.js + Serwist(Inter)</h1>;
      <Title ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Next.js integration
        follow{" "}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>
    </>
  );
};

export default Home;
