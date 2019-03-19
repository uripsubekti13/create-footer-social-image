const { createCanvas, loadImage, registerFont } = require('canvas');
const { SOCIALS } = require('./icons')

class CreateFooter {
    async getFooter(data) {
        try {
            const canvas = createCanvas(500, 26 * data.length);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, 26 * data.length);
            for (let index = 0; index < data.length; index++) {
                const obj = data[index];
                ctx.drawImage(await loadImage(SOCIALS[obj.key]), 0, 2 + (index * 24), 23, 23)
                ctx.font = '21px Arial'
                ctx.fillStyle = "black";
                ctx.fillText(obj.value, 30, ((index + 1) * 24) - 3)
            }
            return canvas.toDataURL();
        } catch (e) {
            throw e;
        }
    }
}


module.exports = new CreateFooter()