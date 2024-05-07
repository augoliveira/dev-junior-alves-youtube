/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';

import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE PreEnrollment  ( Name varchar(255), Email varchar(255), Enrollment varchar(5), PhoneNumber varchar(25) )`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
