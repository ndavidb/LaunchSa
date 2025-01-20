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
    Space, Modal
} from '@mantine/core';
import classes from './About.module.css';
import Image from 'next/image';


export function AboutSection({ className }: { className?: string }) {

    return (
        <div id="contact" className={`${classes.wrapper} ${className}`}>
            <Container size="lg" pt="xl">
                <Grid gutter={40}>
                    <Grid.Col span={{ base: 12, md: 6 }} className={classes.imageWrapper}>
                        <Image
                            src="/Images/about-image.png"
                            width={500}
                            height={500}
                            alt="Person using phone"
                            className={classes.image}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="md" pos="relative">
                            <Title order={1} className={classes.title}>
                                <Text span c="#fd1638" inherit>
                                    Contact
                                </Text>{' '}
                                Us & We Can
                                <br />
                                Work Together
                            </Title>

                            <Text c="dimmed" size="md" maw={480}>
                                Just fill out the form below and we will get back to you in the following 3 business days.
                            </Text>


                        </Stack>
                    </Grid.Col>


                </Grid>
            </Container>
        </div>
    );
}
