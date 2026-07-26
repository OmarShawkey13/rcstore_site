const fs = require('fs');

const indexContent = fs.readFileSync('D:/rckeyboad/index.html', 'utf8');

const headerEnd = indexContent.indexOf('<main>');
const footerStart = indexContent.indexOf('</main>');

const header = indexContent.substring(0, headerEnd + 6);
const footer = indexContent.substring(footerStart);

const createPage = (filename, title, content) => {
  const newContent = header.replace(/<title>.*<\/title>/, '<title>' + title + ' — RCKeyBoard</title>') + 
    '\n      <section class="features" style="min-height: 50vh;">\n        <div class="section-heading">\n          <h2>' + title + '</h2>\n        </div>\n        <div class="feature-grid" style="grid-template-columns: 1fr; gap: 1.5rem;">\n          <article class="feature-card reveal" style="text-align: left; padding: 2rem;">\n            ' + content + '\n          </article>\n        </div>\n      </section>\n    ' + footer;
  fs.writeFileSync('D:/rckeyboad/' + filename, newContent);
};

createPage('about.html', 'About Us', '<p style="font-size: 1.1rem; line-height: 1.8; color: var(--muted);">RCKeyBoard is a premium Android keyboard app with smart predictions, custom themes, multilingual support, and privacy-first performance. Our mission is to provide the best typing experience on Android devices, prioritizing user privacy and extensive customization.</p>');

createPage('privacy.html', 'Privacy Policy', '<p style="font-size: 1.1rem; line-height: 1.8; color: var(--muted);">Your privacy is important to us. RCKeyBoard does not collect, store, or transmit your personal data without your explicit consent. All learning and prediction processes are performed locally on your device to ensure maximum security. We do not sell data to third parties.</p>');

createPage('terms.html', 'Terms of Service', '<p style="font-size: 1.1rem; line-height: 1.8; color: var(--muted);">By using RCKeyBoard, you agree to these Terms of Service. The app is provided "as is" without any warranties. You are responsible for ensuring that your use of the app complies with all applicable laws and regulations. We reserve the right to update these terms.</p>');

console.log('Pages created successfully.');
