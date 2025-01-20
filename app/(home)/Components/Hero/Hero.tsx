import cx from 'clsx';
import { Button, Container, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';
import Link from 'next/link';

export function Hero() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Empowering South Australian Small Businesses{' '}
                    <br />
                    <Text component="span" inherit className={classes.highlight}>
                        Through Digital Innovation
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        <Text component='span' fw="bold">Launch Online SA</Text> is a community initiative dedicated to helping South Australian small businesses establish their digital presence. Professional web development services at no cost, supporting local businesses.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button component={Link} href="#contact" className={classes.control} variant="primary" size="lg">
                        Apply to the initiative
                    </Button>
                    <Button component={Link} href="#FAQ" className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Learn more about the initiative
                    </Button>
                </div>
            </div>
        </div>
    );
}