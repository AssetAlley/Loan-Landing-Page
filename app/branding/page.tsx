import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { BrandFaq } from '@/components/branding/BrandFaq';
import { BrandWelcome } from '@/components/branding/BrandWelcome';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';

export default function Shopfit() {
  return (
    <>
      <Container bg="black" p={0} m={0} size="100%">
        <ColorSchemeScript forceColorScheme="dark" />
        <MantineProvider forceColorScheme="dark">
          <BrandWelcome />
          <Calculator />
          <BrandFaq />
          <AuthenticationForm />
        </MantineProvider>
      </Container>
    </>
  );
}
