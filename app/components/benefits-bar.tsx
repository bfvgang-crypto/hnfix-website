import { qualityBenefits } from "./site-data";

function BenefitIcon({ name }: { name: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "shield-check") {
    return (
      <svg {...commonProps}>
        <path d="M12 3 5.5 5.7v5.7c0 4.2 2.6 7.8 6.5 9.6 3.9-1.8 6.5-5.4 6.5-9.6V5.7L12 3Z" />
        <path d="m8.8 12 2.1 2.1 4.5-4.5" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </svg>
    );
  }

  if (name === "recycle") {
    return (
      <svg {...commonProps}>
        <path d="m9.3 5.4 1.3-2.2 2.1 3.6" />
        <path d="M10.6 3.2a3 3 0 0 1 4.8.6l2 3.5" />
        <path d="m18.9 9.6 2.6.1-2.1 3.6" />
        <path d="M21.5 9.7a3 3 0 0 1-.3 3.8l-2.1 3.6" />
        <path d="m16.1 18.4-1.3 2.3-2.1-3.7" />
        <path d="M14.8 20.7h-4.2a3 3 0 0 1-2.8-1.7" />
        <path d="m6.6 16.7-2.6-.1L6.1 13" />
        <path d="M4 16.6a3 3 0 0 1-.3-3.8l2.1-3.6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

export function BenefitsBar() {
  return (
    <section className="benefitsBar" aria-label="Ihre Vorteile">
      <div className="container benefitsGrid">
        {qualityBenefits.map((item) => (
          <article key={item.title} className="benefitItem">
            <span className="benefitIcon" aria-hidden>
              <BenefitIcon name={item.icon} />
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
