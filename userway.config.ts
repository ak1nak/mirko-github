import type { Config } from "@userway/cicd-core";
export default {
  organization: "serhii-diachenko-userway-org-toqmw",
  project: "mirko-github",
  token: process.env.USERWAY_TOKEN,
  reportPaths: ["./uw-a11y-reports"],
  server: "https://api.qa.userway.dev",
} satisfies Config;
