import React from 'react';
import { BoardSections } from './types';
export declare function getItemsByStatus(items: any[], status: any, groupBy: string): any[];
export declare function getItemById(tasks: any[], id: string): any;
export declare function getStatusById(statuses: any[], id: string): any;
export declare function initializeBoard(status: any[], items: any[], groupBy: string): BoardSections;
export declare const findBoardSectionContainer: (boardSections: any, id: string) => string;
declare const BoardSectionList: ({ items, status }: {
    items: any;
    status: any;
}) => React.JSX.Element;
export default BoardSectionList;
