// Make sure the API route is properly handling CORS and validation
import { createServerClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, role, message } = body

    // Validate the data
    if (!name || !email || !role || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a Supabase client
    const supabase = createServerClient()

    // Insert the data into the contacts table
    const { data, error } = await supabase.from("contacts").insert([{ name, email, role, message }])

    if (error) {
      console.error("Error inserting contact:", error)
      return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in contact route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
