import { NextRequest, NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(request: NextRequest) {
  const { stripeId, userId } = await request.json()

  const client = await clerkClient()

  await client.users.updateUserMetadata(userId, {
    privateMetadata: {
      stripeId: stripeId,
    },
  })

  return NextResponse.json({ success: true })
}