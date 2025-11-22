
export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  return new Response(JSON.stringify({ message: 'Demo mode active. Stripe is disabled for now.', received: body }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
