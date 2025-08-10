/* =========================
   Schulferien Hamburg (SCHOOL_BREAKS_HH)
   Quelle: Hamburg.de / offizielle PDF (Schuljahre 2024/25–2029/30)
   - Halbjahrespause = 1 Tag
   - Himmelfahrt/Pfingsten = "Maiferien" Block in HH
   ========================= */
// Hilfsformat: { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD', name: '...' }

const SCHOOL_BREAKS_HH = [
  // ---------- 2025 ----------
  { start:'2025-01-01', end:'2025-01-03', name:'Weihnachtsferien 2024/25' }, // Rest aus 2024/25
  { start:'2025-01-31', end:'2025-01-31', name:'Halbjahrespause' },
  { start:'2025-03-10', end:'2025-03-21', name:'Frühjahrsferien' },
  { start:'2025-05-26', end:'2025-05-30', name:'Himmelfahrt/Pfingsten' },
  { start:'2025-07-24', end:'2025-09-03', name:'Sommerferien' },
  { start:'2025-10-20', end:'2025-10-31', name:'Herbstferien' },
  { start:'2025-12-17', end:'2025-12-31', name:'Weihnachtsferien 2025/26' },

  // ---------- 2026 ----------
  { start:'2026-01-01', end:'2026-01-01', name:'Weihnachtsferien 2025/26 (Fortsetzung)' },
  { start:'2026-01-30', end:'2026-01-30', name:'Halbjahrespause' },
  { start:'2026-03-02', end:'2026-03-13', name:'Frühjahrsferien' },
  { start:'2026-05-11', end:'2026-05-15', name:'Himmelfahrt/Pfingsten' },
  { start:'2026-07-09', end:'2026-08-19', name:'Sommerferien' },
  { start:'2026-10-19', end:'2026-10-30', name:'Herbstferien' },
  { start:'2026-12-21', end:'2026-12-31', name:'Weihnachtsferien 2026/27' },

  // ---------- 2027 ----------
  { start:'2027-01-01', end:'2027-01-01', name:'Weihnachtsferien 2026/27 (Fortsetzung)' },
  { start:'2027-01-29', end:'2027-01-29', name:'Halbjahrespause' },
  { start:'2027-03-01', end:'2027-03-12', name:'Frühjahrsferien' },
  { start:'2027-05-07', end:'2027-05-14', name:'Himmelfahrt/Pfingsten' },
  { start:'2027-07-01', end:'2027-08-11', name:'Sommerferien' },
  { start:'2027-12-20', end:'2027-12-31', name:'Weihnachtsferien 2027/28' }
];
