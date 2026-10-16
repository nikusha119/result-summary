import "./ResultSummary.css";

const categories = [
  { id: "reaction", label: "Reaction", score: 80, icon: "⚡" },
  { id: "memory", label: "Memory", score: 92, icon: "🧠" },
  { id: "verbal", label: "Verbal", score: 61, icon: "💬" },
  { id: "visual", label: "Visual", score: 72, icon: "👁" },
];

function getRating(score) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Great";
  if (score >= 50) return "Good";
  return "Needs work";
}

export default function ResultSummary() {
  const total = Math.round(
    categories.reduce((sum, c) => sum + c.score, 0) / categories.length
  );

  return (
    <main className="page">
      <article className="card">
        <section className="result">
          <h2 className="result__title">Your Result</h2>

          <div className="result__circle">
            <span className="result__score">{total}</span>
            <span className="result__of">of 100</span>
          </div>

          <h3 className="result__rating">{getRating(total)}</h3>
          <p className="result__text">
            You scored higher than 65% of the people who have taken these
            tests.
          </p>
        </section>

        <section className="summary">
          <h2 className="summary__title">Summary</h2>

          <ul className="summary__list">
            {categories.map((c) => (
              <li key={c.id} className={`row row--${c.id}`}>
                <span>{c.icon}</span>
                <span className="row__label">{c.label}</span>
                <span className="row__score">
                  <strong>{c.score}</strong> / 100
                </span>
              </li>
            ))}
          </ul>

          <button className="btn">Continue</button>
        </section>
      </article>
    </main>
  );
}