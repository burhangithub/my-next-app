import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";

const FourthSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simüle edilmiş form gönderimi
        setTimeout(() => {
            setShowAlert(true);
            setIsSubmitting(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setShowAlert(false), 5000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: "bi-telephone-fill",
            title: "Telefon",
            content: "+90 552 340 79 34",
            link: "tel:+905523407934",
            color: "primary"
        },
        {
            icon: "bi-envelope-fill",
            title: "E-posta",
            content: "info@mdnlojistik.com",
            link: "mailto:info@mdnlojistik.com",
            color: "danger"
        },
        {
            icon: "bi-geo-alt-fill",
            title: "Adres",
            content: "İstanbul, Türkiye",
            link: "#",
            color: "success"
        },
        {
            icon: "bi-clock-fill",
            title: "Çalışma Saatleri",
            content: "7/24 Hizmet",
            link: "#",
            color: "warning"
        }
    ];

    return (
        <section className="py-5 bg-light" id="iletisim">
            <Container>
                <Row className="mb-5">
                    <Col lg={8} className="mx-auto text-center">
                        <h2 
                            className="fw-bold text-primary mb-3" 
                            style={{ 
                                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', 
                                letterSpacing: '-0.02em',
                                lineHeight: '1.2',
                                fontWeight: '700'
                            }}
                        >
                            İletişime Geçin
                        </h2>
                        <p 
                            className="text-muted mb-0 px-3 px-md-0"
                            style={{ 
                                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', 
                                lineHeight: '1.7',
                                fontWeight: '400',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            Lojistik ihtiyaçlarınız için bizimle iletişime geçin. Size en uygun çözümü sunmak için buradayız.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col xs={12} lg={8}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body className="p-4">
                                {showAlert && (
                                    <Alert variant="success" className="mb-4">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                                    </Alert>
                                )}

                                <h4 
                                    className="fw-bold mb-4"
                                    style={{ 
                                        fontSize: '1.5rem', 
                                        letterSpacing: '-0.01em',
                                        fontWeight: '600'
                                    }}
                                >
                                    Bize Ulaşın
                                </h4>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label 
                                                    className="fw-semibold"
                                                    style={{ 
                                                        fontSize: '0.95rem', 
                                                        fontWeight: '600',
                                                        letterSpacing: '-0.01em',
                                                        color: '#333'
                                                    }}
                                                >
                                                    <i className="bi bi-person me-2"></i>Adınız Soyadınız
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder="Adınız ve soyadınız"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    size="lg"
                                                    style={{ 
                                                        fontSize: '1rem',
                                                        fontWeight: '400',
                                                        letterSpacing: '-0.01em'
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label 
                                                    className="fw-semibold"
                                                    style={{ 
                                                        fontSize: '0.95rem', 
                                                        fontWeight: '600',
                                                        letterSpacing: '-0.01em',
                                                        color: '#333'
                                                    }}
                                                >
                                                    <i className="bi bi-telephone me-2"></i>Telefon
                                                </Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="05XX XXX XX XX"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    size="lg"
                                                    style={{ 
                                                        fontSize: '1rem',
                                                        fontWeight: '400',
                                                        letterSpacing: '-0.01em'
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mt-3">
                                        <Form.Label 
                                            className="fw-semibold"
                                            style={{ 
                                                fontSize: '0.95rem', 
                                                fontWeight: '600',
                                                letterSpacing: '-0.01em',
                                                color: '#333'
                                            }}
                                        >
                                            <i className="bi bi-envelope me-2"></i>E-posta
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="ornek@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            size="lg"
                                            style={{ 
                                                fontSize: '1rem',
                                                fontWeight: '400',
                                                letterSpacing: '-0.01em'
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label 
                                            className="fw-semibold"
                                            style={{ 
                                                fontSize: '0.95rem', 
                                                fontWeight: '600',
                                                letterSpacing: '-0.01em',
                                                color: '#333'
                                            }}
                                        >
                                            <i className="bi bi-chat-left-text me-2"></i>Mesajınız
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            name="message"
                                            placeholder="Mesajınızı buraya yazabilirsiniz..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            style={{ 
                                                fontSize: '1rem',
                                                fontWeight: '400',
                                                letterSpacing: '-0.01em',
                                                lineHeight: '1.6'
                                            }}
                                        />
                                    </Form.Group>
                                    <Button 
                                        type="submit" 
                                        variant="primary" 
                                        size="lg"
                                        className="mt-4 w-100 fw-bold"
                                        disabled={isSubmitting}
                                        style={{ 
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            letterSpacing: '-0.01em'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-send me-2"></i>
                                                Mesaj Gönder
                                            </>
                                        )}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4} className="mt-4 mt-lg-0">
                        <div className="d-flex flex-column gap-3">
                            {contactInfo.map((info, index) => (
                                <Card key={index} className="border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-start">
                                            <div className={`bg-${info.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3`} style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                                                <i className={`bi ${info.icon} text-${info.color} fs-5`}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 
                                                    className="fw-bold mb-1"
                                                    style={{ 
                                                        fontSize: '1rem', 
                                                        fontWeight: '600',
                                                        letterSpacing: '-0.01em'
                                                    }}
                                                >
                                                    {info.title}
                                                </h6>
                                                <a 
                                                    href={info.link} 
                                                    className={`text-${info.color} text-decoration-none`}
                                                    style={{ 
                                                        fontSize: '0.95rem',
                                                        fontWeight: '500',
                                                        letterSpacing: '-0.01em'
                                                    }}
                                                >
                                                    {info.content}
                                                </a>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                        <Card className="border-0 shadow-sm mt-3 bg-primary text-white">
                            <Card.Body className="p-4 text-center">
                                <i className="bi bi-whatsapp fs-1 mb-3 d-block"></i>
                                <h5 
                                    className="fw-bold mb-3"
                                    style={{ 
                                        fontSize: '1.25rem', 
                                        fontWeight: '600',
                                        letterSpacing: '-0.01em'
                                    }}
                                >
                                    WhatsApp ile Hızlı İletişim
                                </h5>
                                <Button 
                                    variant="light" 
                                    className="fw-bold w-100"
                                    href="https://wa.me/+905523407934"
                                    target="_blank"
                                >
                                    <i className="bi bi-whatsapp me-2"></i>
                                    Hemen Yazın
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FourthSection;
