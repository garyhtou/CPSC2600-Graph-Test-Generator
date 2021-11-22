import { Graph, Edge } from '../types/graphTypes';

export default function serializeGraph(graph: Graph): string {
	var output = '';

	output += graph.numVertices + '\n';
	for (const edge of graph.edges) {
		output += edge.source + ' ' + edge.target + ' ' + edge.weight + '\n';
	}

	return output;
}
