import type { Actions } from "./$types";
import { CREATE_GRIEVANCE_URL } from "$lib/server/urls";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const griv = data.get("griv");
    const response = await fetch(CREATE_GRIEVANCE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, grievance :griv }),
    });
  },
} satisfies Actions;
