import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';
import { Section } from '../../layout/global';
import { getSubscriptionDetails, updateSubscription } from '../../api/subscriptions';
import { useUserData } from '../../store/user'; // Import useUserData

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
            ],
            durationDays: 0
        },
        {
            id: 2,
            name: 'Monthly',
            price: '₹330 /mo',
            priceAmount: 33000,
            features: [
                'Always Available',
                'Fast response speed',
                'Early model updates'
            ],
            durationDays: 30
        },
        {
            id: 3,
            name: 'Quarterly',
            price: '₹900 /3mo',
            priceAmount: 90000,
            features: [
                'Everything from Monthly',
                'API Integration',
                '24/7 Support assistant'
            ],
            durationDays: 90
        },
        {
            id: 4,
            name: 'Annual',
            price: '₹3000 /yr',
            priceAmount: 300000,
            features: [
                'Everything from Quarterly',
                'Priority support',
                'Custom integrations'
            ],
            durationDays: 365
        }
    ];

    const sessionId = localStorage.getItem('sessionId');
    const { userData, loading: userLoading, error: userError } = useUserData(sessionId); // Fetch user data
    const [currentPlan, setCurrentPlan] = useState('Free');
    const [currentSubscriptionId, setCurrentSubscriptionId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        fetchSubscription();

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const fetchSubscription = async () => {
        try {
            if (!sessionId) {
                console.warn('No session ID found');
                return;
            }

            const response = await getSubscriptionDetails(sessionId);
            console.log('Subscription response:', response);

            if (Array.isArray(response) && response.length > 0) {
                const activeSubscription = response.find(sub => sub.status === 'Active');
                if (activeSubscription && activeSubscription.subscriptionType) {
                    setCurrentPlan(activeSubscription.subscriptionType);
                    setCurrentSubscriptionId(activeSubscription.id); // Set subscription ID
                } else {
                    setCurrentPlan('Free');
                    setCurrentSubscriptionId(null);
                }
            } else {
                setCurrentPlan('Free');
                setCurrentSubscriptionId(null);
            }
        } catch (error) {
            console.error('Fetch subscription error:', error);
            setError(error.message || 'Failed to fetch subscription details');
            setCurrentPlan('Free');
            setCurrentSubscriptionId(null);
        }
    };

    const handleUpdateSubscription = async (planName, paymentId) => {
        try {
            if (!sessionId) {
                throw new Error('No session ID found');
            }

            if (!userData || !userData.id) {
                throw new Error('User ID not available. Please log in.');
            }

            const currentDate = new Date();
            const endDate = new Date();
            const plan = plans.find(p => p.name === planName);
            endDate.setDate(currentDate.getDate() + plan.durationDays);

            const subscriptionData = {
                id: currentSubscriptionId || 0, // Use fetched subscription ID or 0 if none
                subscriptionType: planName,
                startDate: currentDate.toISOString().split('T')[0],
                endDate: planName === 'Free' ? null : endDate.toISOString().split('T')[0],
                status: 'Active',
                conversationsUsed: 0,
                userId: userData.id, // Use userId from useUserData
                transactionId: paymentId || 'FREE_TRANS_' + Date.now(),
                transactionTime: currentDate.toISOString().split('T')[0]
            };

            console.log('Sending subscription data:', subscriptionData);

            const response = await updateSubscription(sessionId, subscriptionData);
            console.log('Subscription response:', response);
            return response;
        } catch (error) {
            throw new Error(error.message || 'Failed to update subscription');
        }
    };

    const handleSubscription = async (plan) => {
        if (plan.name === 'Free') {
            setLoading(true);
            try {
                await handleUpdateSubscription('Free', null);
                setCurrentPlan('Free');
                setSuccessMessage('Successfully subscribed to Free plan.');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
            return;
        }

        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const options = {
                key: 'rzp_test_eK57VjQhXHjIGR',
                amount: plan.priceAmount,
                currency: 'INR',
                name: 'Optimus Ai',
                description: `${plan.name} Subscription`,
                handler: async function (response) {
                    try {
                        await handleUpdateSubscription(plan.name, response.razorpay_payment_id);
                        setCurrentPlan(plan.name);
                        setSuccessMessage(`Successfully subscribed to ${plan.name} plan. Payment ID: ${response.razorpay_payment_id}`);
                    } catch (err) {
                        setError(err.message);
                    } finally {
                        setLoading(false);
                    }
                },
                prefill: {
                    name: userData?.name || 'User Name',
                    email: userData?.email || 'user@example.com',
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

    if (userLoading) {
        return <p>Loading user data...</p>;
    }

    if (userError) {
        return <p>Error: {userError}</p>;
    }

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
                                                disabled={loading || !userData}
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