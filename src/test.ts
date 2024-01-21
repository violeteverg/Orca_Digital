import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import type { InitOptions } from "payload/config";

// configure dotenv to read eviroment variabel from file .env
dotenv.config({
  path: path.resolve(__dirname, "../.env"), // path for file .env
});

// Membuat objek cached untuk menyimpan instance Payload yang sudah dibuat sebelumnya

let cached = (global as any).payload;

// Jika instance Payload belum ada, maka inisialisasi objek cached
if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

// Interface untuk argumen fungsi getPayloadClient
interface Args {
  initOptions?: Partial<InitOptions>; // Opsi inisialisasi Payload yang bersifat opsional
}

// Fungsi untuk mendapatkan klien Payload
export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  // Memastikan bahwa variabel lingkungan PAYLOAD_SECRET telah diatur
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD was missing");
  }

  // Jika instance Payload sudah ada, maka langsung mengembalikannya
  if (cached.client) {
    return cached.client;
  }

  // Jika instance Payload belum ada, maka inisialisasi dan simpan promise di objek cached
  if (!cached.client) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    // Menunggu promise selesai dan menyimpan klien Payload di objek cached
    cached.client = await cached.promise;
  } catch (error) {
    // Jika terjadi kesalahan, reset promise dan lempar error
    cached.promise = null;
    throw error;
  }

  // Mengembalikan klien Payload yang sudah diinisialisasi
  return cached.client;
};
