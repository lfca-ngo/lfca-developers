## Introduction

The LFCA API provides access to content from our Knowledge Hub.

This reference is designed to assist application developers and system
administrators. Each endpoint includes descriptions, request syntax, and
examples using standard HTTP requests. Response data is returned in JSON
format.

This document was generated from our OpenAPI Specification. See the

## Access and Authentication

All endpoints require a Personal Access Token.
Please reach out to us in order to request [Request a Personal Access
Token](mailto:info@lfca.ngo).

#### Authentication

| Security Scheme Type:         | HTTP   |
| ----------------------------- | ------ |
| **HTTP Authorization Scheme** | bearer |

## Requests

Requests must be made over HTTPS to ensure transactions are encrypted. The

following Request methods are supported:

| METHOD | USAGE                                                      |
| ------ | ---------------------------------------------------------- |
| GET    | Retrieves data about collections and individual resources. |

## Responses

Actions will return one following HTTP response status codes:

| STATUS                    | DESCRIPTION                                                  |
| ------------------------- | ------------------------------------------------------------ |
| 200 OK                    | The request was successful.                                  |
| 400 Bad Request           | You submitted an invalid request (missing parameters, etc.). |
| 401 Unauthorized          | You failed to authenticate for this resource.                |
| 404 Not Found             | The resource you're requesting does not exist.               |
| 500 Internal Server Error | Please [contact us](mailto:info@lfca.ngo).                   |

## Errors

Success is indicated via <a
href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"
target="_top">Standard HTTP status codes</a>.

`2xx` codes indicate success, `4xx` codes indicate a request error, and `5xx` errors indicate a server error.
A request error might be an invalid input, a required parameter being omitted,
or a malformed request. A server error means something went wrong processing
your request. If this occurs, please [let us know](mailto:info@lfca.ngo).
Though errors are logged and we work quickly to resolve
issues, providing us with reproducable steps and data is always
helpful.
