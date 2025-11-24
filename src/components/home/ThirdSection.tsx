import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ThirdSection = () => {
    const features = [
        {
            icon: "bi-shield-check",
            title: "Sigortalı Taşımacılık",
            description: "Tüm gönderileriniz tam sigorta kapsamında"
        },
        {
            icon: "bi-geo-alt",
            title: "İstanbul Geneli",
            description: "İstanbul'un tüm bölgelerine hızlı ve güvenli teslimat"
        },
        {
            icon: "bi-clock-history",
            title: "7/24 Destek",
            description: "Her zaman yanınızdayız"
        },
        {
            icon: "bi-award",
            title: "Kalite Garantisi",
            description: "ISO standartlarında hizmet"
        }
    ];

    const fleetImages = [
        { src: "/home/transport.jpg", alt: "Modern Taşıma Aracı", title: "Şehir İçi Teslimat" },
        { src: "/home/transport8.jpg", alt: "Geniş Kapasiteli Araç", title: "Büyük Ölçekli Gönderiler" },
        { src: "/home/res1.jpeg", alt: "Profesyonel Taşıma Aracı", title: "Güvenli Nakliye" },
        { src: "/home/res2.jpeg", alt: "Modern Lojistik Aracı", title: "Hızlı Teslimat" }
    ];

    return (
        <section className="py-5" id="hakkimizda">
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
                            Neden MDN Lojistik?
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
                            Modern filomuz ve deneyimli ekibimizle lojistik ihtiyaçlarınızı en iyi şekilde karşılıyoruz
                        </p>
                    </Col>
                </Row>
                
                <Row className="g-4 mb-5">
                    {features.map((feature, index) => (
                        <Col key={index} xs={12} sm={6} md={3}>
                            <div className="text-center p-4">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                    <i className={`bi ${feature.icon} text-primary fs-2`}></i>
                                </div>
                                <h5 className="fw-bold mb-2">{feature.title}</h5>
                                <p className="text-muted small mb-0">{feature.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="mb-5">
                    <Col lg={8} className="mx-auto text-center">
                        <h3 
                            className="fw-bold mb-4"
                            style={{ 
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                                letterSpacing: '-0.02em',
                                lineHeight: '1.2',
                                fontWeight: '700',
                                color: '#333'
                            }}
                        >
                            Araç Filosumuz
                        </h3>
                        <p 
                            className="text-muted mb-0 px-3 px-md-0"
                            style={{ 
                                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
                                lineHeight: '1.7',
                                fontWeight: '400',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            Modern ve bakımlı araç filomuzla her türlü gönderiniz için uygun çözümler sunuyoruz
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {fleetImages.map((image, index) => (
                        <Col key={index} xs={12} sm={6} lg={3}>
                            <div className="position-relative overflow-hidden rounded-3 shadow-sm" style={{ height: 'clamp(200px, 30vw, 250px)' }}>
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-100 h-100"
                                    style={{ 
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                                <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-3 text-center">
                                    <small className="fw-semibold">{image.title}</small>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ThirdSection;
