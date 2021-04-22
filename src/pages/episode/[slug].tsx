import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import convertDurationToTimeString from "../../utils/convertDurationToTimeString";

type Episode = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  published_at: string;
  publishedAt: string;
};

type EpisodeProps = {
  episode: Episode;
};

export default function Episode({ episode }: EpisodeProps) {
  const router = useRouter(); // Hooks só podem ser acessados dentro de componentes

  return (
    <>
      <h1>{episode.title}</h1>
      <h1>{router.query.slug}</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };

  return {
    props: episode,
    revalidade: 60 * 60 * 24, // 24 hours
  };
};
