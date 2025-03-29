import { Flex } from "@mantine/core";
import Image from "next/image";
import UserPane from "./UserPane";

const DesktopNavbar = () => {
  return (
    <div>
      <Flex justify="space-between" align="center">
        <Image src="/logo.png" alt="Logo" height={40} width={40} />
        <Flex gap="lg">
          <span>Home</span>
          <span>Markets</span>
          <span>Alerts</span>
          <span>Settings</span>
        </Flex>
        <UserPane />
      </Flex>
    </div>
  );
};

export default DesktopNavbar;
