import React from "react";

// com.pedasoft.bios.peda360

export const views = [
    {
        name: 'Task List',
        type: 'com.celmino.view.tasklist',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: () => (
            <svg viewBox="0 0 16 16" style={{ color: 'gray' }} width="16" height="16" aria-hidden="true">
                <path stroke="transparent" fill="currentColor"
                    d="M2.667 2a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667zM6 2.667A.667.667 0 1 0 6 4h8a.667.667 0 0 0 0-1.333H6zm-3.333 4a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666zM6 7.333a.667.667 0 0 0 0 1.334h8a.667.667 0 0 0 0-1.334H6zm-3.333 4a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667zM6 12a.667.667 0 0 0 0 1.333h8A.667.667 0 1 0 14 12H6z" />
            </svg>
        ),
        enabled: true
    },
    {
        name: 'Board',
        type: 'com.celmino.view.taskboard',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.board/icon.png',
        icon: () => (
            <svg viewBox="0 0 16 16" style={{ color: 'gray' }} width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd"
                    fill="currentColor"
                    stroke="transparent"
                    d="M2 4.078C2 2.967 2.86 2 4 2h8c1.14 0 2 .967 2 2.078v6.393c0 1.111-.86 2.078-2 2.078H8.667v.04c0 1.11-.86 2.078-2 2.078H4c-1.14 0-2-.967-2-2.079v-8.51zm5.333-.745H4c-.333 0-.667.298-.667.745v8.51c0 .448.334.745.667.745h2.667c.332 0 .666-.297.666-.745V3.333zm1.334 0v7.883H12c.333 0 .667-.297.667-.745V4.078c0-.447-.334-.745-.667-.745H8.667z"
                    clip-rule="evenodd" />

            </svg>
        ),
        enabled: true
    },
    {
        name: 'Gantt',
        type: 'com.tuvalsoft.view.gantt',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.gantt/icon.png',
        icon: () => (
            <svg viewBox="0 0 16 16" style={{ color: 'gray' }} width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd"
                    fill="currentColor"
                    stroke="transparent"
                    d="M1.333 3.333c0-.368.299-.666.667-.666h4A.667.667 0 1 1 6 4H2a.667.667 0 0 1-.667-.667zm0 3.334C1.333 6.298 1.632 6 2 6h9.333a.667.667 0 1 1 0 1.333H2a.667.667 0 0 1-.667-.666zm0 3.333c0-.368.299-.667.667-.667h6.667a.667.667 0 0 1 0 1.334H2A.667.667 0 0 1 1.333 10zm0 3.333c0-.368.299-.666.667-.666h12A.667.667 0 1 1 14 14H2a.667.667 0 0 1-.667-.667z"
                    clip-rule="evenodd" />

            </svg>
        ),
        enabled: true
    },
]