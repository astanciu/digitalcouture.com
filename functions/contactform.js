export async function onRequest(context) {
  const { request } = context;

  try {
    // Check if the request method is POST and has a JSON body
    if (request.method === "POST") {
      const data = await request.json();
      await sendEmail(data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      // If the request method is not POST, send a 405 Method Not Allowed
      return new Response("Method Not Allowed", { status: 405 });
    }
  } catch (error) {
    console.log(error);
    return new Response(error.message, { status: 500 });
  }
}

async function sendEmail(data) {
  const key = process.env.SENDGRID_KEY;
  if (!key) {
    throw new Error("Missing KEY");
  }

  sgMail.setApiKey(key);
  const msg = {
    to: "info@digitalcouture.com",
    from: "info@digitalcouture.com",
    subject: "Contact Form - digitalcouture.com",
    text: JSON.stringify(data, null, 4),
  };
  await sgMail.send(msg);
}
