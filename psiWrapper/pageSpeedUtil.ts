import request from 'sync-request';
import urlData from './resources/data.json';
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from 'path';
export class PageSpeedInsights {

  private key = ''; // Need to add access key, [optional] - if want to use it for normal hits [2-3] hits
  private currentDateTime = new Date().toISOString();
  private reportFolder = join(process.cwd(), `Reports/${this.currentDateTime}`);

  async getPageSpeedResult(urlData: string) {
    //If not adding accesskey remove &key=${this.key} from the url
    const response = request('GET', `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlData}&key=${this.key}&strategy=mobile&category=performance`);
    const parsedData = response.getBody('utf8');
    return parsedData;
  }

  async auditSite(): Promise<void> {
    await this.makeReportDirectory();
    let urls = await this.getUrls();
    await this.triggerPageSpeedTest(urls);
  }

  async triggerPageSpeedTest(
    testSource: {}[],
  ): Promise<void> {
    for (let index = 0; index < testSource.length; index++) {
      let result = await this.getPageSpeedResult(testSource[index]['url']);
      await writeFileSync(
        `${this.reportFolder}/${testSource[index]["pageName"].trim()}.json`,
        result
      );
    }
  }

  async getUrls(): Promise<{}[]> {
    return urlData.URLS;
  }

  async makeReportDirectory(): Promise<void> {
    try {
      if (!(await existsSync(`${this.reportFolder}`))) {
        await mkdirSync(this.reportFolder, { recursive: true });
      }
    } catch (err) {
      console.error(err);
    }
  }

}
