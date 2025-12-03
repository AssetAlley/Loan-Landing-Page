import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { SoftFaq } from '@/components/software/SoftFaq';
import { SoftWelcome } from '@/components/software/SoftWelcome';

export default function Shopfit() {
  return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
        <SoftWelcome />
        <Calculator />
        <SoftFaq />
        <AuthenticationForm />
      </MantineProvider>
    </>
  );
}
