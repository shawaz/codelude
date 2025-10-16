import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const token = process.env.NOTION_TOKEN;
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!token || !databaseId) {
      return NextResponse.json({ error: "Notion not configured" }, { status: 500 });
    }

    const payload = {
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: { content: data?.name || "No name" },
            },
          ],
        },
        Company: { rich_text: [{ text: { content: data?.company || "" } }] },
        Email: { email: data?.email || "" },
        Phone: { rich_text: [{ text: { content: data?.phone || "" } }] },
        Budget: { rich_text: [{ text: { content: data?.budget || "" } }] },
        Deadline: { rich_text: [{ text: { content: data?.deadline || "" } }] },
        Source: { select: data?.source ? { name: data.source } : null },
        Needs: { multi_select: (data?.needs || []).map((n: string) => ({ name: n })) },
      },
      children: data?.details
        ? [
            {
              object: "block",
              type: "paragraph",
              paragraph: { rich_text: [{ type: "text", text: { content: data.details } }] },
            },
          ]
        : [],
    };

    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text || "Failed to save" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}


