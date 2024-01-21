import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(async () => {
    return "hello";
  }),
});

export type AppRouter = typeof appRouter;
