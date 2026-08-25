import Image from "next/image";

type ServiceImageProps = {
  src: string;
  alt: string;
  caption: string;
};

export function ServiceImage({ src, alt, caption }: ServiceImageProps) {
  return (
    <figure className="pageServiceImage" data-placeholder-image="true">
      <div className="pageServiceImageFrame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 720px) calc(100vw - 4rem), 980px"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
