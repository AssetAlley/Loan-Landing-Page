import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { MatFaq } from '@/components/materials/MatFaq';
import { MatWelcome } from '@/components/materials/MatWelcome';
import { Hero02 } from '@/components/Requirements';

export default function Shopfit() {
  return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
        <MatWelcome />
        <Calculator />
        <MatFaq />
        <AuthenticationForm />
      </MantineProvider>
    </>
  );
}
