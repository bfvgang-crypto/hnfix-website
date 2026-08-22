import Image from "next/image";
import Link from "next/link";
import { services } from "./site-data";

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
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, (max-width: 1100px) 33vw, 17vw"
              />
              <span className="serviceIcon" aria-hidden>
                {service.icon}
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
