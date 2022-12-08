import { z } from "zod";
import { CreateDiveSchema } from "../../../validators/Dive";
import { router, protectedProcedure } from "../trpc";

export const diveRouter = router({
  getUserDives: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.dive.findMany({
      where: {
        userId: ctx.session.user.id
      }
    });
  }),
  createDive: protectedProcedure
    .input(z.object({ data: CreateDiveSchema }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.dive.create({
        data: {
          user: {
            connect: {
              id: ctx.session.user.id,
            }
          },

          diveSite: {
            connect: {
              id: 'clbeyjoc00000iobvwk98pe2b',
            }
          },

          ...input.data
        }
      })
    })
});

