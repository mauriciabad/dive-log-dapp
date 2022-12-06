import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { LinkUncheckedUpdateManyWithoutDiveBuddyNestedInputObjectSchema } from "./LinkUncheckedUpdateManyWithoutDiveBuddyNestedInput.schema";
import { DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddyNestedInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddyNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInput> =
  z
    .object({
      createdAt: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      creatorUserId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      customName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      customDescription: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      customImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      links: z
        .lazy(
          () => LinkUncheckedUpdateManyWithoutDiveBuddyNestedInputObjectSchema
        )
        .optional(),
      diveBuddyInDives: z
        .lazy(
          () =>
            DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddyNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInputObjectSchema =
  Schema;
