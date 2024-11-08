import SectionHeading from '@/components/shared/SectionHeading'
import React from 'react'
import { Container } from 'react-bootstrap'

const page = () => {
    const termsAndConditionsContent = [
        {
            title: "Introduction",
            description: "These Terms and Conditions govern your use of our website and services. By accessing or using Unilabs, you agree to comply with these terms.",
        },
        {
            title: "Use of Services",
            description: "By using our services, you agree to:",
            items: [
                {
                    heading: "Compliance with Laws",
                    content:
                        "You must comply with all applicable laws and regulations when using our services.",
                },
                {
                    heading: "Prohibited Conduct",
                    content:
                        "You agree not to engage in activities that violate our policies, including unlawful, harmful, or disruptive behavior.",
                },
                {
                    heading: "Intellectual Property",
                    content:
                        "All content, trademarks, and other intellectual property on our platform are owned by Unilabs or our licensors. You agree not to misuse or infringe upon these rights.",
                },
            ],
        },
        {
            title: "Account Obligations",
            description: "If you create an account with us, you agree to:",
            items: [
                {
                    heading: "Accuracy of Information",
                    content:
                        "Provide accurate and up-to-date information for your account registration.",
                },
                {
                    heading: "Confidentiality",
                    content:
                        "Maintain the confidentiality of your account information, including your password.",
                },
                {
                    heading: "Responsibility",
                    content:
                        "You are responsible for all activities under your account and must notify us of any unauthorized use.",
                },
            ],
        },
        {
            title: "Payments and Fees",
            description: "Certain services may require payment. By using paid services, you agree to:",
            items: [
                {
                    heading: "Payment Obligations",
                    content:
                        "Ensure timely payment of all applicable fees for services you use.",
                },
                {
                    heading: "Refund Policy",
                    content:
                        "All payments are subject to our refund policy, as outlined on our website.",
                },
            ],
        },
        {
            title: "Limitation of Liability",
            description: "To the fullest extent permitted by law, Unilabs shall not be liable for:",
            items: [
                {
                    content:
                        "Any indirect, incidental, or consequential damages arising from your use of our services.",
                },
                {
                    content:
                        "Any loss of data, profits, or other losses resulting from service interruptions or unauthorized access.",
                },
            ],
        },
        {
            title: "Termination",
            description: "We may terminate or suspend your access to our services if you violate these Terms and Conditions. Upon termination, you must cease all use of our platform.",
        },
        {
            title: "Changes to Terms",
            description:
                "We may update these Terms and Conditions periodically. Changes will be posted on this page with an updated effective date.",
        },
        {
            title: "Contact Us",
            description:
                "If you have any questions about these Terms and Conditions, please contact us at support@unilabs.com.",
        },
    ];

    return (
        <>
            <div className="py-5">
                <Container className="py-5">
                    <SectionHeading heading="TERMS & CONDITIONS" />

                    {termsAndConditionsContent.map((section, index) => (
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
