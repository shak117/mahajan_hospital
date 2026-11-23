async function checkDirectorMarkup() {
  const res = await fetch('https://www.mahajanhealthcare.com/directors/');
  const html = await res.text();
  const abhishekIdx = html.indexOf('Abhishek');
  const mugdhaIdx = html.indexOf('Mugdha');
  console.log('Abhishek context:', html.substring(abhishekIdx - 300, abhishekIdx + 400));
  console.log('Mugdha context:', html.substring(mugdhaIdx - 300, mugdhaIdx + 400));
}
checkDirectorMarkup();
