import { Graph, Edge } from '../types/graphTypes';
import jsgraphs from 'js-graph-algorithms';

export default function createGraph(graph: Graph) {
	const g = new jsgraphs.Graph(graph.numVertices);
	const gw = new jsgraphs.WeightedGraph(graph.numVertices);
	for (const edge of graph.edges) {
		g.addEdge(edge.source, edge.target);
		gw.addEdge(new jsgraphs.Edge(edge.source, edge.target, edge.weight));
	}
	return { weightedGraph: gw, graph: g };
}
