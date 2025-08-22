import { Logos03 } from '@/components/AnimatedLogos';
import { BrandFaq } from '@/components/branding/BrandFaq';
import { BrandWelcome } from '@/components/branding/BrandWelcome';
import { Calculator } from '@/components/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
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
