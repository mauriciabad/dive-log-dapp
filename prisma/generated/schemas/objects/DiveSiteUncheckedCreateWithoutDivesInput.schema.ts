import { z } from "zod";
import { LinkUncheckedCreateNestedManyWithoutDiveSiteInputObjectSchema } from "./LinkUncheckedCreateNestedManyWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteUncheckedCreateWithoutDivesInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    latitude: z.number(),
    longitude: z.number(),
    links: z
      .lazy(() => LinkUncheckedCreateNestedManyWithoutDiveSiteInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveSiteUncheckedCreateWithoutDivesInputObjectSchema = Schema;
