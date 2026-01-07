# Graph Algorithm Visualization - Implementation Plan

## Phase 1: Foundation & Infrastructure

### 1.1 Algorithm State Management
- [ ] Create algorithm state object to track:
  - Current algorithm running
  - Execution state (idle, running, paused, completed)
  - Current step index
  - History of all steps
  - Node/edge states (visited, current, queued, path, etc.)
- [ ] Implement step history array to store each visualization state
- [ ] Add method to serialize/deserialize state for step navigation

### 1.2 Visual State System
- [ ] Define color scheme for algorithm states:
  - Default (unvisited) nodes
  - Current node being processed
  - Visited nodes
  - Queued/frontier nodes
  - Path/result nodes
  - Edges: default, active, in-path
- [ ] Update graph.js to support multi-state node rendering
- [ ] Add edge highlighting capability
- [ ] Implement smooth color transitions

### 1.3 UI Layout Restructuring
- [ ] Add algorithm control panel below input panel:
  - Algorithm selector dropdown
  - Start node input (for BFS, DFS, Dijkstra)
  - End node input (for Dijkstra)
  - Run button
- [ ] Add step control bar:
  - Reset button
  - Step backward button
  - Play/Pause button
  - Step forward button
  - Speed slider (slow/medium/fast)
- [ ] Add status display area:
  - Current step description
  - Algorithm progress
  - Data structure state (queue/stack contents)
  - Distance values (for Dijkstra)

## Phase 2: Algorithm Core Implementation

### 2.1 BFS (Breadth-First Search)
- [ ] Implement BFS algorithm with step generation:
  - Initialize: mark start node
  - Each step: dequeue, mark as visited, show neighbors
  - Track queue state at each step
  - Generate step descriptions
- [ ] Handle disconnected graphs (show unreachable nodes)
- [ ] Add visualization for queue (FIFO order)
- [ ] Test with various graph structures

### 2.2 DFS (Depth-First Search)
- [ ] Implement DFS algorithm with step generation:
  - Initialize: mark start node
  - Each step: pop from stack, mark as visited, push unvisited neighbors
  - Track stack state at each step
  - Generate step descriptions
- [ ] Add recursion tree visualization (optional enhancement)
- [ ] Show backtracking steps clearly
- [ ] Test with trees and cyclic graphs

### 2.3 Dijkstra's Shortest Path
- [ ] Implement Dijkstra algorithm with step generation:
  - Initialize: set all distances to infinity, start to 0
  - Each step: pick min distance node, update neighbors
  - Track distance updates
  - Generate step descriptions with distance values
- [ ] Add weighted edge support (if not already present):
  - Update edge input format to support weights
  - Default weight = 1 for unweighted graphs
  - Display weights on edges
- [ ] Highlight shortest path at completion
- [ ] Show distance table/values on nodes
- [ ] Test with weighted and unweighted graphs

### 2.4 Topological Sort
- [ ] Implement topological sort with step generation:
  - Check if graph is DAG (directed acyclic graph)
  - Calculate in-degrees for all nodes
  - Each step: remove node with in-degree 0
  - Track ordering and in-degree updates
  - Generate step descriptions
- [ ] Add validation for directed graphs
- [ ] Show error if cycle detected
- [ ] Display final topological order
- [ ] Test with DAGs and cyclic graphs

## Phase 3: Step Control System

### 3.1 Playback Engine
- [ ] Implement play functionality:
  - Auto-advance through steps at selected speed
  - Update visualization at each step
  - Show current step description
- [ ] Implement pause functionality:
  - Stop auto-advance
  - Maintain current state
- [ ] Add speed control:
  - Slow: 1 step per 1.5 seconds
  - Medium: 1 step per 0.8 seconds
  - Fast: 1 step per 0.4 seconds

### 3.2 Navigation Controls
- [ ] Implement step forward:
  - Move to next step in history
  - Update visualization
  - Disable at end
- [ ] Implement step backward:
  - Move to previous step in history
  - Restore previous visualization state
  - Disable at start
- [ ] Implement reset:
  - Clear all algorithm state
  - Restore original graph visualization
  - Reset controls

### 3.3 Progress Tracking
- [ ] Add progress indicator (e.g., "Step 5/23")
- [ ] Show data structure state (queue/stack contents) at each step
- [ ] Display current node being processed
- [ ] Show relevant metrics (distances, in-degrees, etc.)

## Phase 4: UI/UX Enhancements

### 4.1 Algorithm Selection Panel
- [ ] Create dropdown with algorithm options:
  - BFS - Breadth-First Search
  - DFS - Depth-First Search
  - Dijkstra - Shortest Path
  - Topological Sort
- [ ] Show/hide relevant inputs based on selection:
  - Start node for BFS, DFS, Dijkstra
  - End node for Dijkstra
  - No extra inputs for Topological Sort
- [ ] Add algorithm description/hint text

### 4.2 Step Control Bar Styling
- [ ] Style control buttons with icons:
  - Reset: ↺
  - Step Back: ◄
  - Play: ▶ / Pause: ⏸
  - Step Forward: ►
