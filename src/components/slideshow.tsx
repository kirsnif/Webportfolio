import Image from "next/image";

const photos = [
  { src: "/images/shetland.jpg", alt: "Shetland" },
  { src: "/images/deer.jpg", alt: "Deer" },
  { src: "/images/mitsBooks.jpg", alt: "Cat and View" },
  { src: "/images/grimsel.jpg", alt: "Grimsel pass" },
  { src: "/images/lakedistr.jpg", alt: "Lake District" },
  { src: "/images/modelShip.jpg", alt: "Model boat" },
  { src: "/images/mitsLaptop.jpg", alt: "Cat and Laptop" },
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