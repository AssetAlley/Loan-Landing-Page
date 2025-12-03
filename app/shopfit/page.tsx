import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { ShopFaq01 } from '@/components/ShopFaq';
import { ShopWelcome } from '@/components/Welcome/ShopWelcome';

export default function Shopfit() {
  return (
    <>
      <Container bg="black" p={0} m={0} size="100%">
        <ColorSchemeScript forceColorScheme="dark" />
        <MantineProvider forceColorScheme="dark">
          <ShopWelcome />
          <Calculator />
          <ShopFaq01 />
          <AuthenticationForm />
        </MantineProvider>
      </Container>
    </>
  );
}
