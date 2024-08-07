/**
 * Represents an HTTP error.
 * @param {string} message - The error message.
 * @param {number} statusCode - The HTTP status code.
 */

export class HttpError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.name = "HttpError";
  }
}

/**
 * Handles the fetch request and error handling.
 *
 * @template T
 * @param {string} url - The URL to fetch data from.
 * @param {RequestInit} [options] - Additional options for the fetch request.
 * @returns {Promise<T>} A promise that resolves to the parsed response data.
 */
async function fetchHandler<T = unknown>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new HttpError(
        `HTTP Error: ${response.status} - ${response.statusText}`,
        response.status
      );
    }

    const data = (await response.json()) as T;

    return data;
  } catch (error) {
    throw error as HttpError;
  }
}


/**
 * Sends an HTTP GET request.
 * @template T
 * @param {string} url - The URL to send the GET request to.
 * @param {RequestInit} [options] - Additional options for the request.
 * @returns {Promise<T>} A promise that resolves to the parsed response data.
 */
export async function get<T = unknown>(
  url: string,
  options?: RequestInit
): Promise<T> {
  return fetchHandler<T>(url, options);
}
