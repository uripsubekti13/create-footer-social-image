const { createCanvas, loadImage, registerFont } = require('canvas');
const { SOCIALS } = require('./icons')

class CreateFooter {
    async getFB(text = 'Facebook') {
        try {
            const canvas = createCanvas(500, 23);
            const ctx = canvas.getContext('2d');
            const img = await loadImage(SOCIALS.FB);
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, 23);
            ctx.drawImage(img, 0, 0, 23, 23);
            ctx.font = '22px Arial'
            ctx.fillStyle = "black";
            ctx.fillText(text, 30, 20)
            return canvas.toDataURL()
        } catch (error) {
            throw error;
        }
    }

    async getEmail(text = 'Email') {
        try {
            const canvas = createCanvas(500, 23);
            const ctx = canvas.getContext('2d');
            const img = await loadImage(SOCIALS.EMAIL);
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, 23);
            ctx.drawImage(img, 0, 0, 23, 23);
            ctx.font = '22px Arial'
            ctx.fillStyle = "black";
            ctx.fillText(text, 30, 20)
            return canvas.toDataURL()
        } catch (error) {
            throw error;
        }
    }

    async getIG(text = 'Instagram') {
        try {
            const canvas = createCanvas(500, 23);
            const ctx = canvas.getContext('2d');
            const img = await loadImage(SOCIALS.IG);
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, 23);
            ctx.drawImage(img, 0, 0, 23, 23);
            ctx.font = '22px Arial'
            ctx.fillStyle = "black";
            ctx.fillText(text, 30, 20)
            return canvas.toDataURL()
        } catch (error) {
            throw error;
        }
    }

    async getPhone(text = 'Phone') {
        try {
            const canvas = createCanvas(500, 23);
            const ctx = canvas.getContext('2d');
            const img = await loadImage(SOCIALS.PHONE);
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, 23);
            ctx.drawImage(img, 0, 0, 23, 23);
            ctx.font = '22px Arial'
            ctx.fillStyle = "black";
            ctx.fillText(text, 30, 20)
            return canvas.toDataURL()
        } catch (error) {
            throw error;
        }
    }

    async getTwitter(text = 'Twitter') {
        try {
            const canvas = createCanvas(500, 23);
            const ctx = canvas.getContext('2d');
            const img = await loadImage(SOCIALS.TWITTER);
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, 23);
            ctx.drawImage(img, 0, 0, 23, 23);
            ctx.font = '22px Arial'
            ctx.fillStyle = "black";
            ctx.fillText(text, 30, 20)
            return canvas.toDataURL()
        } catch (error) {
            throw error;
        }
    }
}


module.exports = new CreateFooter()