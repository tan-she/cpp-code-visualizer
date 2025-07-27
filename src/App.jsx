import { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [code, setCode] = useState(
    '#include <iostream>\n\nint main() {\n  int x = 5;\n  std::cout << x;\n  return 0;\n}'
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>C++ Code Visualizer</h1>
      <div style={{ height: '400px', border: '1px solid #333', borderRadius: '4px' }}>
        <Editor
          defaultLanguage="cpp"
          value={code}
          onChange={(newCode) => setCode(newCode || '')}
          theme="vs-dark"
          options={{ fontSize: 14 }}
        />
      </div>
    </div>
  );
}

export default App;