import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';
import { FooterColumn } from './FooterColumn';
import { AddressBlock } from './AddressBlock';

export default function Services() {
  const addresses = {
    chennai: {
      title: 'Chennai Office',
      address: [
        'InterFazia Technologies',
        '#7/4, Loganathan Street,',
        'Hindustan Lever Colony,',
        'Pammal, Chennai - 600 075.',
      ],
    },
    cumbum: {
      title: 'Cumbum Office',
      address: [
        'InterFazia Technologies',
        '62A, W28-Grama Savadi Street,',
        'Near Gandhi Statue,',
        'Cumbum - 625 516. Theni - Dt.',
      ],
    },
    australia: {
      title: 'Australia Office',
      address: [
        'InterFazia Technologies',
        '7/63 Harlen Road, Salisbury,',
        'Brisbane, QLD 4107.',
      ],
    },
  };

  const services = {
    company: {
      title: 'Company',
      links: ['Home', 'About Us', 'Services', 'Clients', 'Career', 'Contact Us'],
    },
    branding: {
      title: 'Branding',
      links: [
        'Logo Designing',
        'Brochures',
        'Flyers & Posters',
        'Packaging',
        'Invitations',
        'Social Media Designs',
      ],
    },
    webDesigning: {
      title: 'Web Designing',
      links: [
        'UI/UX Web Design',
        'Static & Dynamic Website',
        'Website Redesign',
        'Landing Pages',
        'SEO Optimization',
        'Rapid Web Design',
      ],
    },
    ecommerce: {
      title: 'Web & E-commerce Development',
      links: [
        'ECommerce Application Development',
        'Custom ECommerce Website Design',
        'ECommerce Cart Development',
        'Payment Gateway Integration',
        'Responsive Shopping Website',
        'Maintenance & Support',
      ],
    },
    ecommerce: {
      title: 'Web & E-commerce Development',
      links: [
        'ECommerce Application Development',
        'Custom ECommerce Website Design',
        'ECommerce Cart Development',
        'Payment Gateway Integration',
        'Responsive Shopping Website',
        'Maintenance & Support',
      ],
    },
    ecomasdmerce: {
      title: 'Web & E-commerce Development',
      links: [
        'ECommerce Application Development',
        'Custom ECommerce Website Design',
        'ECommerce Cart Development',
        'Payment Gateway Integration',
        'Responsive Shopping Website',
        'Maintenance & Support',
      ],
    },
    ecommsdserce: {
      title: 'Web & E-commerce Development',
      links: [
        'ECommerce Application Development',
        'Custom ECommerce Website Design',
        'ECommerce Cart Development',
        'Payment Gateway Integration',
        'Responsive Shopping Website',
        'Maintenance & Support',
      ],
    },
    ecommsasddserce: {
      title: 'Web & E-commerce Development',
      links: [
        'ECommerce Application Development',
        'Custom ECommerce Website Design',
        'ECommerce Cart Development',
        'Payment Gateway Integration',
        'Responsive Shopping Website',
        'Maintenance & Support',
      ],
    },
  };

  return (
    <footer className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex ">
        
          <div className=''>

          <div className="md:col-span-1">
            <img
              src="/logo.png"
              alt="InterFazia"
              className="h-12 mb-8"
              />
            {Object.values(addresses).map((office, index) => (
                <AddressBlock
                key={index}
                title={office.title}
                address={office.address}
                />
            ))}
            
          </div>
            </div>
            <div className='grid grid-cols-2  md:grid-cols-4 ml-[10%]'>

          {Object.values(services).map((section, index) => (
            <div key={index} className="px-10 py-10">
              <FooterColumn title={section.title} links={section.links} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </footer>
  );
}