// HW9 – COSC 2328 – Professor McCurry
// Implemented by: Amelia Jaimes Alcauter

async function loadCredentials() {
    const res = await fetch("/hw9/credentials");
    const data = await res.json();

    const dl = document.getElementById('credentials');
    dl.innerHTML = '';

    Object.entries(data).forEach(([key, value]) => {
    const dt = document.createElement('dt');
    dt.textContent = key;

    const dd = document.createElement('dd');
    dd.textContent = value;

    dl.appendChild(dt);
    dl.appendChild(dd);
  });
}

async function loadCases() {
  const response = await fetch('/hw9/cases');
  const cases = await response.json();

  const list = document.getElementById('case-list');
  list.innerHTML = '';

  if (cases.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty-msg';
    li.textContent = 'No cases filed yet.';
    list.appendChild(li);
    return;
  }

  cases.forEach((c) => {
    const li = document.createElement('li');

    const fields = [
      ['case-id', c.id],
      ['case-suspect', c.suspect],
      ['case-location', c.location],
      ['case-notes', c.notes],
      ['case-ts', c.timestamp],
    ];

    fields.forEach(([className, value]) => {
      const span = document.createElement('span');
      span.className = className;
      span.textContent = value;
      li.appendChild(span);
    });

    list.appendChild(li);
  });
}

document.getElementById('log-btn').addEventListener('click', async () => {
  const suspectInput = document.getElementById('suspect');
  const locationInput = document.getElementById('location');
  const notesInput = document.getElementById('notes');
  const status = document.getElementById('log-status');

  const suspect = suspectInput.value;
  const location = locationInput.value;
  const notes = notesInput.value;

  const response = await fetch('/hw9/cases', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ suspect, location, notes }),
  });

  if (response.status === 400) {
    const err = await response.json();
    status.textContent = err.error;
    return;
  }

  if (response.ok) {
    suspectInput.value = '';
    locationInput.value = '';
    notesInput.value = '';
    status.textContent = '';
    await loadCases();
  }
});

// Load data as soon as the page opens
loadCredentials();
loadCases();