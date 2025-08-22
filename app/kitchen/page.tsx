import { Logos03 } from '@/components/AnimatedLogos';
import { KitchenWelcome } from '@/components/kitchen/KitchenWelcome';
import { KitchenFaq } from '@/components/kitchen/KitchenFaq';
import { Calculator } from '@/components/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
export default function Shopfit() {
    return (
    <>
    <Container bg="black" p={0} m={0} size="100%">
        <ColorSchemeScript forceColorScheme="dark"/>
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
