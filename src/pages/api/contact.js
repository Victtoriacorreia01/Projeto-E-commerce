import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'milk65061@gmail.com', // Seu e-mail Gmail
        pass: 'zelpljejkdwrfevy', // Sua senha de aplicativo
      },
    });

    try {
      await transporter.sendMail({
        from: '"Site Contato" <milk65061@gmail.com>',
        to: 'milk65061@gmail.com', // Substitua por seu e-mail real para testar
        subject: 'Nova mensagem de contato',
        html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Número: ${number}</p><p>Mensagem: ${message}</p>`,
      });

      await transporter.sendMail({
        from: '"Site Contato" <milk65061@gmail.com>',
        to: email, // Enviar para o e-mail do cliente
        subject: 'Obrigado por entrar em contato!',
        html: `<p>Olá ${name},</p><p>Obrigado por entrar em contato conosco. Recebemos sua mensagem e responderemos em breve.</p><p>Atenciosamente,<br>A equipe da loja</p>`,
      });

      console.log('E-mails enviados com sucesso');
      res.status(200).json({ message: 'E-mails enviados com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ message: 'Erro ao enviar e-mail', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
