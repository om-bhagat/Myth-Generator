function generateMyth() {
    const hero = document.getElementById('hero').value || 'a mysterious hero';
    const item = document.getElementById('item').value || 'a legendary relic';
    const place = document.getElementById('place').value || 'a forgotten land';
    const villain = document.getElementById('villain').value || 'a shadowy foe';

    const story = `
    In the ancient realm of ${place}, there lived a brave soul named ${hero}. One day, darkness spread across the land, summoned by the dreaded ${villain}. Armed only with the mystical ${item}, ${hero} ventured forth, facing trials of fire, wind, and a shadow. In a final clash atop the moonlit peak, ${hero} raised the ${item} high, banishing the ${villain} and restoring peace to the realm. From that day on, ${hero}'s legend echoed through time.
    `;
    document.getElementById('output').innerText = story.trim();
}