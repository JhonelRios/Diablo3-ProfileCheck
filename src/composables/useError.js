export function useError(error, route) {
  const errorObject = {
    routeParams: route.params,
    message: error.message
  };

  if (error.response) {
    errorObject.data = error.response.data;
    errorObject.status = error.response.status;
  }

  return {
    errorObject
  };
}
