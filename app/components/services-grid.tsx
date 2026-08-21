import Link from "next/link";
import { services } from "./site-data";

export function ServicesGrid() {
  return (
    <div className="servicesGrid">
      {services.map((service) => (
        <article key={service.title} className="serviceCard">
          <div
            className="serviceMedia"
            style={{ backgroundImage: `url(${service.image})` }}
            aria-hidden
          >
            <span className="serviceIcon">{service.icon}</span>
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <Link href={service.href} className="cardLink">
            Mehr erfahren
          </Link>
        </article>
      ))}
    </div>
  );
}
