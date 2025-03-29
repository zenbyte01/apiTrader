"use client";

import { Flex, ActionIcon, Menu, Divider } from "@mantine/core";
import {
  IconHome,
  IconChartBar,
  IconBell,
  IconSettings,
  IconDots,
} from "@tabler/icons-react";

export default function MobileNavbar() {
  return (
    <Flex
      p="md"
      justify="space-around"
      align="center"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderTop: "1px solid #ddd",
      }}
    >
      <ActionIcon size="lg" variant="subtle">
        <IconHome />
      </ActionIcon>
      <ActionIcon size="lg" variant="subtle">
        <IconChartBar />
      </ActionIcon>
      <ActionIcon size="lg" variant="subtle">
        <IconBell />
      </ActionIcon>
      <ActionIcon size="lg" variant="subtle">
        <IconSettings />
      </ActionIcon>

      <Menu width={200} shadow="md">
        <Menu.Target>
          <ActionIcon size="lg" variant="subtle">
            <IconDots />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Help</Menu.Item>
          <Divider />
          <Menu.Item>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
}
