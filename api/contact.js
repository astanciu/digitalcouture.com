const sgMail = require("@sendgrid/mail");
const { send, json } = require("micro");

module.exports = async (req, res) => {
  const data = await json(req);
  await sendEmail(data);
  send(res, 200, { ok: true });
};

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
