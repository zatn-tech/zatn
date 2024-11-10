import React from 'react';

export function AddressBlock({ title, address }) {
  return (
    <div className="mb-8">
      <h3 className="text-gray-600 font-medium mb-3">{title}</h3>
      {address.map((line, index) => (
        <p key={index} className="text-gray-500 text-sm mb-1">
          {line}
        </p>
      ))}
    </div>
  );
}