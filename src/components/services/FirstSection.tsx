import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FirstSection = () => {
    return (
        <section 
            className="py-5 text-white position-relative"
            style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                marginTop: '76px'
            }}
        >
            <Container>
                <Row>
                    <Col lg={10} className="mx-auto text-center">
                        <h1 className="display-3 fw-bold mb-4">Hizmetlerimiz</h1>
                        <p className="lead fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                            MDN Lojistik olarak İstanbul genelinde kapsamlı lojistik çözümler sunuyoruz. 
                            Motorlu teslimat ve geniş araç filomuzla her ölçekteki 
                            gönderiniz için profesyonel ve güvenilir hizmet garantisi veriyoruz. 
                            Modern filomuz ve deneyimli ekibimizle, lojistik ihtiyaçlarınızı en verimli 
                            şekilde karşılıyoruz.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FirstSection;
