import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import type { InitOptions } from "payload/config";

// Configure dotenv to read environment variables from the .env file
dotenv.config({
  path: path.resolve(__dirname, "../.env"), // Specify the path to the .env file
});

// Create a cached object to store previously created Payload instances
let cached = (global as any).payload;

// If the Payload instance doesn't exist, initialize the cached object
if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

// Interface for arguments in the getPayloadClient function
interface Args {
  initOptions?: Partial<InitOptions>; // Optional initialization options for Payload
}

// Function to get the Payload client
export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  // Ensure that the PAYLOAD_SECRET environment variable is set
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET was missing");
  }

  // If the Payload instance already exists, return it immediately
  if (cached.client) {
    return cached.client;
  }

  // If the Payload instance doesn't exist, initialize it and store the promise in the cached object
  if (!cached.client) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    // Wait for the promise to resolve and store the Payload client in the cached object
    cached.client = await cached.promise;
  } catch (error) {
    // If an error occurs, reset the promise and throw the error
    cached.promise = null;
    throw error;
  }

  // Return the initialized Payload client
  return cached.client;
};
