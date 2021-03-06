import { useHistory } from 'react-router-dom';
import { listRouteByKey } from 'configs/configureRoute';

export default function useCustomHistory() {
  const history = useHistory();

  function goTo(keyPath, dynamicParam) {
    try {
      if (!keyPath) {
        throw new Error('Required param keyPath.');
      }

      if (!listRouteByKey[keyPath]) {
        throw new Error('Route not defined.');
      }

      if (dynamicParam && !listRouteByKey[keyPath].pathDynamic) {
        throw new Error(`Param dynamicParam required pathDynamic key.`);
      }

      const pathname = dynamicParam
        ? listRouteByKey[keyPath].pathDynamic + dynamicParam
        : listRouteByKey[keyPath].path;

      history.push({
        pathname,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return { goTo };
}
