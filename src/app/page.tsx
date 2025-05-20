//https://sujeitoprogramador.com/next-api/?api=game_day
import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`
    );

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();

  return (
    <main className="flex">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dalyGame.id}`}>
        <section className=""></section>
        </Link>
      </Container>
    </main>
  );
}
