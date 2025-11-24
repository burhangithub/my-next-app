import React from "react";

export const Whatsapp = () => {
    return (
        <div 
            className="position-fixed"
            style={{
                bottom: '30px',
                right: '30px',
                zIndex: 1050
            }}
        >
            <a
                href="https://wa.me/+905523407934"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center text-decoration-none"
                style={{
                    width: '65px',
                    height: '65px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    animation: 'pulse 2s infinite'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
                }}
                title="WhatsApp ile iletişime geçin"
            >
                <i className="bi bi-whatsapp fs-2"></i>
            </a>
        </div>
    );
};

export default Whatsapp;
