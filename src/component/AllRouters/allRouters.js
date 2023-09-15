import { useRoutes } from 'react-router'
import { routes } from '../../routes';

function AllRouter() {
  const elements = useRoutes(routes)
  return elements;
}

export default AllRouter;