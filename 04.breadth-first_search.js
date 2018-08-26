// ⏳  O(V + E)

/*
  for stracture like this:
  [
    {
      payload: …,
      nodes: [graphIndex, …]
    },
    …
  ]
*/
const bFS = (graph, checkFunc) => {
  let queue = graph[0].nodes;

  const searched = {};

  let found = null;

  while (queue.length) {
    const node = graph[queue.shift()];
    const nodeIndex = graph.indexOf(node);

    if (typeof searched[nodeIndex] === 'undefined') {
      if (checkFunc(node)) {
        found = node;
        break;
      } else {
        queue = [...queue, ...node.nodes];
        searched[nodeIndex] = true;
      }
    }
  }

  return found;
};

//EXAMPLE:

const graph = [
  // root
  {
    payload: 'a',
    nodes: [1, 2, 3]
  },
  // level 2, indices: 1-3
  {
    payload: 'b',
    nodes: [4, 5]
  },
  {
    payload: 'c',
    nodes: [6]
  },
  {
    payload: 'd',
    nodes: [6, 7]
  },
  // level 3, indices: 4-7
  {
    payload: 'e',
    nodes: []
  },
  {
    payload: 'f',
    nodes: []
  },
  {
    payload: 'g',
    nodes: []
  },
  {
    payload: 'h',
    nodes: []
  }
];

const checkFunc = node => node.payload.charCodeAt() === 3 ** 4 + 22;

console.log(bFS(graph, checkFunc)); // → {payload: 'g', nodes: []}
