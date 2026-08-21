import { qualityBenefits } from "./site-data";

export function BenefitsBar() {
  return (
    <section className="benefitsBar" aria-label="Ihre Vorteile">
      <div className="container benefitsGrid">
        {qualityBenefits.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