- [ ] Add speed slider with labels
- [ ] Make controls responsive and accessible
- [ ] Disable controls when not applicable

### 4.3 Status Display
- [ ] Create clean status panel showing:
  - Current step number and total steps
  - Current action description
  - Data structure visualization (queue/stack)
  - Node distances (for Dijkstra)
  - In-degrees (for Topological Sort)
- [ ] Style with consistent theme (light/dark mode support)
- [ ] Add smooth transitions

### 4.4 Visual Feedback
- [ ] Add animations for node state changes
- [ ] Highlight current edge being explored
- [ ] Show path highlighting for Dijkstra result
- [ ] Add subtle pulse effect for current node
- [ ] Ensure colors work well in both themes

## Phase 5: Weighted Edge Support (for Dijkstra)

### 5.1 Input Format Update
- [ ] Support weighted edge format: `[[0,1,5],[1,2,3]]`
- [ ] Support unweighted format (default weight = 1): `[[0,1],[1,2]]`
- [ ] Parse both formats correctly
- [ ] Add example text showing weighted format

### 5.2 Visual Weight Display
- [ ] Render weight labels on edges
- [ ] Position labels at edge midpoint
- [ ] Make labels readable in both themes
- [ ] Handle overlapping labels gracefully

### 5.3 Weight Validation
- [ ] Validate weights are positive numbers
- [ ] Show error for invalid weights
- [ ] Handle missing weights (default to 1)

## Phase 6: Error Handling & Validation

### 6.1 Input Validation
- [ ] Validate start node exists in graph
- [ ] Validate end node exists (for Dijkstra)
- [ ] Check graph is directed (for Topological Sort)
- [ ] Detect cycles in directed graph (for Topological Sort)
- [ ] Show user-friendly error messages

### 6.2 Edge Cases
- [ ] Handle single node graph
- [ ] Handle disconnected graphs
- [ ] Handle graphs with no edges
- [ ] Handle self-loops
- [ ] Handle multiple edges between same nodes

### 6.3 User Feedback
- [ ] Show loading state when computing algorithm
- [ ] Show completion message when done
- [ ] Highlight unreachable nodes (for BFS, DFS, Dijkstra)
- [ ] Show "No path exists" message if applicable

## Phase 7: Testing & Polish

### 7.1 Algorithm Testing
- [ ] Test BFS with various graph structures
- [ ] Test DFS with trees and cyclic graphs
- [ ] Test Dijkstra with weighted graphs
- [ ] Test Topological Sort with DAGs
- [ ] Test error cases and edge cases

### 7.2 UI Testing
- [ ] Test all controls (play, pause, step, reset)
- [ ] Test speed slider
- [ ] Test algorithm switching
- [ ] Test with different graph sizes
- [ ] Test dark/light mode compatibility

### 7.3 Performance Optimization
- [ ] Optimize rendering for large graphs
- [ ] Ensure smooth animations
- [ ] Test with 50+ node graphs
- [ ] Profile and optimize bottlenecks

### 7.4 Documentation
- [ ] Update README.md with algorithm features
- [ ] Add usage examples for each algorithm
- [ ] Document weighted edge format
- [ ] Add keyboard shortcuts if implemented
- [ ] Create visual examples/screenshots

## Phase 8: Optional Enhancements

### 8.1 Additional Features
- [ ] Add keyboard shortcuts (Space: play/pause, Arrow keys: step)
- [ ] Add "Jump to Step" input
- [ ] Add algorithm comparison mode (side-by-side)
- [ ] Add export animation as GIF
- [ ] Add graph presets for each algorithm (example graphs)

### 8.2 Educational Features
- [ ] Show pseudocode alongside visualization
- [ ] Highlight current line of pseudocode
- [ ] Add time/space complexity information
- [ ] Add "Learn More" links for each algorithm
- [ ] Add quiz questions after completion

---

## Implementation Priority

**Start Here (Core Functionality):**
1. Phase 1.1-1.2: State management and visual system
2. Phase 2.1: BFS implementation
3. Phase 3.1-3.2: Basic step controls
4. Phase 4.1-4.2: UI for algorithm selection and controls

**Next (Complete Algorithm Suite):**
5. Phase 2.2: DFS implementation
6. Phase 5: Weighted edges for Dijkstra
7. Phase 2.3: Dijkstra implementation
8. Phase 2.4: Topological Sort implementation

**Then (Polish):**
9. Phase 4.3-4.4: Enhanced status display and visuals
10. Phase 6: Error handling and validation
11. Phase 7: Testing and polish

**Finally (Nice-to-Have):**
12. Phase 8: Optional enhancements

---

## Notes

- Each checkbox represents a discrete task that can be completed independently
- Test each algorithm thoroughly before moving to the next
- Maintain dark/light theme compatibility throughout
- Keep the compact, space-efficient design philosophy
- Ensure mobile responsiveness where possible
- Commit frequently with descriptive messages
