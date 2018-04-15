
const BASE_URL = 'http://frontend-test-api.herokuapp.com/api/v1/users/c7bc96c6-6fb5-49a1-be7f-b21a1d71c8ac/vending_machines/'

export const httpMethods = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE'
}

export const httpErrors = {
  notFound: '404',
  clientInputDataIncorrect: '422',
  internalServerError: '500'

}

export const asyncRequest = async ({ id, method = httpMethods.get, body }) => {
  debugger
  const options = {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const url = id ? BASE_URL + id : BASE_URL
  const response = await ( await(fetch(url, options)) ).json()
  return response
}
