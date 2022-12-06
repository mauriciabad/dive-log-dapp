import { z } from "zod";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumWaterCurrentNullableFilter> = z
  .object({
    equals: z
      .lazy(() => WaterCurrentSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => WaterCurrentSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => WaterCurrentSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => WaterCurrentSchema),
        z.lazy(() => NestedEnumWaterCurrentNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumWaterCurrentNullableFilterObjectSchema = Schema;
