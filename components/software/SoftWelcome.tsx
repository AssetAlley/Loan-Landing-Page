import NextImage from 'next/image';
import { Flex, Image, Text, Title } from '@mantine/core';
import image from '../../public/AA_Dark_Logo.svg';
import { JumboTitle } from '../JumboTitle';
import classes from '../Welcome/Welcome.module.css';

export function SoftWelcome() {
  return (
    <>
      <Flex justify="center" align="center" direction="row" wrap="nowrap" pt="md">
        <NextImage
          src={image}
          alt="Logo"
          style={{ height: '100%', width: 'auto', maxWidth: '80vw' }}
        />
      </Flex>
      <JumboTitle c="#01E194" ta="center" fz="xs" maw={580} mx="auto" mt="xl">
        Finance your Software
      </JumboTitle>
    </>
  );
}
