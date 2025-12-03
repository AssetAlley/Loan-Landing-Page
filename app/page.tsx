'use client';

import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import { Logos03 } from '@/components/AnimatedLogos';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { Calculator } from '@/components/Calculator';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Faq01 } from '@/components/Faq';
import { Footer01 } from '@/components/footer/footer';
import { Hero02 } from '@/components/Requirements';
import { gtmPageView } from '@/lib/gtm';
import { Welcome } from '../components/Welcome/Welcome';

export default function Shopfit() {
  // useEffect(() => {
  //     gtmPageView({
  //         page: 'Websites',
  //         title: 'Websites',
  //         url: window.location.href,
  //     });
  // })

  return (
    <Container bg="black" p={0} m={0} size="100%">
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
        <Welcome />
        <Calculator />
        <Faq01 />
        <AuthenticationForm />
        <Footer01 />
      </MantineProvider>
    </Container>
  );
}
