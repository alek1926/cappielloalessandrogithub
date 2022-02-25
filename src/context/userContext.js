import {createContext} from 'react';
import {userMock} from "../api/user.js";

export const userContext = createContext(userMock);