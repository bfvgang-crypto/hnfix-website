import { processSteps } from "./site-data";

export function ProcessSteps() {
  return (
    <section className="section sectionAlt">
      <div className="container">
        <p className="sectionEyebrow">So einfach geht&apos;s</p>
        <h2>In 4 Schritten zum passenden Service</h2>
        <div className="stepsGrid">
          {processSteps.map((step, index) => (
            <article key={step} className="stepCard">
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
