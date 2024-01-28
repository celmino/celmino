/// <reference types="react" />
import { GraphvizOptions } from 'd3-graphviz';
interface IGraphvizProps {
    /**
     * A string containing a graph representation using the Graphviz DOT language.
     * @see https://graphviz.org/doc/info/lang.html
     */
    dot: string;
    /**
     * Options to pass to the Graphviz renderer.
     */
    options?: GraphvizOptions;
    /**
     * The classname to attach to this component for styling purposes.
     */
    className?: string;
}
declare const Graphviz: ({ dot, className, options }: IGraphvizProps) => JSX.Element;
export { Graphviz, IGraphvizProps };
export default Graphviz;
