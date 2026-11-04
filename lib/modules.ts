export type Topic = { title: string; description: string; formula: string };
export type Module = { slug: string; icon: string; title: string; level: string; description: string; topics: Topic[] };
export const modules: Module[] = [
  {
    "slug": "fundamentals",
    "icon": "🔋",
    "title": "Electrical Fundamentals",
    "level": "Beginner",
    "description": "Build a strong foundation in voltage, current, resistance, power and basic circuit behaviour.",
    "topics": [
      {
        "title": "Voltage, Current & Resistance",
        "description": "Understand electrical potential difference, charge flow and opposition to current.",
        "formula": "V = I × R"
      },
      {
        "title": "Ohm's Law",
        "description": "Use the relationship between voltage, current and resistance to solve circuit problems.",
        "formula": "V = IR"
      },
      {
        "title": "Electrical Power",
        "description": "Calculate how quickly electrical energy is transferred in a component.",
        "formula": "P = VI = I²R = V²/R"
      },
      {
        "title": "Electrical Energy",
        "description": "Relate power consumption to time and energy units.",
        "formula": "E = Pt"
      },
      {
        "title": "Series Circuits",
        "description": "Explore current, voltage division and equivalent resistance in series networks.",
        "formula": "Rₜ = R₁ + R₂ + …"
      },
      {
        "title": "Parallel Circuits",
        "description": "Understand common voltage, branch currents and equivalent resistance.",
        "formula": "1/Rₜ = 1/R₁ + 1/R₂ + …"
      }
    ]
  },
  {
    "slug": "components",
    "icon": "🧩",
    "title": "Electronic Components",
    "level": "Beginner",
    "description": "Identify common passive and active components, their symbols, functions and practical uses.",
    "topics": [
      {
        "title": "Resistors",
        "description": "Limit current, divide voltage and set operating conditions.",
        "formula": "V = IR"
      },
      {
        "title": "Capacitors",
        "description": "Store energy in an electric field and oppose rapid voltage changes.",
        "formula": "Q = CV"
      },
      {
        "title": "Inductors",
        "description": "Store energy in a magnetic field and oppose changes in current.",
        "formula": "V = L(di/dt)"
      },
      {
        "title": "Diodes",
        "description": "Conduct preferentially in one direction and protect or shape signals.",
        "formula": "Forward bias / reverse bias"
      },
      {
        "title": "LEDs",
        "description": "Convert electrical energy into visible light; always use current limiting.",
        "formula": "I = (Vₛ − Vᶠ)/R"
      },
      {
        "title": "Transistors",
        "description": "Use a small control signal to switch or amplify a larger signal.",
        "formula": "BJT / MOSFET"
      }
    ]
  },
  {
    "slug": "gates",
    "icon": "🚦",
    "title": "Logic Gates",
    "level": "Beginner",
    "description": "Learn Boolean logic and how digital circuits make decisions using binary inputs.",
    "topics": [
      {
        "title": "Binary Logic",
        "description": "Represent digital states using 0 and 1.",
        "formula": "0 / 1"
      },
      {
        "title": "AND & OR Gates",
        "description": "Understand conjunction and disjunction in digital systems.",
        "formula": "Y = A·B  |  Y = A+B"
      },
      {
        "title": "NOT Gate",
        "description": "Invert a single binary input.",
        "formula": "Y = Ā"
      },
      {
        "title": "NAND & NOR",
        "description": "Explore universal gates used to construct any Boolean function.",
        "formula": "NOT(AND), NOT(OR)"
      },
      {
        "title": "XOR & XNOR",
        "description": "Detect unequal or equal input states.",
        "formula": "A ⊕ B"
      },
      {
        "title": "Truth Tables",
        "description": "Map every possible input combination to an output.",
        "formula": "2ⁿ input combinations"
      }
    ]
  },
  {
    "slug": "digital-electronics",
    "icon": "💾",
    "title": "Digital Electronics",
    "level": "Intermediate",
    "description": "Explore number systems, Boolean algebra, combinational logic and sequential circuits.",
    "topics": [
      {
        "title": "Number Systems",
        "description": "Convert between decimal, binary, octal and hexadecimal.",
        "formula": "Base conversion"
      },
      {
        "title": "Boolean Algebra",
        "description": "Simplify logical expressions using identities and De Morgan's laws.",
        "formula": "A + AB = A"
      },
      {
        "title": "Combinational Circuits",
        "description": "Study adders, subtractors, multiplexers and decoders.",
        "formula": "Output = f(inputs)"
      },
      {
        "title": "Flip-Flops",
        "description": "Store one bit of information using bistable circuits.",
        "formula": "SR, JK, D, T"
      },
      {
        "title": "Counters & Registers",
        "description": "Build circuits that count events or hold binary data.",
        "formula": "Sequential logic"
      },
      {
        "title": "ADC & DAC",
        "description": "Understand conversion between analogue and digital signals.",
        "formula": "Sampling / quantisation"
      }
    ]
  },
  {
    "slug": "circuit-analysis",
    "icon": "🧮",
    "title": "Circuit Analysis",
    "level": "Intermediate",
    "description": "Apply systematic methods to solve DC networks and understand circuit behaviour.",
    "topics": [
      {
        "title": "Series & Parallel Networks",
        "description": "Find equivalent resistance and branch quantities.",
        "formula": "Rₜ calculations"
      },
      {
        "title": "Kirchhoff's Laws",
        "description": "Apply conservation of charge and energy in circuit networks.",
        "formula": "KCL: ΣI = 0; KVL: ΣV = 0"
      },
      {
        "title": "Voltage & Current Division",
        "description": "Determine branch voltage and current in resistor networks.",
        "formula": "Vₓ = Vₜ·Rₓ/Rₜ"
      },
      {
        "title": "Thevenin's Theorem",
        "description": "Replace a linear two-terminal network with an equivalent source and resistance.",
        "formula": "Vth + Rth"
      },
      {
        "title": "Norton's Theorem",
        "description": "Represent a network using an equivalent current source and parallel resistance.",
        "formula": "In = Vth/Rth"
      },
      {
        "title": "RC Transients",
        "description": "Understand charging and discharging over time.",
        "formula": "τ = RC"
      }
    ]
  },
  {
    "slug": "rectifiers",
    "icon": "🔺",
    "title": "Diodes & Rectifiers",
    "level": "Intermediate",
    "description": "Study semiconductor diode behaviour, rectification, filtering and waveform shaping.",
    "topics": [
      {
        "title": "PN Junction Diode",
        "description": "Understand depletion regions and forward/reverse bias.",
        "formula": "≈0.7 V silicon"
      },
      {
        "title": "Zener Diode",
        "description": "Use reverse breakdown for voltage reference and regulation.",
        "formula": "Vout ≈ VZ"
      },
      {
        "title": "Half-Wave Rectifier",
        "description": "Convert one half-cycle of AC into pulsating DC.",
        "formula": "VDC = Vm/π"
      },
      {
        "title": "Full-Wave Rectifier",
        "description": "Use both AC half-cycles for a higher average output.",
        "formula": "VDC = 2Vm/π"
      },
      {
        "title": "Filter Capacitors",
        "description": "Reduce ripple in rectified power supplies.",
        "formula": "Vr(pp) ≈ I/(fC)"
      },
      {
        "title": "Clippers & Clampers",
        "description": "Limit or shift signal waveforms using diode networks.",
        "formula": "Wave shaping"
      }
    ]
  },
  {
    "slug": "amplifiers",
    "icon": "🔀",
    "title": "Transistors & Amplifiers",
    "level": "Intermediate",
    "description": "Explore transistor operation, biasing, switching and common amplifier configurations.",
    "topics": [
      {
        "title": "BJT Fundamentals",
        "description": "Understand emitter, base and collector operation.",
        "formula": "IC ≈ βIB"
      },
      {
        "title": "Transistor Biasing",
        "description": "Establish a stable operating point for linear amplification.",
        "formula": "Q-point"
      },
      {
        "title": "Common Emitter Amplifier",
        "description": "Study voltage gain and phase inversion.",
        "formula": "Av ≈ −RC/re"
      },
      {
        "title": "MOSFET Operation",
        "description": "Control drain current using gate-to-source voltage.",
        "formula": "VGS / Vth"
      },
      {
        "title": "Amplifier Classes",
        "description": "Compare Class A, B, AB and C operation and efficiency.",
        "formula": "Conduction angle"
      },
      {
        "title": "Darlington Pair",
        "description": "Combine transistor gains for high current amplification.",
        "formula": "βtotal ≈ β1β2"
      }
    ]
  },
  {
    "slug": "measurements",
    "icon": "📏",
    "title": "Measurements & Instruments",
    "level": "Beginner",
    "description": "Learn to measure electrical quantities safely and interpret instrument readings.",
    "topics": [
      {
        "title": "Digital Multimeter",
        "description": "Measure voltage, current, resistance and continuity.",
        "formula": "V, A, Ω"
      },
      {
        "title": "Oscilloscope",
        "description": "Visualise voltage against time and measure signal properties.",
        "formula": "Vpp, T, f"
      },
      {
        "title": "Signal Generator",
        "description": "Produce test waveforms for circuit experiments.",
        "formula": "Sine / square / triangle"
      },
      {
        "title": "Wheatstone Bridge",
        "description": "Measure unknown resistance using a balanced bridge.",
        "formula": "R₁/R₂ = R₃/Rₓ"
      },
      {
        "title": "Measurement Errors",
        "description": "Understand accuracy, precision, resolution and uncertainty.",
        "formula": "% error"
      },
      {
        "title": "Electrical Safety",
        "description": "Choose suitable ranges and connect instruments correctly.",
        "formula": "Safety first"
      }
    ]
  }
];
