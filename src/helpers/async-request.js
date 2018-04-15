
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

const asyncRequests = (url, method = httpMethods.get) => {
  const options = { method }
  const response = await ( await(fetch(url, options)) ).json()
  return response
}

export default asyncRequests
