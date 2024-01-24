import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { ImageFieldsFragment } from '@src/lib/__generated/sdk';

interface ImageProps extends Omit<ImageFieldsFragment, '__typename'> {
  nextImageProps?: Omit<NextImageProps, 'src' | 'alt'>;
  blurHash?: string;
}

export const CtfImage = ({ url, width, height, title, nextImageProps, blurHash }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(!isLoaded);
  }, [isLoaded]);

  if (!url || !width || !height) return null;

  return (
    <NextImage
      src={url}
      width={width}
      height={height}
      alt={title || ''}
      title={title || ''}
      placeholder="blur"
      blurDataURL={blurHash}
      {...nextImageProps}
      className={twMerge(nextImageProps?.className, `${isLoading ? 'blur-md ' : ''}transition-all`)}
      onLoad={() => setIsLoaded(true)}
      priority
    />
  );
};
