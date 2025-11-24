import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const FirstSection = () => {
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

    return (
        <section 
            id="anasayfa"
            className="py-5 position-relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                marginTop: 'clamp(100px, 15vw, 150px)',
                paddingTop: '2rem',
                paddingBottom: '2rem'
            }}
        >
            <div 
                className="position-absolute w-100 h-100"
                style={{
                    backgroundImage: 'url(/home/transport8.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    zIndex: 0
                }}
            />
            <Container className="position-relative" style={{ zIndex: 1 }}>
                <Row className="align-items-center text-white">
                    <Col xs={12} lg={6} className="mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 
                            className="fw-bold mb-4" 
                            style={{ 
                                lineHeight: '1.2',
                                fontSize: 'clamp(1.75rem, 5vw, 3rem)'
                            }}
                        >
                            İstanbul&apos;da Güvenilir Lojistik Partneriniz
                        </h1>
                        <p 
                            className="lead mb-4" 
                            style={{ 
                                lineHeight: '1.8',
                                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                            }}
                        >
                            Modern lojistik çözümleriyle gönderilerinizi güvenle ve zamanında teslim ediyoruz. 
                            Profesyonel ekibimiz ve geniş araç filomuzla yanınızdayız.
                        </p>
                        <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center justify-content-lg-start">
                            <div className="d-flex align-items-center  bg-opacity-20 rounded p-3">
                                <i className="bi bi-truck text-white fs-3 me-3"></i>
                                <div>
                                    <div className="fw-bold">Hızlı Teslimat</div>
                                    <small className="opacity-75">Aynı gün içinde</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center  bg-opacity-20 rounded p-3">
                                <i className="bi bi-shield-check text-white fs-3 me-3"></i>
                                <div>
                                    <div className="fw-bold">Güvenli Nakliye</div>
                                    <small className="opacity-75">Tam güvence altında</small>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
                            <Button 
                                size="lg" 
                                variant="light" 
                                className="fw-bold px-4 px-md-5 py-3"
                                style={{ borderRadius: '30px' }}
                                onClick={() => scrollToSection('iletisim')}
                            >
                                <i className="bi bi-envelope me-2"></i>
                                Teklif Alın
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline-light" 
                                className="fw-bold px-4 px-md-5 py-3"
                                style={{ borderRadius: '30px' }}
                                href="https://wa.me/+905523407934"
                                target="_blank"
                            >
                                <i className="bi bi-whatsapp me-2"></i>
                                WhatsApp
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="text-center mt-4 mt-lg-0">
                        <div className="position-relative">
                            <img 
                                src="/home/transport8.jpg" 
                                alt="MDN Lojistik Profesyonel Taşıma Hizmeti" 
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ 
                                    maxHeight: '600px', 
                                    objectFit: 'cover',
                                    width: '100%',
                                    border: '5px solid rgba(255,255,255,0.3)'
                                }}
                            />
                            <div 
                                className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-3 p-md-4 rounded-bottom-4"
                            >
                                <div className="row text-center g-2">
                                    <div className="col-4">
                                        <div className="fs-4 fs-md-2 fw-bold">500+</div>
                                        <small style={{ fontSize: '0.75rem' }}>Mutlu Müşteri</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-4 fs-md-2 fw-bold">1000+</div>
                                        <small style={{ fontSize: '0.75rem' }}>Başarılı Teslimat</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-4 fs-md-2 fw-bold">24/7</div>
                                        <small style={{ fontSize: '0.75rem' }}>Hizmet</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FirstSection;
