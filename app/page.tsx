"use client";

import { Logos03 } from '@/components/AnimatedLogos';
import { Welcome } from '../components/Welcome/Welcome';
import { Faq01 } from '@/components/Faq';
import { Calculator } from '@/components/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { gtmPageView } from '@/lib/gtm';
import { Footer01 } from '@/components/footer/footer';



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
