import { z } from "zod";

export const SpecialtyDiveTypeSchema = z.enum([
  "BOAT_DIVE",
  "PERFECT_bUOYANCY_DIVE",
  "DIVE_COMPUTER",
  "DEEP_DIVE",
  "DRIFT_DIVE",
  "NAVIGATION_DIVE",
  "DRY_SUIT_DIVE",
  "PHOTO_AND_VIDEO_DIVE",
  "DIVE_EQUIPMENT",
  "SHARK_DIVE",
  "SEARCH_DIVE",
  "NIGHT_DIVE",
  "NITROX_DIVE",
  "CAVE_DIVE",
  "WRECK_DIVE",
  "SNORKELING",
  "ICE_DIVE",
  "OPEN_WATER_DIVE",
  "DECO_DIVE",
  "DPV_OR_SCOOTER",
]);
