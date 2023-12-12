import { ObjectId } from "mongoose";

export class StatsDto {
  name: { type: String; required: true };
}
export class SubstatsDto {
  name: { type: String; required: true };
}
