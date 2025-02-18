import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';
import { Section } from '../../layout/global';

const PricingSection = () => {
    const plans = [
        {
            id: 1,
            name: 'Free',
            price: '₹0',
            priceAmount: 0,
            features: [
                'Available on low demand',
                'Standard response speed',
                'Regular model updates'
            ]
        },
        {
            id: 2,
            name: 'Monthly',
            price: '₹330 /mo',
            priceAmount: 33000, // Amount in paise
            features: [
                'Always Available',
                'Fast response speed',
                'Early model updates'
            ]
        },
        {
            id: 3,
            name: 'Quarterly',
            price: '₹900 /3mo',
            priceAmount: 90000, // Amount in paise
            features: [
                'Everything from Monthly',
                'API Integration',
                '24/7 Support assistant'
            ]
        },
        {
            id: 4,
            name: 'Annual',
            price: '₹3000 /yr',
            priceAmount: 300000, // Amount in paise
            features: [
                'Everything from Quarterly',
                'Priority support',
                'Custom integrations'
            ]
        }
    ];

    const [currentPlan, setCurrentPlan] = useState('Free');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Load Razorpay SDK
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubscription = async (plan) => {
        if (plan.name === 'Free') {
            setCurrentPlan('Free');
            setSuccessMessage('Successfully subscribed to Free plan.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const options = {
                key: 'rzp_test_eK57VjQhXHjIGR', // Your Razorpay Key ID
                amount: plan.priceAmount,
                currency: 'INR',
                name: 'Optimus Ai',
                description: `${plan.name} Subscription`,
                handler: function (response) {
                    // Handle successful payment
                    setCurrentPlan(plan.name);
                    setSuccessMessage(`Successfully subscribed to ${plan.name} plan. Payment ID: ${response.razorpay_payment_id}`);
                    setLoading(false);
                },
                prefill: {
                    name: 'User Name',
                    email: 'user@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#528FF0'
                },
                modal: {
                    ondismiss: function() {
                        setLoading(false);
                    }
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            console.error('Subscription error:', err);
            setError('Failed to initiate payment. Please try again.');
            setLoading(false);
        }
    };

    return (
        <>
            <Section.Head center className="pb-0">
                <h2 className="h1">Try for free, no credit card</h2>
                <p>Billing: Save 17% with annual.</p>
            </Section.Head>
            <Section.Content>
                <Row className="g-4 justify-content-center">
                    {plans.map((plan) => (
                        <Col key={plan.id} xl="3" lg="4" sm="6">
                            <Card className="h-100 border-0">
                                <Card.Body className="p-4">
                                    <div className={`fs-7 mt-n2 fw-medium ${
                                        plan.name === 'Monthly' ? 'text-success' : 'text-muted text-opacity-50'
                                    }`}>
                                        {plan.name}
                                    </div>
                                    <div className="h1 text-dark">{plan.price}</div>
                                    <ul className="list-check fs-6 d-flex flex-column gap gap-2">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="d-flex gap gap-2">
                                                <span className="text-success">
                                                    <Check />
                                                </span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4">
                                        {currentPlan === plan.name ? (
                                            <Button variant="primary" disabled>
                                                Current Plan
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="outline-primary"
                                                onClick={() => handleSubscription(plan)}
                                                disabled={loading}
                                            >
                                                {loading ? 'Processing...' : `Subscribe to ${plan.name}`}
                                            </Button>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {error && (
                    <div className="text-danger text-center mt-3">{error}</div>
                )}
                {successMessage && (
                    <div className="text-success text-center mt-3">{successMessage}</div>
                )}
            </Section.Content>
        </>
    );
};

export default PricingSection;