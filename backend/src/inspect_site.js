async function inspectFull() {
  try {
    const res = await fetch('https://www.mahajanhealthcare.com/');
    const html = await res.text();
    const imgs = html.match(/(?:src|href)=["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi);
    console.log('All image links:', [...new Set(imgs)]);
    
    // Check doctor pages
    const links = html.match(/href=["'](\/[^"']*)["']/gi);
    console.log('Internal links:', [...new Set(links)]);
  } catch (e) {
    console.error(e);
  }
}
inspectFull();
