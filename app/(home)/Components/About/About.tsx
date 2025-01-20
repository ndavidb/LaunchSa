'use client';

import {
    Container,
    Grid,
    Text,
    TextInput,
    Textarea,
    Button,
    Stack,
    Title,
    Box,
    LoadingOverlay,
    Space, Modal, Mark
} from '@mantine/core';
import classes from './About.module.css';
import Image from 'next/image';


export function AboutSection({className}: { className?: string }) {

    return (
        <div id="about" className={`${classes.wrapper} ${className}`}>
            <Container size="lg" pt="xl">
                <Grid gutter={60}>
                    <Grid.Col span={{base: 12, md: 6}} className={classes.imageWrapper}>
                        <Image
                            src="/Images/about-image.webp"
                            width={500}
                            height={500}
                            alt="Person using phone"
                            className={classes.image}
                        />
                    </Grid.Col>

                    <Grid.Col span={{base: 12, md: 6}}>
                        <Stack gap="md" pos="relative">
                            <Title order={1} className={classes.title}>
                                <Text span c="#fd1638" inherit>
                                    About
                                </Text>{' '}
                                our initiative </Title>

                            <Text  size="md" maw={480}>
                                Launch Online SA is a community initiative founded by David Bello to support South
                                Australian small businesses in their digital journey. Born from the belief that every
                                local business deserves a chance to thrive in the digital age, this initiative provides
                                free web development services to help our community grow together.
                                <Space h="md"/>

                                As a software engineer, I&apos;ve seen how digital presence can transform
                                small businesses, but I also understand that the initial cost of web development can be
                                a barrier. That&apos;s why Launch Online SA offers free web application development to help
                                our local businesses take their first steps online.
                                <Space h="md"/>
                                This initiative focuses on creating simple, effective web solutions using modern
                                technology. <Text fw={700} component="span" > While participants need to cover their own hosting and domain costs, the
                                development service is provided at no charge as part of our commitment to strengthening
                                South Australia&apos;s small business community.</Text>
                            </Text>


                        </Stack>
                    </Grid.Col>


                </Grid>
            </Container>
        </div>
    );
}
