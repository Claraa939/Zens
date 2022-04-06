let handler = function (m) {
	this.sendContact(m.chat, '6288971419677', 'Owner ZensBotz :)', m)
}

handler.customPrefix = ['🍭Owner Kannabot'] 
handler.command = new RegExp

module.exports = handler