import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vipzeogaqxrfcpipzmdo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_vdUWsB4VamwCiHMlzu3OeA_w8XRG989";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

/**
 * Adds an email to the waitlist table.
 * RLS only permits INSERT from the client — no read access, so this
 * cannot be used to enumerate collected emails from the frontend.
 */
export async function joinWaitlist(email) {
  const { error } = await supabase.from("waitlist").insert({ email });
  if (error) {
    // Unique constraint violation just means they already joined — treat as success.
    if (error.code === "23505") return { alreadyJoined: true };
    throw error;
  }
  return { alreadyJoined: false };
}
