# JavaScript Data Structures & Algorithms Practice

A comprehensive collection of data structures and algorithms implementations in JavaScript, with a focus on learning, practice, and interview preparation.

## 🚀 Quick Start

This project supports multiple development environments for maximum reproducibility:

### Option 1: Nix Flake (Recommended for reproducibility)

If you have Nix with flakes enabled:

```bash
# Clone the repository
git clone <your-repo-url>
cd js-dsa-practice

# Enter the development shell
nix develop

# Install dependencies and start coding
npm install
npm test
```

### Option 2: Traditional Node.js setup

```bash
# Ensure you have Node.js 18+ installed
node --version

# Install dependencies
npm install

# Run tests
npm test

# Start development mode
npm run dev
```

## 📁 Project Structure

```
js-dsa-practice/
├── flake.nix              # Nix flake for reproducible environment
├── flake.lock             # Lock file for exact dependency versions
├── package.json           # Node.js dependencies and scripts
├── package-lock.json      # Locked npm dependencies
├── .gitignore            # Git ignore patterns
├── jest.config.js        # Jest testing configuration
├── src/
│   ├── data-structures/
│   │   ├── arrays/
│   │   ├── linked-lists/
│   │   ├── stacks/
│   │   ├── queues/
│   │   ├── trees/
│   │   ├── graphs/
│   │   └── hash-tables/
│   ├── algorithms/
│   │   ├── sorting/
│   │   ├── searching/
│   │   ├── graph-algorithms/
│   │   ├── dynamic-programming/
│   │   └── greedy/
│   └── utils/
│       └── helpers.js
├── tests/
│   ├── data-structures/
│   └── algorithms/
├── examples/
│   └── usage-examples/
└── docs/
    ├── complexity-analysis.md
    └── interview-prep.md
```

## 🛠 Development Environment

### Nix Flake Configuration

The `flake.nix` provides a reproducible development environment with:
- **Node.js 18 LTS**: Stable JavaScript runtime
- **npm**: Package management
- **Git**: Version control
- **Development shell**: Consistent environment across machines

### Available Scripts

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format

# Development mode with auto-restart
npm run dev

# Benchmark algorithms
npm run benchmark
```

## 📚 Implemented Data Structures

### Linear Data Structures
- **Arrays**: Dynamic arrays, static arrays
- **Linked Lists**: Singly, doubly, circular
- **Stacks**: Array-based, linked-list-based
- **Queues**: Simple queue, circular queue, priority queue, deque

### Non-Linear Data Structures
- **Trees**: Binary tree, BST, AVL tree, Red-Black tree, Trie
- **Heaps**: Min heap, max heap, binary heap
- **Graphs**: Adjacency list, adjacency matrix, weighted graphs
- **Hash Tables**: Separate chaining, open addressing

## 🔍 Implemented Algorithms

### Sorting Algorithms
- **Comparison-based**: Bubble, Selection, Insertion, Merge, Quick, Heap
- **Non-comparison-based**: Counting, Radix, Bucket

### Searching Algorithms
- **Linear Search**: Basic, recursive
- **Binary Search**: Iterative, recursive, variations
- **Tree Traversals**: DFS (inorder, preorder, postorder), BFS

### Graph Algorithms
- **Traversal**: DFS, BFS
- **Shortest Path**: Dijkstra's, Bellman-Ford, Floyd-Warshall
- **Minimum Spanning Tree**: Kruskal's, Prim's
- **Topological Sorting**: Kahn's algorithm, DFS-based

### Dynamic Programming
- **Classic Problems**: Fibonacci, Knapsack, LCS, LIS
- **Advanced**: Edit distance, coin change, matrix chain multiplication

## 🧪 Testing

Tests are written using Jest and follow the AAA (Arrange, Act, Assert) pattern:

```javascript
// Example test structure
describe('Binary Search Tree', () => {
  let bst;
  
  beforeEach(() => {
    bst = new BinarySearchTree();
  });
  
  test('should insert and find elements correctly', () => {
    // Arrange
    const values = [50, 30, 70, 20, 40];
    
    // Act
    values.forEach(val => bst.insert(val));
    
    // Assert
    expect(bst.find(30)).toBe(true);
    expect(bst.find(100)).toBe(false);
  });
});
```

Run specific test suites:
```bash
# Test only data structures
npm test -- data-structures

# Test only algorithms
npm test -- algorithms

# Test with verbose output
npm test -- --verbose
```

## 📊 Complexity Analysis

Each implementation includes comprehensive complexity analysis:

```javascript
/**
 * Binary Search Tree - Insert Operation
 * 
 * Time Complexity:
 * - Best Case: O(log n) - balanced tree
 * - Average Case: O(log n)
 * - Worst Case: O(n) - degenerate tree (linked list)
 * 
 * Space Complexity: O(1) iterative, O(log n) recursive
 */
```

## 🎯 Interview Preparation

The `docs/interview-prep.md` includes:
- Common coding patterns
- Problem-solving strategies
- Time and space complexity cheat sheets
- Frequently asked questions from top tech companies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-algorithm`
3. Follow the existing code style and add tests
4. Ensure all tests pass: `npm test`
5. Submit a pull request

### Code Style Guidelines
- Use meaningful variable and function names
- Add JSDoc comments for all public methods
- Include complexity analysis for algorithms
- Write comprehensive tests
- Follow ES6+ JavaScript standards

## 📖 Learning Resources

- [Big O Notation Guide](docs/complexity-analysis.md)
- [JavaScript Specific Optimizations](docs/js-optimizations.md)
- [Interview Problem Patterns](docs/interview-prep.md)
- [Visualization Tools](docs/visualization.md)

## 🔧 Nix Development

### Prerequisites
- [Nix](https://nixos.org/download.html) with flakes enabled
- Enable flakes in your Nix configuration:
  ```bash
  # Add to ~/.config/nix/nix.conf or /etc/nix/nix.conf
  experimental-features = nix-command flakes
  ```

### Flake Commands
```bash
# Enter development shell
nix develop

# Run a specific command in the flake environment
nix develop -c npm test

# Update flake dependencies
nix flake update

# Show flake info
nix flake show
```

## 📋 Requirements

### Minimum Requirements
- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0

### With Nix
- **Nix**: >= 2.4 with flakes support
- All other dependencies managed automatically

## 📄 License

MIT License - feel free to use this code for learning and practice!

## 🙋‍♂️ FAQ

**Q: Why use Nix flakes?**
A: Nix flakes provide reproducible development environments, ensuring everyone gets the exact same Node.js version and dependencies regardless of their system.

**Q: Can I use this without Nix?**
A: Absolutely! The traditional npm setup works perfectly fine. Nix is just an optional layer for reproducibility.

**Q: How do I add a new algorithm?**
A: Create the implementation in the appropriate `src/` subdirectory, add comprehensive tests in `tests/`, and update this README.

**Q: Are there performance benchmarks?**
A: Yes! Run `npm run benchmark` to see performance comparisons between different implementations.

---

Happy coding! 🚀

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.
