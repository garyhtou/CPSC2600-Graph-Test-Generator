export interface Edge {
	source: number;
	target: number;
	weight: number;
}

export interface Graph {
	numVertices: number;
	edges: Edge[];
}
