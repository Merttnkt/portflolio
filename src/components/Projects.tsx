const projects = [
  {
    title: "StudyZone web project",
    description:
      "It is a comprehensive study tracking and analysis platform developed for students preparing for university entrance exams. With AI-powered recommendations, detailed statistics, and personalized study plans, it helps students achieve their goals.",
    tags: ["React", "TypeScript", "Supabase", "Gemini API"],
    github: "https://github.com/Merttnkt/Uniweb",
    visual: "web",
  },
  {
    title: "StudyZone mobil app",
    description:
      "Uniweb Mobile is an AI-powered mobile app that helps students optimize their exam preparation process. Built with React Native and Expo, it provides personalized study plans, performance tracking, and smart recommendations using Gemini AI.",
    tags: ["React Native", "Supabase", "Gemini API", "Expo Router"],
    github: "https://github.com/Merttnkt/Uniweb_mobil",
    visual: "mobile",
  },
  {
    title: "Heart disease risk analyze",
    description:
      "This project predicts heart disease risk using a CSV dataset and an XGBoost model optimized with a genetic algorithm. It evaluates performance with metrics like accuracy and F1-score and highlights key risk factors through feature importance analysis.",
    tags: ["Python", "Dataset", "Genetic algorithm"],
    github: "https://github.com/Merttnkt/heart_disease_risk_analyze",
    visual: "ecg",
  },
  {
    title: "Laravel hashing and brutoforce safety",
    description:
      "Security-focused authentication system with strong password policies, brute-force protection, account lockouts and policy-based authorization. Includes secure session handling and note management.",
    tags: ["PHP", "Blade"],
    github: "https://github.com/Merttnkt/laravel_hashing_and_bruteforce",
    visual: "terminal",
  },
];

