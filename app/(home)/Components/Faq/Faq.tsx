'use client';

import {Accordion, Container, Grid, Title, Image} from '@mantine/core';
import classes from './Faq.module.css';
// import Image from 'next/image';

const FaqList = [
    {
        question: "How can I apply to the initiative?",
        answer: "If you're a South Australian small business looking to establish your online presence, simply share your details through the contact form below. We'll reach out within 3 business days to discuss how we can help your business join the digital community."
    },
    {
        question: "Is the initiative completely free?",
        answer: "The web development service is provided at no cost as part of our commitment to the South Australian business community. However, to get your website online, you'll need to cover the basic costs of hosting and domain registration - these are essential services provided by third-party companies."
    },
    {
        question: "How much do hosting and domain costs?",
        answer: "A domain name (your website address) typically costs between $15-30 AUD per year, and basic hosting services range from $5-20 AUD per month. We'll help you understand these costs and find reliable, cost-effective options that suit your needs."
    },
    {
        question: "How do I buy a domain and a hosting service?",
        answer: "We'll provide guidance on selecting and purchasing these services. While the final decision and purchase are yours to make, we'll explain the process and recommend trusted providers that work well with a low budget. We don't have affiliations with any hosting or domain providers, so our recommendations are based on suitable and affordable options"
    },
    {
        question: "What happens after my web application is delivered?",
        answer: "As part of the initiative, we provide seven days of support after delivery to address any technical issues or bugs. This support period is specifically for fixing problems, not adding new features. After this period, you may need to engage other developers for maintenance or improvements."
    },
    {
        question: "What technologies do you use?",
        answer: "The initiative utilizes Next.js for web development, ensuring your web application has a solid technical foundation. This modern technology helps create reliable and efficient websites that serve your business needs. Depending of the complexity of your project, we may also use other technologies to enhance your website's functionality."
    },
    {
        question: "Do you store business information or data?",
        answer: "We don't store any business data or information. Your website's data is stored on your hosting service, and we don't have access to it. We respect your privacy and confidentiality, ensuring that your business information remains secure and private."
    },
    {
        question: "What about the legal aspects of my website?",
        answer: "When you accept to be part of the initiative you accept the legal terms of it, which explains that we completely give up any rights over your website to you once is delivered."
    }
];
export function Faq() {
    return (
        <div id="FAQ" className={classes.wrapper}>
            <Container size="xl">
                <Grid id="faq-grid" gutter={50} align="center">
                    <Grid.Col span={{base: 12, md: 6}} >
                        <Image src="/Images/faq-image.svg" alt="Frequently Asked Questions"/>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <Title order={2} ta="left" className={classes.title}>
                            Frequently Asked Questions
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                            {FaqList.map((faq, index) => (
                                <Accordion.Item className={classes.item} key={index} value={`item-${index}`}>
                                    <Accordion.Control>{faq.question}</Accordion.Control>
                                    <Accordion.Panel>{faq.answer}</Accordion.Panel>
                                </Accordion.Item>
                                )
                            )}
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}