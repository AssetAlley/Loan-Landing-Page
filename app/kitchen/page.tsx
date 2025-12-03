import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { KitchenFaq } from '@/components/kitchen/KitchenFaq';
import { KitchenWelcome } from '@/components/kitchen/KitchenWelcome';
import { Hero02 } from '@/components/Requirements';

export default function Shopfit() {
  return (
    <>
      <Container bg="black" p={0} m={0} size="100%">
        <ColorSchemeScript forceColorScheme="dark" />
        <MantineProvider forceColorScheme="dark">
          <KitchenWelcome />
          <Calculator />
          <KitchenFaq />
          <AuthenticationForm />
        </MantineProvider>
      </Container>
    </>
  );
}
