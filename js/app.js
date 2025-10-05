// Пример локального индекса для поиска
const contentIndex = [
  { id: 1, title: "Карта", text: "Страница с картой", url: "map.html" },
  { id: 2, title: "Здоровье", text: "Советы по здоровью", url: "health.html" },
  // ...другие страницы
];

// Поиск по сайту
document.getElementById('search').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value.toLowerCase();
    const results = contentIndex.filter(item => item.title.toLowerCase().includes(query));
    alert(`Результаты поиска: ${results.map(r => r.title).join(', ')}`);
  }
});

// Геолокация
document.getElementById('geolocation-btn').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert(`Ваши координаты: ${position.coords.latitude}, ${position.coords.longitude}`);
      },
      () => {
        alert('Геолокация недоступна.');
      }
    );
  } else {
    alert('Ваш браузер не поддерживает геолокацию.');
  }
});
