import Image from "next/image";

const photos = [
  { src: "/images/flower.jpg", alt: "Flower" },
  { src: "/images/dog.jpg", alt: "Dog" },
  { src: "/images/potat.jpg", alt: "Potato" }
];

export default function PhotoStrip() {
  return (
    <section className="marquee overflow-hidden py-8">
      <div className="marquee-track flex w-max">
        {[...photos, ...photos].map((photo, i) => {
          const isCopy = i >= photos.length;

          return (
            <div key={i} className="mr-4 shrink-0" aria-hidden={isCopy}>
              <Image
                src={photo.src}
                alt={isCopy ? "" : photo.alt}
                width={320}
                height={224}
                className="h-56 w-80 rounded-xl object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}