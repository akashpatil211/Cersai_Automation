import screenshot from 'screenshot-desktop';
import fs from 'fs';
import path from 'path';

export function getUniqueFileName(baseName, folderPath) {
    let counter = 1;
    let filePath = path.join(folderPath, `${baseName}_${counter}.png`);

    while (fs.existsSync(filePath)) {
        counter++;
        filePath = path.join(folderPath, `${baseName}_${counter}.png`);
    }

    return filePath;
}

export async function takeScreenshot(testCaseNumber = 'UnknownTest', category = '') {
    const folderPath = path.join(process.cwd(), 'screenshots');

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const now = new Date();

    const dateTime =
        `${String(now.getDate()).padStart(2, '0')}` +
        `${String(now.getMonth() + 1).padStart(2, '0')}` +
        `${now.getFullYear()}_` +
        `${String(now.getHours()).padStart(2, '0')}` +
        `${String(now.getMinutes()).padStart(2, '0')}` +
        `${String(now.getSeconds()).padStart(2, '0')}_` +
        `${String(now.getMilliseconds()).padStart(3, '0')}`;

    const baseName = category
        ? `${testCaseNumber}_${category}_${dateTime}`
        : `${testCaseNumber}_${dateTime}`;

    const filePath = getUniqueFileName(baseName, folderPath);

    await screenshot({ filename: filePath });

    console.log(`Screenshot saved: ${filePath}`);
}