function WebVisual() {
  return (
    <div
      className="w-full h-full overflow-hidden rounded-xl"
      style={{ background: "#0f1117" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 680 340"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="680" height="340" fill="#0f1117" />
        <rect x="0" y="0" width="680" height="28" fill="#161b27" />
        <rect x="8" y="6" width="18" height="16" fill="#f97316" rx="3" />
        <text
          x="30"
          y="18"
          fill="#e2e8f0"
          fontSize="10"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          UniWeb
        </text>
        <text
          x="188"
          y="18"
          fill="#e2e8f0"
          fontSize="10"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          Dashboard
        </text>
        <rect x="600" y="6" width="16" height="16" fill="#f97316" rx="8" />
        <text
          x="608"
          y="17"
          textAnchor="middle"
          fill="#fff"
          fontSize="6"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          ME
        </text>
        <text
          x="620"
          y="18"
          fill="#94a3b8"
          fontSize="8"
          fontFamily="sans-serif"
        >
          mert.tankit@...
        </text>
        <rect x="0" y="28" width="148" height="312" fill="#161b27" />
        <rect x="8" y="36" width="132" height="20" fill="#f97316" rx="4" />
        <text
          x="74"
          y="50"
          textAnchor="middle"
          fill="#fff"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          Dashboard
        </text>
        {[
          "AI Tavsiyeleri",
          "Sınav Analizi",
          "Sınav Takibi",
          "Net Takibi",
          "Notlar",
          "İstatistikler",
          "Çalışma Planı",
          "Konu Performansı",
          "Üniversite Hedefi",
          "Örnek Sorular",
          "İlerleme Özetim",
          "Video Takip",
          "Otomatik Planla",
        ].map((item, i) => (
          <text
            key={item}
            x="18"
            y={70 + i * 14}
            fill="#64748b"
            fontSize="8"
            fontFamily="sans-serif"
          >
            {item}
          </text>
        ))}
        <rect x="156" y="36" width="516" height="44" fill="#ea6c00" rx="6" />
        <text
          x="168"
          y="53"
          fill="#ffffff"
          fontSize="11"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          Hoş Geldiniz
        </text>
        <text
          x="168"
          y="68"
          fill="#fed7aa"
          fontSize="8"
          fontFamily="sans-serif"
        >
          Bugünkü çalışma planınızı görüntüleyin
        </text>
        <rect x="488" y="44" width="176" height="16" fill="#c2570a" rx="8" />
        <text
          x="576"
          y="55"
          textAnchor="middle"
          fill="#ffedd5"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Hedef sınavına 14 gün kaldı
        </text>
        <rect x="156" y="88" width="164" height="44" fill="#1c1a14" rx="5" />
        <text
          x="168"
          y="103"
          fill="#94a3b8"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Bugünkü Hedef
        </text>
        <text
          x="168"
          y="123"
          fill="#e2e8f0"
          fontSize="16"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          4 saat
        </text>
        <rect x="328" y="88" width="164" height="44" fill="#1c1a14" rx="5" />
        <text
          x="340"
          y="103"
          fill="#94a3b8"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Tamamlanan
        </text>
        <text
          x="340"
          y="123"
          fill="#22c55e"
          fontSize="16"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          2.5 saat
        </text>
        <rect x="500" y="88" width="172" height="44" fill="#1c1a14" rx="5" />
        <text
          x="512"
          y="103"
          fill="#94a3b8"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Sınav Sonucu
        </text>
        <text
          x="512"
          y="116"
          fill="#e2e8f0"
          fontSize="11"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          Deneme 4
        </text>
        <text
          x="512"
          y="128"
          fill="#f97316"
          fontSize="11"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          70.00 Net
        </text>
        <text
          x="168"
          y="155"
          fill="#e2e8f0"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          Günlük İlerleme
        </text>
        <text
          x="664"
          y="155"
          textAnchor="end"
          fill="#475569"
          fontSize="7"
          fontFamily="sans-serif"
        >
          20.04.2026
        </text>
        <text
          x="168"
          y="168"
          fill="#94a3b8"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Toplam Çalışma
        </text>
        <text
          x="664"
          y="168"
          textAnchor="end"
          fill="#64748b"
          fontSize="7"
          fontFamily="sans-serif"
        >
          150/240
        </text>
        <rect x="168" y="172" width="492" height="5" fill="#1c1a14" rx="2" />
        <rect x="168" y="172" width="308" height="5" fill="#f97316" rx="2" />
        <text
          x="168"
          y="190"
          fill="#e2e8f0"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          Net Performansı
        </text>
        <rect x="156" y="196" width="516" height="132" fill="#1c1a14" rx="6" />
        {[208, 228, 248, 268, 288].map((y) => (
          <line
            key={y}
            x1="182"
            y1={y}
            x2="630"
            y2={y}
            stroke="#2a2010"
            strokeWidth="0.5"
          />
        ))}
        {[
          ["80", 208],
          ["60", 228],
          ["40", 248],
          ["20", 268],
          ["0", 288],
        ].map(([label, y]) => (
          <text
            key={label}
            x="178"
            y={Number(y) + 2}
            textAnchor="end"
            fill="#475569"
            fontSize="6"
            fontFamily="sans-serif"
          >
            {label}
          </text>
        ))}
        <rect x="196" y="228" width="30" height="60" fill="#ea6c00" rx="3" />
        <text
          x="211"
          y="224"
          textAnchor="middle"
          fill="#fed7aa"
          fontSize="6"
          fontFamily="sans-serif"
        >
          60.5
        </text>
        <text
          x="211"
          y="300"
          textAnchor="middle"
          fill="#475569"
          fontSize="6"
          fontFamily="sans-serif"
        >
          D2
        </text>
        <rect x="244" y="221" width="30" height="67" fill="#ea6c00" rx="3" />
        <text
          x="259"
          y="217"
          textAnchor="middle"
          fill="#fed7aa"
          fontSize="6"
          fontFamily="sans-serif"
        >
          67.0
        </text>
        <text
          x="259"
          y="300"
          textAnchor="middle"
          fill="#475569"
          fontSize="6"
          fontFamily="sans-serif"
        >
          D3
        </text>
        <rect x="292" y="218" width="30" height="70" fill="#f97316" rx="3" />
        <text
          x="307"
          y="214"
          textAnchor="middle"
          fill="#ffedd5"
          fontSize="6"
          fontFamily="sans-serif"
        >
          70.0
        </text>
        <text
          x="307"
          y="300"
          textAnchor="middle"
          fill="#475569"
          fontSize="6"
          fontFamily="sans-serif"
        >
          D4
        </text>
        <rect x="340" y="216" width="30" height="72" fill="#f97316" rx="3" />
        <text
          x="355"
          y="212"
          textAnchor="middle"
          fill="#ffedd5"
          fontSize="6"
          fontFamily="sans-serif"
        >
          72.0
        </text>
        <text
          x="355"
          y="300"
          textAnchor="middle"
          fill="#475569"
          fontSize="6"
          fontFamily="sans-serif"
        >
          D5
        </text>
        <rect x="388" y="213" width="30" height="75" fill="#fb923c" rx="3" />
        <text
          x="403"
          y="209"
          textAnchor="middle"
          fill="#fff7ed"
          fontSize="6"
          fontFamily="sans-serif"
        >
          75.0
        </text>
        <text
          x="403"
          y="300"
          textAnchor="middle"
          fill="#475569"
          fontSize="6"
          fontFamily="sans-serif"
        >
          D6
        </text>
        <polyline
          points="211,228 259,221 307,218 355,216 403,213"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <rect x="480" y="210" width="8" height="8" fill="#f97316" rx="1" />
        <text
          x="492"
          y="218"
          fill="#94a3b8"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Net Puanı
        </text>
        <line
          x1="480"
          y1="228"
          x2="488"
          y2="228"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeDasharray="3 1"
        />
        <text
          x="492"
          y="231"
          fill="#94a3b8"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Trend
        </text>
      </svg>
    </div>
  );
}

function MobileVisual() {
  return (
    <div
      className="w-full h-full overflow-hidden rounded-xl flex items-center justify-center"
      style={{ background: "#0f1117" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 680 360"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="680" height="360" fill="#0f1117" />
        <rect
          x="155"
          y="18"
          width="148"
          height="324"
          fill="#1a1d2e"
          rx="22"
          stroke="#2d1f0e"
          strokeWidth="1.5"
        />
        <rect x="204" y="12" width="50" height="14" fill="#0f1117" rx="7" />
        <rect x="163" y="34" width="132" height="296" fill="#f8fafc" rx="14" />
        <text
          x="172"
          y="46"
          fill="#334155"
          fontSize="6"
          fontFamily="sans-serif"
        >
          12:00
        </text>
        <text
          x="288"
          y="46"
          textAnchor="end"
          fill="#334155"
          fontSize="6"
          fontFamily="sans-serif"
        >
          ●●●
        </text>
        <text
          x="229"
          y="62"
          textAnchor="middle"
          fill="#1e293b"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          Sınav Takibi
        </text>
        <rect x="163" y="66" width="132" height="1" fill="#e2e8f0" />
        <text
          x="172"
          y="82"
          fill="#1e293b"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          Sınav Takibi
        </text>
        <rect x="238" y="73" width="50" height="14" fill="#f97316" rx="7" />
        <text
          x="263"
          y="83"
          textAnchor="middle"
          fill="#fff"
          fontSize="6.5"
          fontFamily="sans-serif"
        >
          + Yeni Ekle
        </text>
        {[
          { label: "Deneme 1", net: "0.00 Net", y: 92 },
          { label: "Deneme 2", net: "60.50 Net", y: 125 },
          { label: "Deneme 3", net: "67.00 Net", y: 158 },
          { label: "Deneme 4", net: "70.00 Net", y: 191 },
        ].map((item) => (
          <g key={item.label}>
            <rect
              x="168"
              y={item.y}
              width="122"
              height="28"
              fill="#ffffff"
              rx="5"
              stroke="#e2e8f0"
              strokeWidth="0.5"
            />
            <text
              x="175"
              y={item.y + 12}
              fill="#334155"
              fontSize="7.5"
              fontFamily="sans-serif"
              fontWeight="600"
            >
              {item.label}
            </text>
            <text
              x="175"
              y={item.y + 22}
              fill="#94a3b8"
              fontSize="6.5"
              fontFamily="sans-serif"
            >
              10 Haziran 2025
            </text>
            <text
              x="283"
              y={item.y + 15}
              textAnchor="end"
              fill="#f97316"
              fontSize="7.5"
              fontFamily="sans-serif"
              fontWeight="600"
            >
              {item.net}
            </text>
          </g>
        ))}
        <rect x="205" y="320" width="48" height="4" fill="#cbd5e1" rx="2" />
        <rect
          x="377"
          y="18"
          width="148"
          height="324"
          fill="#1a1d2e"
          rx="22"
          stroke="#2d1f0e"
          strokeWidth="1.5"
        />
        <rect x="426" y="12" width="50" height="14" fill="#0f1117" rx="7" />
        <rect x="385" y="34" width="132" height="296" fill="#f8fafc" rx="14" />
        <text
          x="394"
          y="46"
          fill="#334155"
          fontSize="6"
          fontFamily="sans-serif"
        >
          12:00
        </text>
        <text
          x="510"
          y="46"
          textAnchor="end"
          fill="#334155"
          fontSize="6"
          fontFamily="sans-serif"
        >
          ●●●
        </text>
        <text
          x="451"
          y="62"
          textAnchor="middle"
          fill="#1e293b"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          Çalışma Planı
        </text>
        <rect x="385" y="66" width="132" height="1" fill="#e2e8f0" />
        <rect
          x="390"
          y="72"
          width="122"
          height="34"
          fill="#ffffff"
          rx="5"
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />
        <text
          x="397"
          y="84"
          fill="#1e293b"
          fontSize="8"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          FİZİK
        </text>
        <text
          x="397"
          y="94"
          fill="#64748b"
          fontSize="6.5"
          fontFamily="sans-serif"
        >
          Toplam Süre: 1 saat 0 dk
        </text>
        <text
          x="397"
          y="102"
          fill="#94a3b8"
          fontSize="6"
          fontFamily="sans-serif"
        >
          Fizik (11:00-12:00)
        </text>
        <rect x="492" y="76" width="14" height="14" fill="#fff7ed" rx="7" />
        <text
          x="499"
          y="86"
          textAnchor="middle"
          fill="#f97316"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          ✓
        </text>
        <rect
          x="390"
          y="111"
          width="122"
          height="34"
          fill="#ffffff"
          rx="5"
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />
        <text
          x="397"
          y="123"
          fill="#1e293b"
          fontSize="8"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          MATEMATİK
        </text>
        <text
          x="397"
          y="133"
          fill="#64748b"
          fontSize="6.5"
          fontFamily="sans-serif"
        >
          Toplam Süre: 1 saat 0 dk
        </text>
        <text
          x="397"
          y="141"
          fill="#94a3b8"
          fontSize="6"
          fontFamily="sans-serif"
        >
          Matematik (09:00-10:00)
        </text>
        <rect x="492" y="115" width="14" height="14" fill="#fff7ed" rx="7" />
        <text
          x="499"
          y="125"
          textAnchor="middle"
          fill="#f97316"
          fontSize="9"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          ✓
        </text>
        <rect
          x="390"
          y="150"
          width="122"
          height="40"
          fill="#fff7ed"
          rx="5"
          stroke="#fed7aa"
          strokeWidth="0.5"
        />
        <text
          x="397"
          y="162"
          fill="#c2570a"
          fontSize="7.5"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          Eklenen Çalışmalar
        </text>
        <text
          x="397"
          y="174"
          fill="#334155"
          fontSize="7"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          Matematik • 60 dk
        </text>
        <text
          x="397"
          y="184"
          fill="#f97316"
          fontSize="6.5"
          fontFamily="sans-serif"
          fontStyle="italic"
        >
          Otomatik plan: Matematik tamam...
        </text>
        <rect
          x="390"
          y="196"
          width="122"
          height="88"
          fill="#ffffff"
          rx="5"
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />
        <text
          x="397"
          y="209"
          fill="#1e293b"
          fontSize="8"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          Haftalık Özet
        </text>
        <text
          x="397"
          y="220"
          fill="#94a3b8"
          fontSize="6.5"
          fontFamily="sans-serif"
        >
          Ders Dağılımı
        </text>
        {[
          { label: "Matematik", val: "60 dk (100%)", fill: "#f97316", w: 108 },
          { label: "Türkçe", val: "0 dk (0%)", fill: null, w: 0 },
          { label: "Fen Bilimleri", val: "0 dk (0%)", fill: null, w: 0 },
          { label: "Sosyal", val: "0 dk (0%)", fill: null, w: 0 },
        ].map((row, i) => (
          <g key={row.label}>
            <text
              x="397"
              y={232 + i * 18}
              fill="#334155"
              fontSize="7"
              fontFamily="sans-serif"
            >
              {row.label}
            </text>
            <text
              x="505"
              y={232 + i * 18}
              textAnchor="end"
              fill="#64748b"
              fontSize="6.5"
              fontFamily="sans-serif"
            >
              {row.val}
            </text>
            <rect
              x="397"
              y={234 + i * 18}
              width="108"
              height="4"
              fill="#e2e8f0"
              rx="2"
            />
            {row.fill && (
              <rect
                x="397"
                y={234 + i * 18}
                width={row.w}
                height="4"
                fill={row.fill}
                rx="2"
              />
            )}
          </g>
        ))}
        <rect x="427" y="320" width="48" height="4" fill="#cbd5e1" rx="2" />
      </svg>
    </div>
  );
}

function EcgVisual() {
  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-xl"
      style={{ background: "#0a0f1e" }}
    >
      <svg viewBox="0 0 300 160" className="w-full h-full">
        <style>{`
  .ecg-line {
    stroke: #f97316;
  }

  .ecg-glow {
    stroke: #f9731666;
  }
`}</style>

        {/* baseline */}
        <line
          x1="0"
          y1="80"
          x2="300"
          y2="80"
          stroke="#ffffff10"
          strokeDasharray="4 4"
        />

        {/* ECG LOOP */}
        <g className="ecg-wrapper">
          {[0, 300, 600].map((offset) => (
            <g key={offset} transform={`translate(${offset},0)`}>
              <path
                className="ecg-glow"
                fill="none"
                strokeWidth="6"
                d="M0 80 L40 80 L60 40 L65 120 L70 80 L120 80 L140 30 L145 130 L150 80 L300 80"
              />
              <path
                className="ecg-line"
                fill="none"
                strokeWidth="2"
                d="M0 80 L40 80 L60 40 L65 120 L70 80 L120 80 L140 30 L145 130 L150 80 L300 80"
              />
            </g>
          ))}
        </g>

        {/* text */}
        <text fill="#f9731688" x="12" y="30">
          BPM 72
        </text>
        <text
          x="200"
          y="30"
          fill="#f9731688"
          fontSize="9"
          fontFamily="monospace"
        >
          RISK 18%
        </text>
      </svg>
    </div>
  );
}

const TERMINAL_LINES = [
  { text: "$ auth_monitor --live", color: "#4b5563" },
  { text: "✗ 192.168.1.42 — attempt 5/5", color: "#ef4444" },
  { text: "⚠ 192.168.1.42 — LOCKED 15m", color: "#f59e0b" },
  { text: "✓ 10.0.0.1 — login success", color: "#22c55e" },
  { text: "✗ 203.0.113.7 — attempt 3/5", color: "#ef4444" },
  { text: "~ rate-limit: throttled", color: "#f59e0b" },
  { text: "✓ bcrypt hash verified", color: "#22c55e" },
];

function TerminalVisual() {
  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "#0d1117",
        padding: "14px",
        boxSizing: "border-box",
        fontFamily: "monospace",
        fontSize: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ef4444",
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#f59e0b",
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />
      </div>
      {TERMINAL_LINES.map((line, i) => (
        <div
          key={i}
          style={{
            color: line.color,
            marginBottom: "3px",
            whiteSpace: "nowrap",
          }}
        >
          {line.text}
        </div>
      ))}
      <div style={{ color: "#4b5563", marginTop: "3px" }}>
  $ <span style={{ display: "inline-block", width: 6, height: 11, background: "#22c55e", verticalAlign: "text-bottom", opacity: 0.8 }}/>
</div>
    </div>
  );
}

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  visual: "web" | "mobile" | "ecg" | "terminal";
};

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "web") return <WebVisual />;
  if (project.visual === "mobile") return <MobileVisual />;
  if (project.visual === "ecg") return <EcgVisual />;
  if (project.visual === "terminal") return <TerminalVisual />;
  return null;
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center section-title section-title-center">
          Projects
        </h2>
        <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
          Some of the projects I&apos;ve worked on
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-6 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-72 rounded-xl mb-6 overflow-hidden">
                <ProjectVisual project={project as Project} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
