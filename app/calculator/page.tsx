import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { Calculator } from '@/components/ExpandedCalculator/Calculator'
export default function Shopfit() {
    return (
    <>
    <Container bg="black" p={0} m={0} size="100%">
        <ColorSchemeScript forceColorScheme="dark"/>
        <MantineProvider forceColorScheme="dark">
          <Calculator />
        </MantineProvider>
      </Container>
    </>
  );
}
