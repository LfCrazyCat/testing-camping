import React from 'react';

function MainContent() {
  const links = [
    { text: 'W3Schools', href: 'https://www.w3schools.com' },
    { text: 'HTML Living Standard', href: 'https://html.spec.whatwg.org/' },
    { text: 'HTML.com Tutorials', href: 'https://www.html.com/tutorials/' }
  ];

  return (
    <main>
      <section>
        <h1>HTML</h1>
        <p>HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage struktur til nettside- og applikasjonsgrensesnitt.</p>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MainContent;