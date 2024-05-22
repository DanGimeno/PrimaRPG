import { fonts } from "./fonts";
import "./globals.css";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import SceneRenderer from "./scenes/SceneRenderer";

export const metadata = {
  title: "Prima RPG",
  description: "Aventura RPG en un mundo de fantasía urbana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Box
            width="95vw"
            height="95vh"
            margin="2.5vh auto"
            border="2px solid black"
            bg="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SceneRenderer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
