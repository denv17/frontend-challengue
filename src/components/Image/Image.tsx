import { ImageProps } from "@/types/types";

export const Image = ({ src, alt, width, height, ...props }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      {...props}
    />
  );
};
