import fs from 'fs';
import path from 'path';

export class JsonHelper {
  private readonly filePath: string;
  private readonly filename: string;

  constructor(fileName: string) {
    this.filename = fileName;
    this.filePath = path.join(process.cwd(), fileName);
  }

  readJson(): any {
    try {
      if (fs.existsSync(this.filePath)) {
        const fileContent = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(fileContent);
      }
      return {};
    } catch (error) {
      console.error(`Error in reading "${this.filename}" JSON file:\n`, error);
    }
  }

  writeOrUpdateJson(updates: any): void {
    const data = this.readJson() || {};
    const updatedData = {...data, ...updates};

    try {
      fs.writeFileSync(this.filePath, JSON.stringify(updatedData, null, 2));
    } catch (error) {
      console.error(`Error in writing "${this.filename}" JSON file:\n`, error);
    }
  }
}
