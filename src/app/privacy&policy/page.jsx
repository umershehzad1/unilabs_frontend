import SectionHeading from '@/components/shared/SectionHeading'
import React from 'react'
import { Container } from 'react-bootstrap'

const page = () => {
    const privacyPolicyContent = [
        {
            title: "Information We Collect",
            description: "We collect various types of information when you use our services, including:",
            items: [
                {
                    heading: "Personal Information",
                    content:
                        "When you sign up or use our services, we may collect personal information, such as your name, email address, phone number, and payment information.",
                },
                {
                    heading: "Usage Information",
                    content:
                        "We collect data on how you use our website and interact with our services, including IP addresses, browser types, referring pages, and time spent on our website.",
                },
                {
                    heading: "Transaction Data",
                    content:
                        "We record information about transactions conducted through Unilabs, such as the amount, timestamp, and digital wallet addresses.",
                },
                {
                    heading: "Cookies and Tracking Technologies",
                    content:
                        "We use cookies and similar technologies to track your interaction with our site, provide functionality, and improve your user experience.",
                },
            ],
        },
        {
            title: "How We Use Your Information",
            description: "We use your information for various purposes, including:",
            items: [
                {
                    heading: "To Provide and Improve Our Services",
                    content:
                        "We use your information to create your account, process transactions, and enhance our offerings.",
                },
                {
                    heading: "Security and Fraud Prevention",
                    content:
                        "We may use your data to monitor and detect fraudulent activities and secure your transactions.",
                },
                {
                    heading: "Marketing and Communications",
                    content:
                        "With your consent, we may send you promotional materials, updates about Unilabs, or relevant offers from partners.",
                },
            ],
        },
        {
            title: "Information Sharing and Disclosure",
            description:
                "We do not share your personal information with third parties except:",
            items: [
                {
                    content:
                        "When required by law or to protect the rights, property, or safety of Unilabs or others.",
                },
                {
                    content:
                        "With service providers who perform services on our behalf, subject to confidentiality obligations.",
                },
            ],
        },
        {
            title: "Security Measures",
            description:
                "We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
            title: "Your Rights and Choices",
            description: "You have certain rights regarding your information, including:",
            items: [
                {
                    heading: "Access and Correction",
                    content:
                        "You may request access to or correction of your personal information.",
                },
                {
                    heading: "Opt-Out",
                    content:
                        "You may opt-out of receiving marketing communications from us by following the unsubscribe instructions in any message we send.",
                },
            ],
        },
        {
            title: "Changes to this Privacy Policy",
            description:
                "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
        },
        {
            title: "Contact Us",
            description:
                "If you have any questions or concerns about our Privacy Policy, please contact us at support@unilabs.com.",
        },
    ];

    return (
        <>
            <div className="py-5">
                <Container className="py-5">
                    <SectionHeading heading="PRIVACY & POLICY" />

                    {privacyPolicyContent.map((section, index) => (
                        <div key={index} className="py-3 text-white">
                            <h2 className="fs-1">{section.title}</h2>
                            <p className="fs-3">{section.description}</p>
                            {section.items && (
                                <ul>
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="fs-3">
                                            {item.heading && <strong>{item.heading}:</strong>} {item.content}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </Container>
            </div>
        </>
    );
};

export default page;
