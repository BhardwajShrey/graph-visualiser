# Graph Visualizer

A clean, compact web-based graph visualization tool for computer science problems.

## Features

- **Simple Inputs**: Specify number of nodes, edges list, and graph type (directed/undirected)
- **Compact Layout**: Force-directed algorithm keeps nodes close together to save space
- **Scrollable Canvas**: Supports horizontal and vertical scrolling for larger graphs
- **Dark/Light Mode**: Toggle between themes with the sun/moon button in top-right corner
- **Clean Design**: Eye-friendly color schemes with vibrant orange nodes and maroon directional arrows
- **Real-time Rendering**: Instant visualization on button click
- **Theme Persistence**: Your theme preference is saved automatically

## Usage

1. Open `index.html` in a web browser
2. Enter the number of nodes (n)
3. Enter edges as JSON array: `[[0,1],[1,2],[2,3]]` where `[a,b]` means edge from node `a` to node `b`
4. Toggle "Directed Graph" if you want directional arrows
5. Click "Visualize" to render the graph

## Examples

### Undirected Graph
```
Nodes: 5
Edges: [[0,1],[1,2],[2,3],[3,4],[4,0]]
Directed: Off
```

### Directed Graph
```
Nodes: 8
Edges: [[0,1],[1,2],[2,3],[3,4],[4,0],[1,4],[6,2],[7,5]]
Directed: On
```

## Files

- `index.html` - Main HTML file with UI and styles
- `graph.js` - Graph rendering and force-directed layout algorithm

## Color Schemes

### Light Mode
- Background: Warm cream (#f5f1ea)
- Nodes: Vibrant orange (#ff8c42)
- Arrows: Maroon (#b45454)
- Edges: Light gray (#d1d5db)

### Dark Mode
- Background: Dark warm brown (#1e1b18)
- Nodes: Soft orange (#ff9557)
- Arrows: Soft maroon (#d97676)
- Edges: Dark gray (#4a4743)

Both themes are carefully designed to be easy on the eyes while keeping nodes and arrows visually prominent.

## Browser Support

Works in all modern browsers with HTML5 Canvas support.
