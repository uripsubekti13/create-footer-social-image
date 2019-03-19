const { createCanvas, loadImage, registerFont } = require('canvas');
const { SOCIALS } = require('./icons')

class CreateFooter {
    async getFooter(data) {
        try {
            const base = 35
            const canvas = createCanvas(500, (base+3) * data.length);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, (base+3) * data.length);
            for (let index = 0; index < data.length; index++) {
                const obj = data[index];
                ctx.drawImage(await loadImage(SOCIALS[obj.key]), 0, 4 + (index * (base+1)), base-3, base-3)
                ctx.font = '28px Arial'
                ctx.fillStyle = "black";
                ctx.fillText(obj.value, (base+9), ((index + 1) * (base+1)) - 5)
            }
            return canvas.toDataURL();
        } catch (e) {
            throw e;
        }
    }
}

// const a = new CreateFooter()
// a.getFooter([{key: 'FB', value: 'Urip Subekti'}, {key: 'PHONE', value: '087722171686'}]).then(console.log)

module.exports = new CreateFooter()