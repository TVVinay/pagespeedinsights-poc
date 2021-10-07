import { PageSpeedInsights } from "./pageSpeedUtil";

let psi = new PageSpeedInsights();
(async () => {
    await psi.auditSite();
})();
