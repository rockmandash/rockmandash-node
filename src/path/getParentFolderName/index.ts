import path from 'path';

function getParentFolderName(filePath: string) {
  return path.basename(path.dirname(filePath));
}

export default getParentFolderName;
