import { createClient } from "@supabase/supabase-js";

// link the supabase(database) to app
const URL = "https://tbyshrjsewckboxhzpkw.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRieXNocmpzZXdja2JveGh6cGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0OTAwOTMsImV4cCI6MjA2MDA2NjA5M30.l4lDNBbzfXTYu770PxjWerHuUgdyh2kJAOyJgsdVwds";
export const supabase = createClient(URL, API_KEY);
