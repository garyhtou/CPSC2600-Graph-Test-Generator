import { Graph, Edge } from '../types/graphTypes';
import jsgraphs from 'js-graph-algorithms';

export default function calcDfs(graph: jsgraphs.Graph) {
	const dfs = new jsgraphs.DepthFirstSearch(graph, 0);

	return dfs;
}
