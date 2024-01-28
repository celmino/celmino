export const opas = [
   
    {
        name: 'Figma Embedded',
        type: 'com.celmino.applet.task',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView:'com.tuvalsoft.view.tasklist',
        defaultViewTitle:'Task List',
        description: 'Add your Figma designs as a document in celmino!',
        //icon:'\\d1e4',
        //iconBackColor:'#66B47C',
       //icon: SvgIcon('svg-sprite-cu2-list-ul'),
        image: '/images/Figma_Embedded_-_Logo_Export.png',
        enabled: true,
        settings: {
            stageSet: 'default'
        }
    },
    {
        name: 'HTML Embedded',
        type: 'com.celmino.applet.task',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView:'com.tuvalsoft.view.tasklist',
        defaultViewTitle:'Task List',
        description: 'Add your Figma designs as a document in celmino!',
        //icon:'\\d1e4',
        //iconBackColor:'#66B47C',
       //icon: SvgIcon('svg-sprite-cu2-list-ul'),
        image: '/images/Embedded_HTML_-_Icon.avif',
        enabled: true,
        settings: {
            stageSet: 'default'
        }
    },
    {
        name: 'IFrame Embedded',
        type: 'com.celmino.applet.task',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView:'com.tuvalsoft.view.tasklist',
        defaultViewTitle:'Task List',
        description: 'Add your Figma designs as a document in celmino!',
        //icon:'\\d1e4',
        //iconBackColor:'#66B47C',
       //icon: SvgIcon('svg-sprite-cu2-list-ul'),
        image: '/images/iFrame_Embedded_-_Logo_Export.avif',
        enabled: true,
        settings: {
            stageSet: 'default'
        }
    },
    
     {
        name: 'Decision Rules',
        type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
       icon:'\\d1e6',
       iconBackColor:'#66B47C',
        //image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
    {
        name: 'OKR',
        type: 'com.tuvalsoft.applet.okr',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView:'com.okr.view.objectives',
        defaultViewTitle:'Objectives',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon:'\\d1e5',
        iconBackColor:'#66B47C',
        //icon: SvgIcon('svg-sprite-cu2-view-1'),
       // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
    {
        name: 'Document',
        type: 'com.tuvalsoft.applet.document',
        broker: 'com.tuvalsoft.broker.document',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e2',
        iconBackColor:'#66B47C',
        //image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
    {
        name: 'Meeting',
        type: 'com.tuvalsoft.applet.meeting',
        broker:'com.tuvalsoft.broker.realm',
        defaultView:'com.meeting.view.meetings-view',
        defaultViewTitle:'Meetings',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d25f',
        iconBackColor:'#66B47C',
       // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
   /*  {
        name: 'Risk Assessment',
        type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d3c9',
        iconBackColor:'#66B47C',
        enabled: true
    }, */
    {
        name: 'Strategy',
        type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor:'#66B47C',
        enabled: true
    }




    /* ,
    {
        name: 'Calendar',
        type: 'com.tuvalsoft.opa.calendar',
        description: 'Plan your meetings or watch your due dates in your app with calendar.',
        image: '/static/opa/images/com.tuvalsoft.opa.calendar/icon.png',
    },
    {
        name: 'Timeline',
        type: 'com.tuvalsoft.opa.timeline',
        description: 'Plan your meetings or watch your due dates in your app with calendar.',
        image: '/static/opa/images/com.tuvalsoft.opa.timeline/icon.png',
    },
    {
        name: 'Gantt',
        type: 'com.tuvalsoft.opa.gantt',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.gantt/icon.png',
        enabled: true
    },
    {
        name: 'Team',
        type: 'com.tuvalsoft.opa.team',
        description: 'Plan your meetings or watch your due dates in your app with calendar.',
        image: '/static/opa/images/com.tuvalsoft.opa.team/icon.png',
    },
    {
        name: 'Board',
        type: 'com.tuvalsoft.opa.board',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.board/icon.png',
    },
    {
        name: 'Whiteboard',
        type: 'com.tuvalsoft.opa.whiteboard',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.whiteboard/icon.png',
    },
    {
        name: 'Table',
        type: 'com.tuvalsoft.opa.table',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.table/icon.png',
    },
    {
        name: 'Activity',
        type: 'com.tuvalsoft.opa.activity',
        image: '/static/opa/images/com.tuvalsoft.opa.activity/icon.png',
    },

    {
        name: 'Form',
        type: 'com.tuvalsoft.opa.form',
        image: '/static/opa/images/com.tuvalsoft.opa.form/icon.png',
    },
    {
        name: 'Doc',
        type: 'com.tuvalsoft.opa.doc',
        image: '/static/opa/images/com.tuvalsoft.opa.doc/icon.png',
    },
    {
        name: 'Chat',
        type: 'com.tuvalsoft.opa.chat',
        image: '/static/opa/images/com.tuvalsoft.opa.chat/icon.png',
    },
    {

        name: 'Workload',
        description: 'Spreadsheet is a opa for computation, organization, analysis and storage of data in tabular form.',
        type: 'com.tuvalsoft.opa.workload',
        image: '/static/opa/images/com.tuvalsoft.opa.workload/icon.png',
    },
    {

        name: 'Spreadsheet',
        description: 'Spreadsheet is a opa for computation, organization, analysis and storage of data in tabular form.',
        type: 'com.tuvalsoft.opa.spreadsheet',
        image: '/static/opa/images/com.tuvalsoft.opa.spreadsheet/icon.png',
    },
    {
        name: 'Map',
        type: 'com.tuvalsoft.opa.map',
        image: '/static/opa/images/com.tuvalsoft.opa.map/icon.png',
    },
    {

        name: 'Storage',
        description: 'Add storage to upload files or use reference documents from within other apps.',
        type: 'com.tuvalsoft.opa.spreadsheet',
        image: '/static/opa/images/com.tuvalsoft.opa.storage/icon.png',
    },
    {
        name: 'BPMN Model',
        image: '/static/opa/images/com.tuvalsoft.opa.bpmn/icon.png'
    },
    {
        name: 'Dashboard',
        type: 'com.tuvalsoft.opa.dashboard',
        image: '/static/opa/images/com.tuvalsoft.opa.dashboard/icon.png',
    },
    {
        name: 'OKR',
        type: 'com.tuvalsoft.opa.okr',
        image: '/static/opa/images/com.tuvalsoft.opa.okr/icon.png',
    },
    {

        name: 'Mind Map',
        description: 'Add storage to upload files or use reference documents from within other apps.',
        type: 'com.tuvalsoft.opa.mindmap',
        image: '/static/opa/images/com.tuvalsoft.opa.mindmap/icon.png',
    },
    {

        name: 'Fishbone Diagram',
        description: 'Add storage to upload files or use reference documents from within other apps.',
        type: 'com.tuvalsoft.opa.fishbone',
        image: '/static/opa/images/com.tuvalsoft.opa.fishbone/icon.png',
    },

    {
        name: 'Workflow',
        type: 'com.tuvalsoft.opa.spreadsheet'
    },
    {
        name: 'Google Sheets Embedder',
        description: 'Google Calendar Embedded allows you to embed any public Google Calendar link to your apps.',
        type: 'com.tuvalsoft.opa.spreadsheet',
        image: '/static/opa/images/com.tuvalsoft.opa.google_sheet_embedded/icon.png'
    },
    {
        name: 'Google Calendar Embedder',
        description: 'Google Calendar Embedded allows you to embed any public Google Calendar link to your apps.',
        type: 'com.tuvalsoft.opa.google_calendar_embedded',
        image: '/static/opa/images/com.tuvalsoft.opa.google_calendar_embedded/icon.png'
    } */
]