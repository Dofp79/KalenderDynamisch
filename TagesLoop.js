// bereits vorhanden:
const isHoliday = Object.prototype.hasOwnProperty.call(holidayMap, iso);

// NEU: Ferien Hamburg prüfen
const vac = findVacation(iso);
if (vac) {
  cell.classList.add('vacation');
  // optionaler Labeltext unten (kompakt halten):
  if (!isHoliday) {
    cell.insertAdjacentHTML('beforeend',
      `<div class="label" title="${vac.name}">${vac.name}</div>`);
  } else {
    // Wenn auch Feiertag, setze Tooltip zusammen:
    cell.title = (cell.title ? cell.title + ' • ' : '') + vac.name;
  }
}
