import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = "MDN Lojistik - İstanbul'da Güvenilir Lojistik ve Kargo Hizmetleri",
  description = "İstanbul genelinde express teslimat, aynı gün teslimat, ertesi gün teslimat ve parsiyel taşımacılık hizmetleri. %100 sigortalı, güvenilir ve profesyonel lojistik çözümleri. 7/24 hizmet.",
  keywords = "lojistik, kargo, taşımacılık, istanbul kargo, express teslimat, aynı gün teslimat, parsiyel taşımacılık, lojistik firması, kargo şirketi, istanbul lojistik",
  image = "/logo.png",
  url = "https://mdnlojistik.com"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', `${url}${image}`, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('twitter:title', title, 'property');
    updateMetaTag('twitter:description', description, 'property');
    updateMetaTag('twitter:image', `${url}${image}`, 'property');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;

