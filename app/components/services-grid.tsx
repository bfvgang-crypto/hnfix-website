import Image from "next/image";
import Link from "next/link";
import { services } from "./site-data";

function ServiceIcon({ name }: { name: string }) {
  let icon;

  switch (name) {
    case "Reinigung":
      icon = (
        <>
          <path d="m15.5 3-5 12" />
          <path d="M7 14h7l3 7H4l3-7Z" />
          <path d="M7 18h8" />
        </>
      );
      break;
    case "Treppenhaus":
      icon = (
        <>
          <path d="M3 20h5v-5h5v-5h5V5h3" />
          <path d="m4 10 7-6h10" />
        </>
      );
      break;
    case "Keller & Garage":
      icon = (
        <>
          <path d="m3 10 9-6 9 6v10H3V10Z" />
          <path d="M7 20v-7h10v7" />
          <path d="M7 16h10" />
        </>
      );
      break;
    case "Entrümpelung":
      icon = (
        <>
          <path d="M3 7h11v11H3V7Z" />
          <path d="M14 11h4l3 4v3h-7v-7Z" />
          <path d="M17 11v4h4" />
          <circle cx="7" cy="19" r="2" />
          <circle cx="18" cy="19" r="2" />
        </>
      );
      break;
    case "Sperrmüll":
      icon = (
        <>
          <path d="m9 4 2-2 3 5-5 1" />
          <path d="m18 9 3 1-3 5-4-3" />
          <path d="m13 20-1 2-4-4 3-4" />
          <path d="M11 5H8.5a3 3 0 0 0-2.6 1.5L4 10" />
          <path d="m19 13 1 2a3 3 0 0 1-2.6 4.5H13" />
          <path d="M9 19H6.5a3 3 0 0 1-2.6-4.5L5 12" />
        </>
      );
      break;
    default:
      icon = (
        <>
          <path d="M20 4C12 4 6 8 6 15c0 3 2 5 5 5 7 0 9-8 9-16Z" />
          <path d="M4 21c3-6 7-9 12-12" />
        </>
      );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}

export function ServicesGrid() {
  return (
    <div className="servicesGrid">
      {services.map((service) => (
        <article key={service.title} className="serviceCard">
          <Link
            href={service.href}
            className="serviceCardButton"
            aria-label={`${service.title}: Mehr erfahren`}
          >
            <div className="serviceMedia">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 900px) 100vw, (max-width: 1100px) 33vw, 17vw"
              />
              <span className="serviceIcon" aria-hidden>
                <ServiceIcon name={service.title} />
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="cardLink">Mehr erfahren</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
