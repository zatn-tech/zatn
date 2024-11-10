import React from 'react';

export function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-gray-600 font-medium mb-3">{title}</h3>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
        >
          {link}
        </a>
      ))}
    </div>
  );
}