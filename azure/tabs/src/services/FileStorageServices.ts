import { BlobClient, ContainerClient } from '@azure/storage-blob';

class FileStorageServices {
  constructor() {}

  private uploadFile = async (containerSasUrl:string, file:File):Promise<void> => {
    const containerClient = new ContainerClient(containerSasUrl);
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    const fileBuffer = await file.arrayBuffer();
    await blockBlobClient.uploadData(fileBuffer);
  }

}

export default FileStorageServices;