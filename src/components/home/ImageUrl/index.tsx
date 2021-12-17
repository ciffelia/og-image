import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useOptions } from '@/utils/browser/useOptions';
import { buildImageUrl } from '@/utils/browser/buildImageUrl';
import Button from '@/components/home/ImageUrl/Button';

const ImageUrl: React.VFC = () => {
  const options = useOptions();
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    // buildImageUrl() works on browser only
    setImageUrl(buildImageUrl(options));
  }, [options]);

  const handleCopy = (): void => {
    navigator.clipboard
      .writeText(imageUrl ?? '')
      .then(() => {
        toast.success('Copied!');
      })
      .catch(() => {
        toast.error('Failed to copy URL.');
      });
  };

  const handleDownload = (): void => {
    toast.loading('Downloading...', { duration: 3000 });
  };

  return (
    <div className="w-full grid grid-cols-2 grid-rows-[repeat(2,max-content)] gap-2">
      <input className="col-span-full" type="text" value={imageUrl} disabled />

      <Button onClick={handleCopy}>Copy Image URL</Button>

      <a href={imageUrl} download="og-image.png">
        <Button onClick={handleDownload}>Download</Button>
      </a>
    </div>
  );
};

export default ImageUrl;
