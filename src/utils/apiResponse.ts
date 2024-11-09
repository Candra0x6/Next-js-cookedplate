import { NextResponse } from "next/server";

export const ApiResponse = {
  success: <T>(data: T, status = 200) => {
    return NextResponse.json(data, { status });
  },
  error: (message: string, status = 500) => {
    return NextResponse.json({ error: message }, { status });
  },
};
