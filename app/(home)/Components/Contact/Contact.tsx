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
import {hasLength, isEmail, useForm} from '@mantine/form';
import classes from './Contact.module.css';
import Image from 'next/image';
import {supabase} from "../../../../utils/supabase/supabase";
import {useDisclosure} from "@mantine/hooks";

interface ContactFormValues {
  name: string;
  email: string;
  businessName: string;
  message: string;
}

export function ContactSection({ className }: { className?: string }) {

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      businessName: '',
      message: '',
    },
    validate: {
      name: hasLength({min: 3, max: 40}, "Your name must be between 3 and 40 characters"),
      email: isEmail('Invalid email'),
      businessName: hasLength({min: 3, max: 40}, "Your business name must be at least 3 characters"),
    },
  });

  const handleSubmit = async (values: ContactFormValues) => {
    try {
      const { error } = await supabase
          .from('applicants')
          .insert([
            {user_name: values.name, user_email: values.email, business_name: values.businessName, message: values.message}
          ])
          .select();

      if (error){
        throw new Error(error.message);
      }

        open();
      form.reset();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="contact" className={`${classes.wrapper} ${className}`}>
      <Container size="lg" pt="xl">
        <Grid gutter={40}>
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


              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <Modal opened={opened} onClose={close} title="Form Submission" centered={true}>
                    Your applications has been submitted successfully. We will get back to you in the following 3 business days.
                  </Modal>
                    <TextInput
                        placeholder="Your Name"
                        withAsterisk
                        size="md"
                        {...form.getInputProps('name')}
                    />

                    <TextInput
                        placeholder="Your Email"
                        withAsterisk
                        size="md"
                        {...form.getInputProps('email')}
                    />

                    <TextInput
                        placeholder="Business Name"
                        withAsterisk
                        size="md"
                        {...form.getInputProps('businessName')}
                    />

                    <Textarea
                        placeholder="Your Message"
                        minRows={4}
                        size="md"
                        {...form.getInputProps('message')}
                    />

                  <Button
                      type="submit"
                      color="#fd1638"
                      size="md"
                      radius="md"
                      className={classes.control}
                      loading={form.submitting}
                  >
                    Submit Message
                  </Button>

                </Stack>
              </form>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }} className={classes.imageWrapper}>
            <Image
              src="/Images/contact-image.webp"
              width={500}
              height={500}
              alt="Person using phone"
              className={classes.image}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
