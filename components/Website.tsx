import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Faq01 } from '@/components/Faq';
import { Hero02 } from '@/components/Requirements';
import { Welcome } from './Welcome/Welcome';

export const Website = () => {
  return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
        <Welcome />
        <Calculator />
        <Faq01 />
        <Hero02 />
        <AuthenticationForm />
      </MantineProvider>
    </>
  );
};
