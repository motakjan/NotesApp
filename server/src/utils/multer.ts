import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';
import { customAlphabet } from 'nanoid';
import fs from 'fs';
import mime from 'mime-types';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

// TODO Consider adding middleware to not add files when user does not exists (Michal)
const UPLOADS_DIR = './uploads';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 32);

const storage = multer.diskStorage({
  destination(request: Request, file: Express.Multer.File, callback: DestinationCallback) {
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR);
    }

    callback(null, UPLOADS_DIR);
  },
  filename(request: Request, file: Express.Multer.File, callback: FileNameCallback) {
    callback(null, `${nanoid()}.${mime.extension(file.mimetype)}`);
  },
});

const fileFilter = (request: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export const avatarUpload = multer({ storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter });
