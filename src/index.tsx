import { createRoot } from 'react-dom/client';
import { hydrate } from 'react-dom';
import Application from './app/Application';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  if (rootElement.hasChildNodes()) {
    hydrate(<Application />, rootElement);
  } else {
    root.render(<Application />);
  }
}
