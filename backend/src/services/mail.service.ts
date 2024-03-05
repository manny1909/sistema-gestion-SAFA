import nodemailer from 'nodemailer'
import path from 'path'
export class MailService {
    private assetsPath = path.join(__dirname, '../../../assets');
    private filePathLayout = path.join(this.assetsPath,'templates/layout.html');
    constructor() { }

    readHtmlFile(filePath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const fs = require('fs');
            fs.readFile(filePath, 'utf-8', (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });

    }
    async sendWelcomeMail(email: string, name: string, password: string): Promise<void> {
        const filePathWelcome = path.join(this.assetsPath,'templates/welcome.html');

        const [layout, welcome] = await Promise.all([
            this.readHtmlFile(this.filePathLayout),
            this.readHtmlFile(filePathWelcome),
        ])
            .catch((err) => {
                console.error(err);
                throw new Error('Error al cargar el archivo HTML');
            });
        try {
            
            const html = layout
                .replace('{{title}}', 'Bienvenido/a')
                .replace('{{main}}', welcome)
                .replace('{{name}}', name)
                .replace('{{password}}', password)
                .replace('{{email}}', email);
            await this.sendMail('Envío de correos', email, 'Bienvenido/a', html, 'Bienvenido/a');
            
        } catch (error) {
            console.error(error)
            throw new Error('Error al enviar el correo');
        }
    }

    private async sendMail(from: string, to: string, subject: string, html: string, text: string) {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const info = await transporter.sendMail({
            from, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html: html || "falta el html", // html body
        });

        console.log("Message sent to: %s", to);
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

}