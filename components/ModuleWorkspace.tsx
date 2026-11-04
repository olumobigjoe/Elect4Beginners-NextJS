"use client";

import { useMemo, useState } from "react";

type Props = { slug: string; title: string };

export default function ModuleWorkspace({ slug }: Props) {
  const [voltage, setVoltage] = useState("12");
  const [current, setCurrent] = useState("2");
  const [supplyVoltage, setSupplyVoltage] = useState("5");
  const [forwardVoltage, setForwardVoltage] = useState("2");
  const [resistor, setResistor] = useState("220");
  const [peakVoltage, setPeakVoltage] = useState("12");
  const [rectifier, setRectifier] = useState("full");
  const [r1, setR1] = useState("100");
  const [r2, setR2] = useState("200");
  const [power, setPower] = useState("24");
  const [hours, setHours] = useState("5");
  const [inputA, setInputA] = useState("1");
  const [inputB, setInputB] = useState("1");
  const [gate, setGate] = useState("AND");
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  const number = (value: string) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const calculatedPower = useMemo(
    () => number(voltage) * number(current),
    [voltage, current]
  );
  const ledCurrent = useMemo(() => {
    const resistanceValue = Math.max(0.0001, number(resistor));
    return Math.max(0, (number(supplyVoltage) - number(forwardVoltage)) / resistanceValue * 1000);
  }, [supplyVoltage, forwardVoltage, resistor]);
  const rectifierOutput = number(peakVoltage) * (rectifier === "full" ? 2 : 1) / Math.PI;
  const parallelResistance =
    1 / (1 / Math.max(0.0001, number(r1)) + 1 / Math.max(0.0001, number(r2)));
  const energyKwh = number(power) * number(hours) / 1000;

  const a = number(inputA);
  const b = number(inputB);
  let gateOutput = 0;
  switch (gate) {
    case "AND": gateOutput = a === 1 && b === 1 ? 1 : 0; break;
    case "OR": gateOutput = a === 1 || b === 1 ? 1 : 0; break;
    case "NAND": gateOutput = a === 1 && b === 1 ? 0 : 1; break;
    case "NOR": gateOutput = a === 0 && b === 0 ? 1 : 0; break;
    case "XOR": gateOutput = a !== b ? 1 : 0; break;
    case "XNOR": gateOutput = a === b ? 1 : 0; break;
  }

  const quiz = slug === "fundamentals"
    ? {
        question: "A 6 Ω resistor is connected across a 12 V supply. What current flows?",
        options: ["0.5 A", "2 A", "72 A"],
        correct: "2 A",
        explanation: "Ohm’s law gives I = V/R = 12/6 = 2 A."
      }
    : slug === "gates"
    ? {
        question: "What is the output of an AND gate when A = 1 and B = 0?",
        options: ["0", "1", "It depends on frequency"],
        correct: "0",
        explanation: "An AND gate outputs 1 only when every input is 1."
      }
    : {
        question: "Which statement best describes this learning path?",
        options: [
          "It teaches a concept used in electronics",
          "It is a unit of temperature",
          "It is a chemical reaction"
        ],
        correct: "It teaches a concept used in electronics",
        explanation: "The module topics above introduce the relevant electronics concepts."
      };

  return (
    <section id="calculator" className="workspace">
      <div className="eyebrow">INTERACTIVE PRACTICE</div>
      <h2>Experiment and check your understanding</h2>
      <p className="section-lead">
        Change the values and observe how the result responds. Calculations run in your browser.
      </p>

      <div className="sim-grid">
        <article className="sim-card">
          <div className="sim-label">01 · OHM’S LAW</div>
          <h3>Voltage, current and power</h3>
          <div className="input-grid">
            <label>Voltage (V)<input type="number" value={voltage} onChange={(event) => setVoltage(event.target.value)} /></label>
            <label>Current (A)<input type="number" value={current} onChange={(event) => setCurrent(event.target.value)} /></label>
          </div>
          <div className="result"><span>Calculated power (P = VI)</span><strong>{calculatedPower.toFixed(2)} W</strong></div>
          <small>Power is the product of voltage and current. Use Ohm’s law, V = IR, to relate the three quantities.</small>
        </article>

        <article className="sim-card">
          <div className="sim-label">02 · LED RESISTOR</div>
          <h3>LED current calculator</h3>
          <div className="input-grid">
            <label>Supply voltage (V)<input type="number" value={supplyVoltage} onChange={(event) => setSupplyVoltage(event.target.value)} /></label>
            <label>LED forward voltage (V)<input type="number" value={forwardVoltage} onChange={(event) => setForwardVoltage(event.target.value)} /></label>
            <label>Resistor (Ω)<input type="number" min="1" value={resistor} onChange={(event) => setResistor(event.target.value)} /></label>
          </div>
          <div className="result"><span>Approximate LED current</span><strong>{ledCurrent.toFixed(2)} mA</strong></div>
          <small>Educational estimate only. Confirm component ratings before constructing a circuit.</small>
        </article>

        <article className="sim-card">
          <div className="sim-label">03 · RECTIFIER</div>
          <h3>Average DC output</h3>
          <label>AC peak voltage (V)<input type="number" value={peakVoltage} onChange={(event) => setPeakVoltage(event.target.value)} /></label>
          <label>Rectifier type
            <select value={rectifier} onChange={(event) => setRectifier(event.target.value)}>
              <option value="full">Full-wave</option>
              <option value="half">Half-wave</option>
            </select>
          </label>
          <div className="result"><span>Ideal average output</span><strong>{rectifierOutput.toFixed(2)} V</strong></div>
          <small>Ideal unfiltered output; diode drops and ripple are not included.</small>
        </article>

        <article className="sim-card">
          <div className="sim-label">04 · RESISTOR NETWORK</div>
          <h3>Two resistors in parallel</h3>
          <div className="input-grid">
            <label>R₁ (Ω)<input type="number" min="0.01" value={r1} onChange={(event) => setR1(event.target.value)} /></label>
            <label>R₂ (Ω)<input type="number" min="0.01" value={r2} onChange={(event) => setR2(event.target.value)} /></label>
          </div>
          <div className="result"><span>Equivalent resistance</span><strong>{parallelResistance.toFixed(2)} Ω</strong></div>
          <small>For two resistors: Rₜ = (R₁ × R₂) / (R₁ + R₂).</small>
        </article>

        <article className="sim-card">
          <div className="sim-label">05 · ENERGY</div>
          <h3>Electrical energy use</h3>
          <div className="input-grid">
            <label>Power (W)<input type="number" value={power} onChange={(event) => setPower(event.target.value)} /></label>
            <label>Time (hours)<input type="number" value={hours} onChange={(event) => setHours(event.target.value)} /></label>
          </div>
          <div className="result"><span>Energy consumed</span><strong>{energyKwh.toFixed(3)} kWh</strong></div>
          <small>Energy (kWh) = Power (W) × Time (h) / 1000.</small>
        </article>

        <article className="sim-card">
          <div className="sim-label">06 · DIGITAL LOGIC</div>
          <h3>Logic gate tester</h3>
          <div className="input-grid">
            <label>Input A<select value={inputA} onChange={(event) => setInputA(event.target.value)}><option value="0">0</option><option value="1">1</option></select></label>
            <label>Input B<select value={inputB} onChange={(event) => setInputB(event.target.value)}><option value="0">0</option><option value="1">1</option></select></label>
            <label>Gate<select value={gate} onChange={(event) => setGate(event.target.value)}>{["AND", "OR", "NAND", "NOR", "XOR", "XNOR"].map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
          </div>
          <div className="result"><span>{gate} output</span><strong>{gateOutput}</strong></div>
          <small>Change either input to explore the truth-table behaviour.</small>
        </article>
      </div>

      <div className="quiz-card">
        <div>
          <div className="eyebrow">QUICK KNOWLEDGE CHECK</div>
          <h3>{quiz.question}</h3>
          <div className="quiz-options">
            {quiz.options.map((option) => (
              <button key={option} type="button" onClick={() => { setAnswer(option); setChecked(false); }} className={answer === option ? "selected" : ""}>
                {option}
              </button>
            ))}
          </div>
          <button className="btn primary check-btn" type="button" disabled={!answer} onClick={() => setChecked(true)}>
            Check answer
          </button>
          {checked && (
            <p className={answer === quiz.correct ? "feedback good" : "feedback bad"}>
              {answer === quiz.correct ? "Correct! " : "Not quite. "}{quiz.explanation}
            </p>
          )}
        </div>
        <div className="quiz-mark">?</div>
      </div>
    </section>
  );
}
