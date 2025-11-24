import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const services = [
        "Express Teslimat",
        "Aynı Gün Teslimat",
        "Ertesi Gün Teslimat",
        "Parsiyel Teslimat",
        "Dedike Araç",
        "Büyük Ölçekli Taşımacılık"
    ];

    const contactInfo = [
        { icon: "bi-telephone-fill", text: "+90 552 340 79 34", link: "tel:+905523407934" },
        { icon: "bi-envelope-fill", text: "info@mdnlojistik.com", link: "mailto:info@mdnlojistik.com" },
        { icon: "bi-geo-alt-fill", text: "İstanbul, Türkiye", link: "#" },
        { icon: "bi-clock-fill", text: "7/24 Hizmet", link: "#" }
    ];

    const socialLinks = [
        { icon: "bi-whatsapp", url: "https://wa.me/+905523407934", color: "#25D366", name: "WhatsApp" },
        { icon: "bi-facebook", url: "https://www.facebook.com", color: "#1877F2", name: "Facebook" },
        { icon: "bi-instagram", url: "https://www.instagram.com", color: "#E4405F", name: "Instagram" },
        { icon: "bi-linkedin", url: "https://www.linkedin.com", color: "#0077B5", name: "LinkedIn" }
    ];

    return (
        <footer 
            className="text-white position-relative"
            style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                paddingTop: '4rem',
                paddingBottom: '2rem'
            }}
        >
            <Container>
                <Row className="g-4 mb-5">
                    <Col xs={12} lg={4} className="mb-4 mb-lg-0">
                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-3">
                                <div 
                                    className="d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                                    }}
                                >
                                    <i className="bi bi-truck text-white" style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0" style={{ 
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>
                                        MDN Lojistik
                                    </h4>
                                    <small className="text-muted">Güvenilir Taşımacılık</small>
                                </div>
                            </div>
                            <p className="text-light mb-4" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                                İstanbul genelinde profesyonel lojistik çözümleri sunan güvenilir partneriniz. 
                                Modern filomuz ve deneyimli ekibimizle gönderilerinizi güvenle teslim ediyoruz.
                            </p>
                        </div>
                        <div>
                            <h6 className="fw-bold mb-3 text-white-50">Bizi Takip Edin</h6>
                            <div className="d-flex gap-2">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="d-flex align-items-center justify-content-center text-white text-decoration-none"
                                        style={{
                                            width: '45px',
                                            height: '45px',
                                            background: `${social.color}15`,
                                            borderRadius: '10px',
                                            border: `1px solid ${social.color}30`,
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = social.color;
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = `${social.color}15`;
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                        title={social.name}
                                    >
                                        <i className={`bi ${social.icon}`} style={{ fontSize: '1.2rem' }}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Col>
                    
                    <Col xs={12} md={6} lg={4} className="mt-4 mt-lg-0">
                        <h5 className="fw-bold mb-4 text-white">Hizmetlerimiz</h5>
                        <ul className="list-unstyled">
                            {services.map((service, index) => (
                                <li key={index} className="mb-3">
                                    <a 
                                        href="#hizmetler" 
                                        className="text-light text-decoration-none d-flex align-items-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('hizmetler');
                                        }}
                                        style={{
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#667eea';
                                            e.currentTarget.style.paddingLeft = '10px';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '';
                                            e.currentTarget.style.paddingLeft = '0';
                                        }}
                                    >
                                        <i className="bi bi-check-circle-fill me-2 text-success"></i>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={12}>
                        <Card className="border-0" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
                            <Card.Body className="p-4">
                                <Row className="g-3">
                                    {contactInfo.map((info, index) => (
                                        <Col key={index} xs={12} sm={6} md={3}>
                                            <a 
                                                href={info.link}
                                                className="text-white text-decoration-none d-flex align-items-center"
                                                style={{ fontSize: '0.9rem' }}
                                            >
                                                <div 
                                                    className="d-flex align-items-center justify-content-center me-3"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                        borderRadius: '8px',
                                                        minWidth: '40px'
                                                    }}
                                                >
                                                    <i className={`bi ${info.icon} text-white`}></i>
                                                </div>
                                                <span>{info.text}</span>
                                            </a>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                
                <Row>
                    <Col xs={12} className="text-center">
                        <p className="mb-2 text-white-50" style={{ fontSize: '0.9rem' }}>
                            &copy; {currentYear} <span className="fw-bold text-white">MDN Lojistik</span>. Tüm hakları saklıdır.
                        </p>
                        <p className="mb-0 text-white-50" style={{ fontSize: '0.85rem' }}>
                            Profesyonel lojistik çözümleri ile yanınızdayız
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
