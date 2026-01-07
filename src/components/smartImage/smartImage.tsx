import type { SmartImageProps } from "../../interfaces/skinLab.types";


export const SmartImage: React.FC<SmartImageProps> = ({
  avif,
  webp,
  src,
  alt,
  className,
  width,
  height,
  priority,
}) => {
  return (
    <picture>
      {avif ? <source srcSet={avif} type="image/avif" /> : null}
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
};