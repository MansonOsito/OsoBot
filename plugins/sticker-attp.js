
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `š§š»āš»ļø Agrega el texto, pues PELOTUDO de daMier\n\nšš» Ejemplo  ${usedPrefix + command} OsoBot`
    //conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text }), 'attp.webp', '', m, false, { asSticker: true })
     let stiker = await sticker(null, global.API('xteam', '/attp', { file: '', text }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m )
    throw stiker.toString()
}
handler.help = ['attp <text>']
handler.tags = ['sticker']
handler.command = ['attp'] 

export default handler
