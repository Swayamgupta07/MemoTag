import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    // Insert into waitlist table
    const { error } = await supabase.from("waitlist").insert([{ email }])

    if (error) {
      console.error("Error inserting into waitlist:", error)
      return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Successfully joined waitlist" })
  } catch (error) {
    console.error("Error in waitlist API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
