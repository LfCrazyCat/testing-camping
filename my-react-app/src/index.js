import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', () => {
  // Header (dersom du trenger en - ikke vist i din CSS)
  const header = document.createElement('header');
  // ... Sette opp header om nødvendig ...

  // Navigasjonsmenyen
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const tabs = ['HTML', 'CSS', 'JavaScript', 'React', 'Sanity and headless CMS'];

  tabs.forEach((tab, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = tab;
    a.href = '#'; // Her kan du sette inn korrekt lenke til hver seksjon
    if (index === 0) {
      a.classList.add('active'); // Sett den første fanen som aktiv
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // Hovedinnholdet
  const main = document.createElement('main');
  const section = document.createElement('section');
  
  const title = document.createElement('h1');
  title.textContent = 'HTML';
  section.appendChild(title);
  
  const paragraph = document.createElement('p');
  paragraph.textContent = 'HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage struktur til nettside- og applikasjonsgrensesnitt.';
  section.appendChild(paragraph);
  
  const linkList = document.createElement('ul');
  
  const links = [
    { text: 'W3Schools', href: 'https://www.w3schools.com' },
    { text: 'HTML Living Standard', href: 'https://html.spec.whatwg.org/' },
    { text: 'HTML.com Tutorials', href: 'https://www.html.com/tutorials/' }
  ];
  
  links.forEach(link => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.textContent = link.text;
    anchor.target = '_blank';
    listItem.appendChild(anchor);
    linkList.appendChild(listItem);
  });
  
  section.appendChild(linkList);
  main.appendChild(section);

  // Legge til alle elementene til body
  document.body.appendChild(nav); // Legger til navigasjonsmenyen
  document.body.appendChild(main); // Legger til hovedinnholdet

  // ... Legg til header hvis du har det ...
});