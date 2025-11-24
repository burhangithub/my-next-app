import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SecondSection = () => {
    const services = [
        {
            icon: "bi-lightning-charge-fill",
            title: "Express Teslimat",
            description: "2-4 saat içinde hızlı teslimat seçeneğimizle acil gönderileriniz için özel araç tahsis ediyoruz. Zaman kritik gönderileriniz için ideal çözüm.",
            color: "danger",
            features: ["Özel araç tahsisi", "2-4 saat teslimat", "7/24 destek"]
        },
        {
            icon: "bi-clock-fill",
            title: "Aynı Gün Teslimat",
            description: "Araç tipi fark etmeksizin tüm ürünlerinizi aynı gün içinde teslim ediyoruz. İstanbul genelinde hızlı ve güvenilir aynı gün teslimat hizmeti.",
            color: "primary",
            features: ["Aynı gün garantisi", "Tüm araç tipleri", "İstanbul geneli"]
        },
        {
            icon: "bi-calendar-check-fill",
            title: "Ertesi Gün Teslimat",
            description: "İstanbul'un uzak bölgelerine ekonomik ertesi gün teslimat seçeneği. Bütçenize uygun çözümler.",
            color: "info",
            features: ["Ekonomik fiyat", "Güvenilir teslimat", "Takip sistemi"]
        },
        {
            icon: "bi-box-seam-fill",
            title: "Parsiyel Teslimat",
            description: "Ürünleriniz parça halinde ise parsiyel teslimat seçeneğimiz size uygundur. Maliyet etkin ve esnek lojistik çözümü.",
            color: "warning",
            features: ["Maliyet etkin", "Esnek çözümler", "Konsolidasyon"]
        },
        {
            icon: "bi-truck-flatbed",
            title: "Dedike Araç",
            description: "Düzenli gönderileriniz için özel tahsis edilmiş araçlar. Sadece sizin ürünlerinizi taşıyan özel hizmet.",
            color: "success",
            features: ["Özel araç", "Düzenli seferler", "Özel fiyatlandırma"]
        },
        {
            icon: "bi-truck",
            title: "Büyük Ölçekli Taşımacılık",
            description: "İstanbul genelinde büyük hacimli gönderileriniz için profesyonel taşımacılık hizmeti. Geniş araç filomuzla her ölçekteki gönderiniz için çözüm.",
            color: "dark",
            features: ["Geniş araç filosu", "İstanbul geneli", "Büyük hacim"]
        }
    ];

    return (
        <section className="py-5 bg-light">
            <Container>
                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <Card className="h-100 border-0 shadow-sm hover-lift">
                                <Card.Body className="p-4">
                                    <div className="text-center mb-4">
                                        <div 
                                            className={`bg-${service.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                                            style={{ width: '100px', height: '100px' }}
                                        >
                                            <i className={`bi ${service.icon} text-${service.color} fs-1`}></i>
                                        </div>
                                        <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                                        <Card.Text className="text-muted mb-4">
                                            {service.description}
                                        </Card.Text>
                                        <div className="text-start">
                                            <h6 className="fw-bold mb-3 text-primary">Özellikler:</h6>
                                            <ul className="list-unstyled">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="mb-2">
                                                        <i className={`bi bi-check-circle-fill text-${service.color} me-2`}></i>
                                                        <small>{feature}</small>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SecondSection;
