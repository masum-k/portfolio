import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const recipient = "maasumkamal@gmail.com";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !subject || !message) {
      return Response.json(
        {
          error: "Please fill in all fields.",
        },
        {
          status: 400,
        },
      );
    }

    if (name.length > 100) {
      return Response.json(
        {
          error: "Name is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (subject.length > 200) {
      return Response.json(
        {
          error: "Subject is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (message.length > 5000) {
      return Response.json(
        {
          error: "Message is too long.",
        },
        {
          status: 400,
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipient],
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18181b;">
          <h2>New Portfolio Contact</h2>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Subject:</strong>
            ${escapeHtml(subject)}
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <p style="white-space: pre-wrap;">
            ${escapeHtml(message)}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        {
          error: error.message || "Unable to send your message.",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        error: error.message || "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}