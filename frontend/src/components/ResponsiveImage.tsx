import React, { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number;
  height?: number;
  fallbackSrc?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px',
  loading = 'lazy',
  priority = false,
  width = 1400,
  height = 933,
  fallbackSrc = '/assets/hospital/ortho-reception-1400w.webp',
}) => {
  const [hasError, setHasError] = useState(false);

  const activeSrc = hasError ? fallbackSrc : src;
  const srcSet = activeSrc.endsWith('-1400w.webp')
    ? `${activeSrc.replace('-1400w.webp', '-800w.webp')} 800w, ${activeSrc} 1400w`
    : undefined;

  return (
    <img
      src={activeSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding="async"
      className={className}
      onError={() => {
        if (!hasError && activeSrc !== fallbackSrc) {
          setHasError(true);
        }
      }}
    />
  );
};
