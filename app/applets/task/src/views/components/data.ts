import { Task } from './types';
import { v4 as uuidv4 } from 'uuid';
export const statusColor = {
    'READY' : {
        background: '#FFCC00',
        color:'black'
    },
    'OPEN' : 
    {
        background: '#D3D3D3',
        color:'black'
    },
    'TEST' : 
    {
        background: '#D3D3D3',
        color:'black'
    }
}
/* 
export const INITIAL_TASKS: Task[] = [
  {
    id: uuidv4(),
    title: 'Tenant account edit',
    description: 'Desc 2',
    status: 'READY',
  },
  {
    id: uuidv4(),
    title: 'Tenant Account ekranindan account create etme',
    description: 'Desc 3',
    status: 'OPEN',
  },
  {
    id: uuidv4(),
    title: 'App create',
    description: 'Desc 4',
    status: 'READY',
  },
  {
    id: uuidv4(),
    title: 'Authentication providerlarin config dialoglari eklenecek',
    description: 'Desc 4',
    status: 'READY',
  }
];
 */