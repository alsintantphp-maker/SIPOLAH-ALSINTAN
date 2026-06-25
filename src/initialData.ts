import { AlsintanReportRow } from "./types";

export const initialReports: AlsintanReportRow[] = [
  {
    id: "rep-1",
    timestamp: "2026-06-01 07:15",
    operator: "BAHRUN KEI ALFAZARI, ST",
    alsintan: "Traktor Roda 4 (John Deere)",
    kecamatan: "Amanuban Selatan",
    desa: "Bena",
    luasLahan: 4.5,
    komoditas: "Padi Sawah",
    bensin: 58, // ~12.8 L/Ha - Sehat
    status: "Tersingkronisasi",
  },
  {
    id: "rep-2",
    timestamp: "2026-06-02 09:30",
    operator: "YARIT H. PUNUF, ST",
    alsintan: "Traktor Roda 2 (Yanmar)",
    kecamatan: "Mollo Utara",
    desa: "Tunua",
    luasLahan: 1.2,
    komoditas: "Tomat & Cabai",
    bensin: 11, // ~9.1 L/Ha - Sehat
    status: "Tersingkronisasi",
  },
  {
    id: "rep-3",
    timestamp: "2026-06-03 14:00",
    operator: "YUFEN TAKESAN",
    alsintan: "Mesin Pompa Air 3 Inch",
    kecamatan: "Batu Putih",
    desa: "Boentuka",
    luasLahan: 2.0,
    komoditas: "Jagung Hibrida",
    bensin: 26, // ~13 L/Ha - Normal
    status: "Tersingkronisasi",
  },
  {
    id: "rep-4",
    timestamp: "2026-06-04 08:45",
    operator: "BAHRUN KEI ALFAZARI, ST",
    alsintan: "Traktor Roda 4 (John Deere)",
    kecamatan: "Soe",
    desa: "Kufe",
    luasLahan: 3.2,
    komoditas: "Jagung Lokal",
    bensin: 71, // ~22.1 L/Ha - Boros (Akan ditandai oleh AI!)
    status: "Tersingkronisasi",
  },
  {
    id: "rep-5",
    timestamp: "2026-06-05 10:20",
    operator: "YARIT H. PUNUF, ST",
    alsintan: "Cultivator",
    kecamatan: "Mollo Selatan",
    desa: "Siso",
    luasLahan: 0.8,
    komoditas: "Kubis / Kol",
    bensin: 6, // ~7.5 L/Ha - Sehat
    status: "Perlu Sinkronisasi", // can trigger syncing simulation
  },
  {
    id: "rep-6",
    timestamp: "2026-06-06 11:10",
    operator: "YUFEN TAKESAN",
    alsintan: "Traktor Roda 2 (Yanmar)",
    kecamatan: "Amanuban Barat",
    desa: "Tubuhue",
    luasLahan: 1.5,
    komoditas: "Jagung Hibrida",
    bensin: 14, // ~9.3 L/Ha - Sehat
    status: "Tersingkronisasi",
  },
  {
    id: "rep-7",
    timestamp: "2026-06-07 16:35",
    operator: "BAHRUN KEI ALFAZARI, ST",
    alsintan: "Mesin Pompa Air 3 Inch",
    kecamatan: "Kie",
    desa: "Fatuulan",
    luasLahan: 0.5,
    komoditas: "Sawi & Bawang",
    bensin: 12, // ~24 L/Ha - Boros pompa air (AI akan analisis)
    status: "Verifikasi Tertunda",
  },
  {
    id: "rep-8",
    timestamp: "2026-06-08 07:05",
    operator: "YARIT H. PUNUF, ST",
    alsintan: "Traktor Roda 4 (John Deere)",
    kecamatan: "Amanuban Selatan",
    desa: "Oebelo",
    luasLahan: 5.0,
    komoditas: "Padi Sawah",
    bensin: 60, // ~12 L/Ha - Sangat Efisien
    status: "Perlu Sinkronisasi",
  },
  {
    id: "rep-9",
    timestamp: "2026-06-08 13:20",
    operator: "YUFEN TAKESAN",
    alsintan: "Combine Harvester",
    kecamatan: "Amanuban Selatan",
    desa: "Bena",
    luasLahan: 2.5,
    komoditas: "Padi Sawah",
    bensin: 45, // ~18 L/Ha - Normal mesin panen
    status: "Tersingkronisasi",
  },
  {
    id: "rep-10",
    timestamp: "2026-06-09 09:12",
    operator: "BAHRUN KEI ALFAZARI, ST",
    alsintan: "Mesin Pompa Air 3 Inch",
    kecamatan: "Batu Putih",
    desa: "Oebobo",
    luasLahan: 3.5,
    komoditas: "Sorgum",
    bensin: 24, // ~6.8 L/Ha - Sangat Efisien
    status: "Verifikasi Tertunda",
  }
];

export const ttsKecamatanList = [
  "Amanuban Barat",
  "Amanuban Selatan",
  "Amanuban Timur",
  "Amanuban Tengah",
  "Mollo Utara",
  "Mollo Selatan",
  "Mollo Barat",
  "Mollo Tengah",
  "Soe",
  "Batu Putih",
  "Polen",
  "Kie",
  "Kuatnana",
  "Kuanfatu",
  "Fatumnasi",
  "Tobu",
  "Boking",
  "Nunkolo",
  "Kolbano",
  "Noebeba"
];

export const alsintanList = [
  "Traktor Roda 4 (John Deere)",
  "Traktor Roda 2 (Yanmar)",
  "Mesin Pompa Air 3 Inch",
  "Cultivator",
  "Combine Harvester"
];

export const commoditiesList = [
  "Padi Sawah",
  "Padi Ladang",
  "Jagung Hibrida",
  "Jagung Lokal",
  "Sorgum",
  "Tomat & Cabai",
  "Kubis / Kol",
  "Sawi & Bawang",
  "Pisang",
  "Singkong",
  "Kopi / Kakao"
];
