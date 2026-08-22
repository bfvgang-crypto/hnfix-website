import { processSteps } from "./site-data";

export function ProcessSteps() {
  return (
    <section className="section sectionAlt processSection">
      <div className="container">
        <p className="sectionEyebrow">So einfach geht&apos;s</p>
        <h2>In 4 Schritten zum passenden Service</h2>
        <div className="stepsGrid">
          {processSteps.map((step, index) => (
            <article key={step.title} className="stepCard">
              <div className="stepCardHeader">
                <span className="stepNumber">{index + 1}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
