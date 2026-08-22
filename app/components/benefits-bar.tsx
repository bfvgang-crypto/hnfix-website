import { qualityBenefits } from "./site-data";

export function BenefitsBar() {
  return (
    <section className="benefitsBar" aria-label="Ihre Vorteile">
      <div className="container benefitsGrid">
        {qualityBenefits.map((item) => (
          <article key={item.title} className="benefitItem">
            <span className="benefitIcon" aria-hidden>
              {item.icon}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
