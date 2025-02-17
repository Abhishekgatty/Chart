import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BuildingFill, Check } from 'react-bootstrap-icons';
import { Section } from '../../layout/global';

const PricingSection = () => {
    // Hardcoded subscription plans
    const plans = [
        {
            id: 1,
            name: 'Free',
            price: '$0',
            features: [
                'Available on low demand',
                'Standard response speed',
                'Regular model updates'
            ]
        },
        {
            id: 2,
            name: 'Monthly',
            price: '$33 /mo',
            features: [
                'Always Available',
                'Fast response speed',
                'Early model updates'
            ]
        },
        {
            id: 3,
            name: 'Quarterly',
            price: '$90 /3mo',
            features: [
                'Everything from Monthly',
                'API Integration',
                '24/7 Support assistant'
            ]
        },
        {
            id: 4,
            name: 'Annual',
            price: '$300 /yr',
            features: [
                'Everything from Quarterly',
                'Priority support',
                'Custom integrations'
            ]
        }
    ];

    // State for subscription management
    const [currentPlan, setCurrentPlan] = useState('Free'); // Default to "Free"
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Simulated userId (replace this with actual user ID from authentication)
    const userId = 1; // Replace with dynamic user ID

    // Fetch current subscription status
    useEffect(() => {
        const fetchSubscription = async () => {
            try {
                const response = await axios.get(
                    `https://4b9d-106-51-211-140.ngrok-free.app/api/users/${userId}/subscriptions`
                );
                const subscription = response.data;
                setCurrentPlan(subscription.subscriptionType || 'Free');
            } catch (err) {
                console.error('Error fetching subscription:', err);
                setError('Failed to load subscription details.');
            }
        };
        fetchSubscription();
    }, [userId]);

    // Handle subscription upgrade/downgrade
    const handleSubscription = async (planName) => {
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const response = await axios.post(
                `https://4b9d-106-51-211-140.ngrok-free.app/api/users/${userId}/subscriptions`,
                { subscriptionType: planName },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            const subscription = response.data;
            setCurrentPlan(subscription.subscriptionType);
            setSuccessMessage(`Successfully subscribed to ${subscription.subscriptionType} plan.`);
        } catch (err) {
            console.error('Subscription error:', err);
            setError('Failed to update subscription. Please try again.');
        } finally {
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
                                                onClick={() => handleSubscription(plan.name)}
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

                {/* Error/Success Messages */}
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