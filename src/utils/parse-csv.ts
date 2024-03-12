import { parse } from 'csv-parse';
import fs from 'fs';
// Function that returns a Promise which resolves with parsed CSV data.
  async function parseCSV(filePath: string)  {
  const records = [];
  const parser = fs
    .createReadStream(filePath)
    .pipe(parse({
      columns: true,
      skip_empty_lines: true
    }));

  for await (const record of parser) {
    records.push(record);
  }

  return records;
};

export default parseCSV;