import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function handler(req, res) {
  try {
    // Obtener el RSS con axios
    const response = await axios.get("https://www.ambito.com/rss/pages/ultimas-noticias.xml", {
      responseType: "text",
    });

    // Parsea el contenido XML a JSON
    const parsedData = await parseStringPromise(response.data, {
      explicitArray: false, // Simplifica la estructura de datos
    });

    // Mapea los datos relevantes (items)
    const items = parsedData.rss.channel.item;

    res.status(200).json({ items });
  } catch (error) {
    console.error("Error al obtener el feed RSS:", error.message);
    res.status(500).json({ message: "Error al obtener el feed RSS" });
  }
}
