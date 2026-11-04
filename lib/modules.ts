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
      [
        "Voltage, Current & Resistance",
        "Understand electrical potential difference, charge flow and opposition to current.",
        "V = I × R"
      ],
      [
        "Ohm's Law",
        "Use the relationship between voltage, current and resistance to solve circuit problems.",
        "V = IR"
      ],
      [
        "Electrical Power",
        "Calculate how quickly electrical energy is transferred in a component.",
        "P = VI = I²R = V²/R"
      ],
      [
        "Electrical Energy",
        "Relate power consumption to time and energy units.",
        "E = Pt"
      ],
      [
        "Series Circuits",
        "Explore current, voltage division and equivalent resistance in series networks.",
        "Rₜ = R₁ + R₂ + …"
      ],
      [
        "Parallel Circuits",
        "Understand common voltage, branch currents and equivalent resistance.",
        "1/Rₜ = 1/R₁ + 1/R₂ + …"
      ]
    ]
  },
  {
    "slug": "components",
    "icon": "🧩",
    "title": "Electronic Components",
    "level": "Beginner",
    "description": "Identify common passive and active components, their symbols, functions and practical uses.",
    "topics": [
      [
        "Resistors",
        "Limit current, divide voltage and set operating conditions.",
        "V = IR"
      ],
      [
        "Capacitors",
        "Store energy in an electric field and oppose rapid voltage changes.",
        "Q = CV"
      ],
      [
        "Inductors",
        "Store energy in a magnetic field and oppose changes in current.",
        "V = L(di/dt)"
      ],
      [
        "Diodes",
        "Conduct preferentially in one direction and protect or shape signals.",
        "Forward bias / reverse bias"
      ],
      [
        "LEDs",
        "Convert electrical energy into visible light; always use current limiting.",
        "I = (Vₛ − Vᶠ)/R"
      ],
      [
        "Transistors",
        "Use a small control signal to switch or amplify a larger signal.",
        "BJT / MOSFET"
      ]
    ]
  },
  {
    "slug": "gates",
    "icon": "🚦",
    "title": "Logic Gates",
    "level": "Beginner",
    "description": "Learn Boolean logic and how digital circuits make decisions using binary inputs.",
    "topics": [
      [
        "Binary Logic",
        "Represent digital states using 0 and 1.",
        "0 / 1"
      ],
      [
        "AND & OR Gates",
        "Understand conjunction and disjunction in digital systems.",
        "Y = A·B  |  Y = A+B"
      ],
      [
        "NOT Gate",
        "Invert a single binary input.",
        "Y = Ā"
      ],
      [
        "NAND & NOR",
        "Explore universal gates used to construct any Boolean function.",
        "NOT(AND), NOT(OR)"
      ],
      [
        "XOR & XNOR",
        "Detect unequal or equal input states.",
        "A ⊕ B"
      ],
      [
        "Truth Tables",
        "Map every possible input combination to an output.",
        "2ⁿ input combinations"
      ]
    ]
  },
  {
    "slug": "digital-electronics",
    "icon": "💾",
    "title": "Digital Electronics",
    "level": "Intermediate",
    "description": "Explore number systems, Boolean algebra, combinational logic and sequential circuits.",
    "topics": [
      [
        "Number Systems",
        "Convert between decimal, binary, octal and hexadecimal.",
        "Base conversion"
      ],
      [
        "Boolean Algebra",
        "Simplify logical expressions using identities and De Morgan's laws.",
        "A + AB = A"
      ],
      [
        "Combinational Circuits",
        "Study adders, subtractors, multiplexers and decoders.",
        "Output = f(inputs)"
      ],
      [
        "Flip-Flops",
        "Store one bit of information using bistable circuits.",
        "SR, JK, D, T"
      ],
      [
        "Counters & Registers",
        "Build circuits that count events or hold binary data.",
        "Sequential logic"
      ],
      [
        "ADC & DAC",
        "Understand conversion between analogue and digital signals.",
        "Sampling / quantisation"
      ]
    ]
  },
  {
    "slug": "circuit-analysis",
    "icon": "🧮",
    "title": "Circuit Analysis",
    "level": "Intermediate",
    "description": "Apply systematic methods to solve DC networks and understand circuit behaviour.",
    "topics": [
      [
        "Series & Parallel Networks",
        "Find equivalent resistance and branch quantities.",
        "Rₜ calculations"
      ],
      [
        "Kirchhoff's Laws",
        "Apply conservation of charge and energy in circuit networks.",
        "KCL: ΣI = 0; KVL: ΣV = 0"
      ],
      [
        "Voltage & Current Division",
        "Determine branch voltage and current in resistor networks.",
        "Vₓ = Vₜ·Rₓ/Rₜ"
      ],
      [
        "Thevenin's Theorem",
        "Replace a linear two-terminal network with an equivalent source and resistance.",
        "Vth + Rth"
      ],
      [
        "Norton's Theorem",
        "Represent a network using an equivalent current source and parallel resistance.",
        "In = Vth/Rth"
      ],
      [
        "RC Transients",
        "Understand charging and discharging over time.",
        "τ = RC"
      ]
    ]
  },
  {
    "slug": "rectifiers",
    "icon": "🔺",
    "title": "Diodes & Rectifiers",
    "level": "Intermediate",
    "description": "Study semiconductor diode behaviour, rectification, filtering and waveform shaping.",
    "topics": [
      [
        "PN Junction Diode",
        "Understand depletion regions and forward/reverse bias.",
        "≈0.7 V silicon"
      ],
      [
        "Zener Diode",
        "Use reverse breakdown for voltage reference and regulation.",
        "Vout ≈ VZ"
      ],
      [
        "Half-Wave Rectifier",
        "Convert one half-cycle of AC into pulsating DC.",
        "VDC = Vm/π"
      ],
      [
        "Full-Wave Rectifier",
        "Use both AC half-cycles for a higher average output.",
        "VDC = 2Vm/π"
      ],
      [
        "Filter Capacitors",
        "Reduce ripple in rectified power supplies.",
        "Vr(pp) ≈ I/(fC)"
      ],
      [
        "Clippers & Clampers",
        "Limit or shift signal waveforms using diode networks.",
        "Wave shaping"
      ]
    ]
  },
  {
    "slug": "amplifiers",
    "icon": "🔀",
    "title": "Transistors & Amplifiers",
    "level": "Intermediate",
    "description": "Explore transistor operation, biasing, switching and common amplifier configurations.",
    "topics": [
      [
        "BJT Fundamentals",
        "Understand emitter, base and collector operation.",
        "IC ≈ βIB"
      ],
      [
        "Transistor Biasing",
        "Establish a stable operating point for linear amplification.",
        "Q-point"
      ],
      [
        "Common Emitter Amplifier",
        "Study voltage gain and phase inversion.",
        "Av ≈ −RC/re"
      ],
      [
        "MOSFET Operation",
        "Control drain current using gate-to-source voltage.",
        "VGS / Vth"
      ],
      [
        "Amplifier Classes",
        "Compare Class A, B, AB and C operation and efficiency.",
        "Conduction angle"
      ],
      [
        "Darlington Pair",
        "Combine transistor gains for high current amplification.",
        "βtotal ≈ β1β2"
      ]
    ]
  },
  {
    "slug": "measurements",
    "icon": "📏",
    "title": "Measurements & Instruments",
    "level": "Beginner",
    "description": "Learn to measure electrical quantities safely and interpret instrument readings.",
    "topics": [
      [
        "Digital Multimeter",
        "Measure voltage, current, resistance and continuity.",
        "V, A, Ω"
      ],
      [
        "Oscilloscope",
        "Visualise voltage against time and measure signal properties.",
        "Vpp, T, f"
      ],
      [
        "Signal Generator",
        "Produce test waveforms for circuit experiments.",
        "Sine / square / triangle"
      ],
      [
        "Wheatstone Bridge",
        "Measure unknown resistance using a balanced bridge.",
        "R₁/R₂ = R₃/Rₓ"
      ],
      [
        "Measurement Errors",
        "Understand accuracy, precision, resolution and uncertainty.",
        "% error"
      ],
      [
        "Electrical Safety",
        "Choose suitable ranges and connect instruments correctly.",
        "Safety first"
      ]
    ]
  }
];
