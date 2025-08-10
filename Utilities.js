// --- Utils für Ferien ---
const inRange = (iso, {start, end}) => iso >= start && iso <= end;
function findVacation(iso){
  return SCHOOL_BREAKS_HH.find(r => inRange(iso, r));
}
