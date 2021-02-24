import { useContext } from 'react';
import { DataContext } from '../contexts';

export default () => {
  const context = useContext(DataContext);

  return context;
}