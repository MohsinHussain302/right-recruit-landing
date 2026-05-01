import React from 'react';

/**
 * Reusable texture overlay component.
 * variant: 'noise' | 'dots' | 'grid' | 'diagonal'
 * Renders as an absolute overlay — parent must have position:relative.
 */
export default function SectionTexture({ variant = 'noise', opacity = 0.035 }) {
  if (variant === 'dots') {
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity,
          backgroundImage: `radial-gradient(circle, #004D3D 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
    );
  }

  if (variant === 'grid') {
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(to right, #004D3D 0.5px, transparent 0.5px),
            linear-gradient(to bottom, #004D3D 0.5px, transparent 0.5px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    );
  }

  if (variant === 'diagonal') {
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #004D3D,
            #004D3D 0.5px,
            transparent 0.5px,
            transparent 18px
          )`,
        }}
      />
    );
  }

  // Default: noise
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
      }}
    />
  );
}
