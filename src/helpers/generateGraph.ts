import { Edge, Graph } from '../types/graphTypes';

export default function generateTextGraph(): Graph {
	const numVertices = Math.floor(Math.random() * 20 + 1); // random, between 1 and 20

	var disconnectedVertices = [...Array(numVertices).keys()].map(
		() => Math.random() < 0.07
	);

	var edges: Edge[] = [];
	for (let i = 0; i < numVertices; i++) {
		var hasEdge = [...Array(numVertices).keys()].map(() => Math.random() < 0.3);
		for (let j = 0; j < numVertices; j++) {
			if (
				hasEdge[j] &&
				!disconnectedVertices[i] &&
				!disconnectedVertices[j] &&
				i !== j
			) {
				edges.push({
					source: i,
					target: j,
					weight: Math.floor(Math.random() * 15 + 1),
				});
			}
		}
	}

	// shuffle
	for (let i = 0; i < edges.length; i++) {
		const shouldSwap = Math.random() > 0.5;

		if (!shouldSwap) continue;

		edges[i] = {
			source: edges[i].target,
			target: edges[i].source,
			weight: edges[i].weight,
		};
	}
	for (let i = 0; i < edges.length; i++) {
		const shouldSwap = Math.random() > 0.5;
		const randIndex = Math.floor(Math.random() * edges.length);

		if (!shouldSwap) continue;

		const curr = edges[i];
		edges[i] = edges[randIndex];
		edges[randIndex] = curr;
	}

	return { numVertices, edges };
}
