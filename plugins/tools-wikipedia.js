import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `🧑🏻‍💻️ Pero qué busco, pues ignorante HP` 
	
    try {
	const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`🧑🏻‍💻 Wikipedia

᳆͜͡➣ Buscado : ${wik}

${resulw}`)
} catch (e) {
  m.reply('📵️ No se han encontrado resultados ')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki','wikipedia'] 


export default handler
