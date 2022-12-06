import { z } from "zod";
import { LinkTypeSchema } from "../enums/LinkType.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumLinkTypeFilterObjectSchema } from "./NestedEnumLinkTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumLinkTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => LinkTypeSchema).optional(),
    in: z
      .lazy(() => LinkTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => LinkTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => LinkTypeSchema),
        z.lazy(() => NestedEnumLinkTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumLinkTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumLinkTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumLinkTypeWithAggregatesFilterObjectSchema = Schema;
