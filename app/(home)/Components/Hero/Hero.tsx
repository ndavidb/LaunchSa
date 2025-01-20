import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';
import Link from 'next/link';

export function Hero() {
    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Bringing your business into an {' '}
                    <br/>
                    <Text component="span" inherit className={classes.highlight}>
                        online reality
                    </Text>
                </Title>
`
                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        <Text component='span' fw="bold">Launch Online SA</Text> is an initiative to help small businesses in South Australia get their first web application to leverage technology to get more clients or streamline their operations.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button  component={Link} href="#contact" className={classes.control} variant="primary" size="lg">
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