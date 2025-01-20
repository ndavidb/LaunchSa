"use client";
import { Container, Text, Title, List, ThemeIcon, Box } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export default function LegalPage() {
        return (
            <Container my="xl">
                    <Title order={1} ta="center" mb="sm">
                            LEGAL TERMS AND CONDITIONS - LAUNCH ONLINE SA INITIATIVE
                    </Title>
                    <Text ta="center" c="dimmed" mb="xl">
                            Last Updated: January 20, 2025
                    </Text>

                    {/* 1. DEFINITIONS */}
                    <Title order={2} mb="sm">
                            1. DEFINITIONS
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>
                                    <Text>
                                            <Text span fw={700}>
                                                &quot;Initiative&quot;
                                            </Text>{' '}
                                            refers to Launch Online SA, a non-commercial web development
                                            initiative.
                                    </Text>
                            </List.Item>
                            <List.Item>
                                    <Text>
                                            <Text span fw={700}>
                                                &quot;Service Provider&quot;
                                            </Text>{' '}
                                            refers to David Bello, the founder and developer of the Initiative.
                                    </Text>
                            </List.Item>
                            <List.Item>
                                    <Text>
                                            <Text span fw={700}>
                                                &quot;Business Owner&quot;
                                            </Text>{' '}
                                            refers to the South Australian small business receiving services.
                                    </Text>
                            </List.Item>
                            <List.Item>
                                    <Text>
                                            <Text span fw={700}>
                                                &quot;Deliverables&quot;
                                            </Text>{' '}
                                            refers to the web application and associated source code.
                                    </Text>
                            </List.Item>
                            <List.Item>
                                    <Text>
                                            <Text span fw={700}>
                                                &quot;Support Period&quot;
                                            </Text>{' '}
                                            refers to the one-month period following project delivery.
                                    </Text>
                            </List.Item>
                            <List.Item>
                                    <Text>
                                            <Text span fw={700}>
                                                &quot;Third-Party Services&quot;
                                            </Text>{' '}
                                            refers to hosting, domain registration, and any external services
                                            required.
                                    </Text>
                            </List.Item>
                    </List>

                    {/* 2. ELIGIBILITY AND SCOPE */}
                    <Title order={2} my="sm">
                            2. ELIGIBILITY AND SCOPE
                    </Title>
                    <Title order={3} mb="xs">
                            2.1. Business Eligibility
                    </Title>
                    <List mb="sm" withPadding>
                            <List.Item>
                                    The Initiative is exclusively available to small businesses
                                    registered in South Australia.
                            </List.Item>
                            <List.Item>
                                    The Service Provider reserves the right to request verification of
                                    business registration.
                            </List.Item>
                            <List.Item>
                                    The Initiative may decline participation without providing
                                    justification.
                            </List.Item>
                    </List>

                    <Title order={3} mb="xs">
                            2.2. Project Scope
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>
                                    Services are limited to web application development using Next.js.
                            </List.Item>
                            <List.Item>
                                    The scope shall be clearly defined in writing before project
                                    commencement.
                            </List.Item>
                            <List.Item>
                                    Any modifications to scope must be agreed upon in writing.
                            </List.Item>
                            <List.Item>
                                    The Service Provider reserves the right to limit project complexity.
                            </List.Item>
                    </List>

                    {/* 3. SERVICE DELIVERY AND ACCEPTANCE */}
                    <Title order={2} my="sm">
                            3. SERVICE DELIVERY AND ACCEPTANCE
                    </Title>
                    <Title order={3} mb="xs">
                            3.1. Development Process
                    </Title>
                    <List mb="sm" withPadding>
                            <List.Item>
                                    The Business Owner must provide all required content and materials.
                            </List.Item>
                            <List.Item>
                                    Development timeline estimates are non-binding.
                            </List.Item>
                            <List.Item>
                                    The Service Provider maintains full discretion over technical
                                    decisions.
                            </List.Item>
                    </List>

                    <Title order={3} mb="xs">
                            3.2. Project Delivery
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>
                                    Delivery occurs when the web application is deployed to the Business
                                    Owner&apos;s hosting service.
                            </List.Item>
                            <List.Item>
                                    The Business Owner has 7 days to report initial issues.
                            </List.Item>
                            <List.Item>
                                    Acceptance is assumed if no issues are reported within 7 days.
                            </List.Item>
                    </List>

                    {/* 4. INTELLECTUAL PROPERTY AND OWNERSHIP */}
                    <Title order={2} my="sm">
                            4. INTELLECTUAL PROPERTY AND OWNERSHIP
                    </Title>
                    <Title order={3} mb="xs">
                            4.1. Pre-Existing Materials
                    </Title>
                    <List mb="sm" withPadding>
                            <List.Item>
                                    Each party retains rights to their pre-existing intellectual property.
                            </List.Item>
                            <List.Item>
                                    Open-source components remain subject to their respective licenses.
                            </List.Item>
                    </List>

                    <Title order={3} mb="xs">
                            4.2. Ownership Transfer
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>
                                    Upon project acceptance, all rights transfer to the Business Owner.
                            </List.Item>
                            <List.Item>
                                    Transfer includes source code and associated documentation.
                            </List.Item>
                            <List.Item>
                                    The Service Provider retains no rights or access to the delivered
                                    application.
                            </List.Item>
                    </List>

                    {/* 5. LIMITATIONS OF LIABILITY AND WARRANTIES */}
                    <Title order={2} my="sm">
                            5. LIMITATIONS OF LIABILITY AND WARRANTIES
                    </Title>
                    <Title order={3} mb="xs">
                            5.1. Service Warranty Disclaimer
                    </Title>
                    <List mb="sm" withPadding>
                            <List.Item>
                                    Services are provided &quot;AS IS&quot; without any warranty.
                            </List.Item>
                            <List.Item>
                                    No guarantee of uninterrupted or error-free operation.
                            </List.Item>
                            <List.Item>
                                    No guarantee of business success or outcomes.
                            </List.Item>
                            <List.Item>
                                    No liability for consequential damages or lost profits.
                            </List.Item>
                    </List>

                    <Title order={3} mb="xs">
                            5.2. Specific Exclusions
                    </Title>
                    <Text mb="sm">The Service Provider is not liable for:</Text>
                    <List mb="md" withPadding>
                            <List.Item>Server downtime or hosting issues</List.Item>
                            <List.Item>Domain registration problems</List.Item>
                            <List.Item>Third-party service interruptions</List.Item>
                            <List.Item>Data loss or security breaches</List.Item>
                            <List.Item>Content accuracy or legality</List.Item>
                            <List.Item>Business performance</List.Item>
                            <List.Item>Compliance with industry regulations</List.Item>
                            <List.Item>Search engine rankings</List.Item>
                            <List.Item>Browser compatibility issues</List.Item>
                            <List.Item>Mobile device compatibility</List.Item>
                            <List.Item>User experience outcomes</List.Item>
                            <List.Item>Integration with third-party services</List.Item>
                            <List.Item>Future technology changes affecting functionality</List.Item>
                    </List>

                    {/* 6. SUPPORT AND MAINTENANCE */}
                    <Title order={2} my="sm">
                            6. SUPPORT AND MAINTENANCE
                    </Title>
                    <Title order={3} mb="xs">
                            6.1. Support Period Limitations
                    </Title>
                    <List mb="sm" withPadding>
                            <List.Item>Support limited to 7 calendar days post-delivery</List.Item>
                            <List.Item>
                                    Support covers only technical bugs present at delivery
                            </List.Item>
                            <List.Item>
                                    Support excludes:
                                    <List withPadding>
                                            <List.Item>New feature requests</List.Item>
                                            <List.Item>Content updates</List.Item>
                                            <List.Item>Design changes</List.Item>
                                            <List.Item>Server configuration</List.Item>
                                            <List.Item>Third-party service issues</List.Item>
                                            <List.Item>Training or documentation</List.Item>
                                            <List.Item>Performance optimization</List.Item>
                                            <List.Item>Security updates</List.Item>
                                            <List.Item>Browser updates impact</List.Item>
                                    </List>
                            </List.Item>
                    </List>

                    <Title order={3} mb="xs">
                            6.2. Response Time
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>
                                    No guaranteed response time for support requests
                            </List.Item>
                            <List.Item>Support provided on a best-effort basis</List.Item>
                            <List.Item>Support limited to email communication</List.Item>
                    </List>

                    {/* 7. BUSINESS OWNER RESPONSIBILITIES */}
                    <Title order={2} my="sm">
                            7. BUSINESS OWNER RESPONSIBILITIES
                    </Title>
                    <Title order={3} mb="xs">
                            7.1. Technical Responsibilities
                    </Title>
                    <List mb="sm" withPadding>
                            <List.Item>Securing and maintaining hosting services</List.Item>
                            <List.Item>Domain registration and renewal</List.Item>
                            <List.Item>SSL certificate management</List.Item>
                            <List.Item>Regular data backups</List.Item>
                            <List.Item>Security monitoring</List.Item>
                            <List.Item>Software updates post-support period</List.Item>
                    </List>

                    <Title order={3} mb="xs">
                            7.2. Content Responsibilities
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>Content accuracy and legality</List.Item>
                            <List.Item>Copyright compliance</List.Item>
                            <List.Item>Privacy policy compliance</List.Item>
                            <List.Item>Terms of service compliance</List.Item>
                            <List.Item>Industry-specific regulatory compliance</List.Item>
                    </List>

                    {/* 8. TERMINATION */}
                    <Title order={2} my="sm">
                            8. TERMINATION
                    </Title>
                    <Title order={3} mb="xs">
                            8.1. Termination Rights
                    </Title>
                    <List mb="sm" withPadding >
                            <List.Item>
                                    The Service Provider may terminate at any time if:
                                    <List withPadding >
                                            <List.Item>Business Owner provides false information</List.Item>
                                            <List.Item>
                                                    Project scope becomes technically unfeasible
                                            </List.Item>
                                            <List.Item>
                                                    Business Owner fails to provide necessary materials
                                            </List.Item>
                                            <List.Item>Business Owner breaches these terms</List.Item>
                                            <List.Item>Communication is lost for over 7 days</List.Item>
                                    </List>
                            </List.Item>
                            <List.Item>
                                    No compensation or delivery obligations upon termination
                            </List.Item>
                    </List>

                    {/* 9. INDEMNIFICATION */}
                    <Title order={2} my="sm">
                            9. INDEMNIFICATION
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>
                                    <Text mb="sm">
                                            The Business Owner shall indemnify the Service Provider against:
                                    </Text>
                                    <List withPadding>
                                            <List.Item>Third-party claims</List.Item>
                                            <List.Item>Regulatory violations</List.Item>
                                            <List.Item>Content-related disputes</List.Item>
                                            <List.Item>Data privacy violations</List.Item>
                                            <List.Item>Intellectual property claims</List.Item>
                                            <List.Item>Business losses</List.Item>
                                            <List.Item>Legal defense costs</List.Item>
                                    </List>
                            </List.Item>
                    </List>

                    {/* 10. FORCE MAJEURE */}
                    <Title order={2} my="sm">
                            10. FORCE MAJEURE
                    </Title>
                    <List mb="md">
                            <List.Item>
                                    <Text mb="sm">
                                            No liability for delays or failures due to:
                                    </Text>
                                    <List>
                                            <List.Item>Natural disasters</List.Item>
                                            <List.Item>Internet infrastructure failures</List.Item>
                                            <List.Item>Cyber attacks</List.Item>
                                            <List.Item>Government actions</List.Item>
                                            <List.Item>Personal emergency or illness</List.Item>
                                            <List.Item>Other unforeseen circumstances</List.Item>
                                    </List>
                            </List.Item>
                    </List>

                    {/* 11. SEVERABILITY */}
                    <Title order={2} my="sm">
                            11. SEVERABILITY
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>
                                    If any provision is found invalid, remaining terms remain in effect
                            </List.Item>
                    </List>

                    {/* 12. ENTIRE AGREEMENT */}
                    <Title order={2} my="sm">
                            12. ENTIRE AGREEMENT
                    </Title>
                    <List mb="md" withPadding>
                            <List.Item>These terms constitute the entire agreement</List.Item>
                            <List.Item>No oral modifications are valid</List.Item>
                            <List.Item>
                                    Written modifications must be signed by both parties
                            </List.Item>
                    </List>

                    {/* 13. ACKNOWLEDGMENT AND ACCEPTANCE */}
                    <Title order={2} my="sm">
                            13. ACKNOWLEDGMENT AND ACCEPTANCE
                    </Title>
                    <Text mb="sm">
                            By participating in the Initiative, the Business Owner acknowledges:
                    </Text>
                    <List mb="md" withPadding>
                            <List.Item>Having read and understood these terms</List.Item>
                            <List.Item>
                                    Accepting all limitations and responsibilities
                            </List.Item>
                            <List.Item>
                                    Having the authority to bind their business
                            </List.Item>
                            <List.Item>
                                    Understanding the non-commercial nature of the Initiative
                            </List.Item>
                            <List.Item>
                                    Accepting all risks associated with project implementation
                            </List.Item>
                    </List>

                    <Text>Contact Information:</Text>
                    <Text fw={700}>Launch Online SA</Text>
                    <Text fw={700}>David Bello</Text>
                    <Text>Email: david.bello2996@gmail.com</Text>
                    <Text mt="md">Last Updated: January 20, 2025</Text>
            </Container>
        );
}