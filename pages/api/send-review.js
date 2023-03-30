import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ssgsj.carranza@gmail.com",
    pass: "ssgsj.carranza@gmail.com",
  },
});

export default async function handler(req, res) {
  const { name, comment, rating } = req.body;

  try {
    await transporter.sendMail({
      from: "ssgsj.carranza@gmail.com",
      to: "ssgsj.carranza@gmail.com",
      subject: "Date review",
      html: `
        <p>Name: ${name}</p>
        <p>Comment: ${comment}</p>
        <p>Rating: ${rating}/5</p>
      `,
    });

    res.status(200).json({ message: "Review submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting review. Please try again later." });
  }
}
