
import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
    setHasError(false);
    setRetryCount(0);
  }, [src]);

  const handleError = () => {
    // Retry logic:
    // 1. If it has 'public/' prefix, try removing it (common mistake).
    // 2. If it is a relative path, ensure it starts with /.
    
    if (retryCount === 0) {
      setRetryCount(1);
      
      if (imgSrc.includes('public/')) {
        // Fix: user typed "public/profile.jpg", try "/profile.jpg"
        setImgSrc(imgSrc.replace('public/', '/').replace('//', '/'));
      } else if (!imgSrc.startsWith('/') && !imgSrc.startsWith('http')) {
        // Fix: user typed "profile.jpg", try "/profile.jpg"
        setImgSrc(`/${imgSrc}`);
      } else {
        // If it was already correct but failed, show error
        setHasError(true);
        setIsLoaded(true);
      }
    } else {
      setHasError(true);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName} bg-coffee-200 dark:bg-coffee-800`}>
      {/* Skeleton / Placeholder - Removed animate-pulse */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-coffee-200 dark:bg-coffee-800 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`} 
      >
        <User className="text-coffee-300 dark:text-coffee-600 w-1/3 h-1/3" aria-hidden="true" />
      </div>
      
      {/* Actual Image */}
      {!hasError ? (
        <img
          src={imgSrc}
          alt={alt}
          loading="eager" 
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`block w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-coffee-200 dark:bg-coffee-700 text-coffee-400 dark:text-coffee-500">
           <User className="w-1/2 h-1/2" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default LazyImage;
