import * as v from "valibot";
import { AuctionType } from "@repo/types";

const schema = v.object({
  lotId: v.number(),
  bids: v.array(v.number()),
  chainId: v.number(),
  auctionType: v.optional(v.enum_(AuctionType)),
});

export { schema };