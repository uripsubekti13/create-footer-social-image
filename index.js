const { createCanvas, loadImage } = require('canvas');
const { SOCIALS } = require('./icons')

const getFB = async (text = 'Facebook') => {
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
}

const getEmail = async (text = 'Email') => {
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
}

const getIG = async (text = 'Instagram') => {
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
}

const getPhone = async (text = 'Phone') => {
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
}

const getTwitter = async (text = 'Twitter') => {
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
}

module.exports = {
    getEmail,
    getPhone,
    getFB,
    getIG,
    getTwitter
}