import type { Config } from "@userway/cicd-cli";
export default {
  organization: "serhii-diachenko-userway-org-toqmw",
  project: "test-mirko-ready2go-main",
  reportPaths: ["./uw-a11y-reports"],
  token: process.env.USERWAY_TOKEN,
  server: "https://api.qa.userway.dev",
} satisfies Config;
