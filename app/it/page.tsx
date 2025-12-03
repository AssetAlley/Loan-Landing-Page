import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Footer01 } from '@/components/footer/footer';
import { ITFaq } from '@/components/it/ItFaq';
import { ITWelcome } from '@/components/it/ItWelcome';
import { Hero02 } from '@/components/Requirements';

export default function Shopfit() {
  return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
        <ITWelcome />
        <Calculator />
        <ITFaq />
        <AuthenticationForm />
      </MantineProvider>
      <Footer01 />
    </>
  );
}
