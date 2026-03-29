export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.email) {
      return Response.json({ error: "Name and email are required." }, { status: 400 });
    }

    return Response.json({
      success: true,
      message: "Request received.",
      data: {
        name: body.name,
        email: body.email,
        plan: body.plan ?? "Personal",
      },
    });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
