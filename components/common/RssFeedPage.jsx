import axios from "axios";
import { parseStringPromise } from "xml2js";

export async function getServerSideProps() {
  try {
    // URL del RSS feed
    const rssUrl = "https://www.ambito.com/rss/pages/ultimas-noticias.xml";

    // Fetch del RSS
    const response = await axios.get(rssUrl);
    const xml = response.data;

    // Convertir XML a JSON
    const rssData = await parseStringPromise(xml, { explicitArray: false });

    // Extraer items del feed
    const items = rssData?.rss?.channel?.item || [];

    return {
      props: {
        items,
      },
    };
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return {
      props: {
        items: [],
      },
    };
  }
}

export default function RssFeedPage({ items }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Últimas Noticias</h1>
      {items && items.length === 0 ? (
        <p>No hay noticias disponibles.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h2>{item.title}</h2>
              </a>
              <p>{item.description}</p>
              {item.enclosure && item.enclosure.url && (
                <img
                  src={item.enclosure.url}
                  alt={item.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
              <p style={{ color: "gray" }}>
                Publicado: {new Date(item.pubDate).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
