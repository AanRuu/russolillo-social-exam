import { createContext } from 'react';
import { Post } from './commonTypes';

export interface IAppContext { 
    jsonData: Post[] | undefined;
    setJsonData: (args: Post[]) => void
    
}

export const AppContext = createContext<IAppContext | undefined>(undefined);