let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6288971419677
│┝‷✧ *Dana:* 6288971419677
│┝‷✧ *Gopay:* 6288971419677
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6288971419677?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
