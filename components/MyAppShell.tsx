import { ReactNode } from "react";
import { Container } from "@mantine/core";
import MobileNavbar from "@/components/navigation/MobileNavbar"; // Client-side menu
import DesktopNavbar from "@/components/navigation/DesktopNavbar";

export default function MyAppShell({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Desktop Navbar (Hidden on Mobile) */}
      <div className="max-xs:hidden max-width-720px">
        <Container max-width="720px" px="md" py="sm">
          <DesktopNavbar />
        </Container>
      </div>
      {/* Main Content */}
      <Container>{children}</Container>
      {/* Mobile Navbar (Hidden on Desktop) */}
      {/* <Container px="md" py="sm" hiddenFrom="xs"> */}
      <div className="xs:hidden">
        <MobileNavbar />
      </div>
      {/* </Container> */}
    </div>
  );
}
