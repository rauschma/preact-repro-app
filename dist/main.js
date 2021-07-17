import { jsx as _jsx } from "preact/jsx-runtime";
import { logRenderedView } from 'preact-repro-lib';
import { useState } from 'preact/hooks';
import 'preact/debug';
function MyComponent() {
    const [clickCount, setClickCount] = useState(0);
    return _jsx("div", { children: _jsx("a", Object.assign({ href: "", onClick: handleClick }, { children: clickCount }), void 0) }, void 0);
    function handleClick(event) {
        event.preventDefault();
        setClickCount(clickCount + 1);
    }
}
logRenderedView(MyComponent);
//# sourceMappingURL=main.js.map