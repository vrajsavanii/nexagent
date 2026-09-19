export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexAgent",
    "legalName": "NexAgent",
    "url": "https://nexagent.ai",
    "logo": "https://nexagent.ai/logo.jpeg",
    "description": "Founder-led technology company building AI-powered software, automation systems, intelligent business applications, and digital infrastructure.",
    "foundingDate": "2026",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "Founder-Led"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "AI Agents",
      "Workflow Automation",
      "Custom Software Development",
      "Business Intelligence",
      "Systems Integration",
      "Voice AI"
    ],
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" }
    ],
    "sameAs": []
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NexAgent",
    "url": "https://nexagent.ai",
    "description": "Building intelligent systems for the businesses of the world.",
    "publisher": {
      "@type": "Organization",
      "name": "NexAgent"
    }
  };
}

export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "NexAgent",
      "url": "https://nexagent.ai"
    },
    "serviceType": "AI and Software Engineering",
    "url": `https://nexagent.ai/solutions/${service.slug}`
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
