async function inspectDirectors() {
  try {
    const res = await fetch('https://www.mahajanhealthcare.com/directors/');
    const html = await res.text();
    const imgs = html.match(/(?:src|href)=["']([^"']+\.(?:png|jpg|jpeg|webp|avif|svg))["']/gi);
    console.log('Directors images:', [...new Set(imgs)]);
  } catch (e) {
    console.error(e);
  }
}
inspectDirectors();
