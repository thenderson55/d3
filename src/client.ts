import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  "https://aaamdafriaoezenrpzli.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODI2ODQ1MywiZXhwIjoxOTQzODQ0NDUzfQ.QT7hDaiDI9p2hEYmo-HqCl6FDgf4wZUAESQVxjtrEHA"
)