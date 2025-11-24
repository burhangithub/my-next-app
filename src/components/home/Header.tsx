import React, { useState, useEffect } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar 
            className={`fixed-top ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}
                style={{ 
                    transition: 'all 0.3s ease',
                    height: 'clamp(100px, 15vw, 150px)',
                    maxHeight: '150px',
                    minHeight: '100px',
                    borderBottom: scrolled ? 'none' : '1px solid #e9ecef',
                    background: scrolled ? '#ffffff' : 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
                    overflow: 'hidden',
                    zIndex: 1030
                }}
        >
            <Container className="h-100 header-container-mobile" style={{ maxHeight: '150px' }}>
                <Row className="h-100 align-items-center g-0" style={{ margin: 0 }}>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-start h-100" style={{ minHeight: 0 }}>
                        <div 
                            className="d-flex align-items-center text-decoration-none justify-content-center justify-content-md-start"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{ cursor: 'pointer', maxHeight: '150px', width: '100%' }}
                        >
                            <img 
                                src="/home/logo.png" 
                                alt="MDN Lojistik Logo" 
                                className="me-0 me-md-4"
                                style={{
                                    height: 'clamp(60px, 12vw, 100px)',
                                    maxHeight: '100px',
                                    width: 'auto',
                                    maxWidth: '300px',
                                    objectFit: 'contain',
                                    flexShrink: 0
                                }}
                            />
                            <div className="d-none d-md-block flex-grow-0 ms-4" style={{ minWidth: 0 }}>
                               
                                <div className="d-flex flex-column gap-1">
                                    <div 
                                        className="text-muted d-flex align-items-center" 
                                        style={{ fontSize: '0.85rem', fontWeight: '500', whiteSpace: 'nowrap' }}
                                    >
                                        <i className="bi bi-clock-fill text-primary me-2"></i>
                                        <span>Aynı Gün Teslimat Garantisi</span>
                                    </div>
                                    <div 
                                        className="text-muted d-flex align-items-center" 
                                        style={{ fontSize: '0.85rem', fontWeight: '500', whiteSpace: 'nowrap' }}
                                    >
                                        <i className="bi bi-shield-check-fill text-success me-2"></i>
                                        <span>Tam Güvence Altında</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-end h-100" style={{ minHeight: 0 }}>
                        <div className="d-none d-md-block text-end w-100">
                            <div className="d-flex align-items-center justify-content-end">
                                <div 
                                    className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        borderRadius: '50%',
                                        boxShadow: '0 2px 10px rgba(e102, 126, 234, 0.2)',
                                        marginLeft: '30px'
                                    }}
                                >
                                    <i className="bi bi-telephone-fill text-white"></i>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="fw-bold text-dark mb-0" style={{ fontSize: '1.15rem', whiteSpace: 'nowrap' }}>
                                        +90 552 340 79 34
                                    </div>
                                    <small className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                                        <i className="bi bi-clock"></i>
                                        <span>7/24 Hizmet</span>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
