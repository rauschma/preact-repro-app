import { logRenderedView } from 'preact-repro-lib';
import { useState } from 'preact/hooks';

import 'preact/debug';

function MyComponent() {
  const [clickCount, setClickCount] = useState(0);
  return <div>
    <a href="" onClick={handleClick}>{clickCount}</a>
  </div>;

  function handleClick(event: MouseEvent) {
    event.preventDefault();
    setClickCount(clickCount+1);
  }
}

logRenderedView(MyComponent);
