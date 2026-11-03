import {
  PUBLIC_APPWRITE_ENDPOINT,
  PUBLIC_APPWRITE_PROJECT_ID,
} from "$app/env/public";

import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
  .setProject(PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
