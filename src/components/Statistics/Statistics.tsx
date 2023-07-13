import { useEffect, useState } from "react";
import Card from "../Card/Card";
import * as S from "./Statistics.styles";

const Statistics = () => {
  const [transactionsPerSec, setTransactionsPerSec] = useState("");
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [count, setCount] = useState(197080341453);

  useEffect(() => {
    const interval = setInterval(() => {
      const transactionsPerSec =
        Math.floor(Math.random() * (4829 - 3989 + 1)) + 3989;
      setTransactionsPerSec(transactionsPerSec.toLocaleString());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 0.2); // 1 millisecond interval, adjust as needed

    setIntervalId(intervalId);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, [intervalId]);

  const stringCount = count.toLocaleString();

  return (
    <S.Wrapper>
      <S.Maxwidth>
        <S.TopContent>
          <S.StatisticsHeader>
            Join a community <span className="block">of millions.</span>
          </S.StatisticsHeader>
          <S.Colorful>
            <div>
              <S.Figure color=" linear-gradient(101.11deg,#f087ff 14.47%,#6e1fce 39.43%,rgba(110,31,206,.1) 76.77%)">
                11.5M+
              </S.Figure>
              <S.Tag>active accounts</S.Tag>
            </div>
            <div>
              <S.Figure color=" linear-gradient(100.93deg,#1fcff1 15.61%,#234cb6 41.38%,rgba(35,76,182,.1) 79.94%)">
                21.9M
              </S.Figure>
              <S.Tag>nfts minted</S.Tag>
            </div>
            <div>
              <S.Figure color=" linear-gradient(97.65deg,#19fb9b 11.36%,#199890 54.3%,#005f59 100.78%)">
                $0.00025
              </S.Figure>
              <S.Tag>average cost per transaction</S.Tag>
            </div>
          </S.Colorful>
        </S.TopContent>
        <S.BottomContent>
          <div>
            <S.StatisticsHeader>Made for mass adoption.</S.StatisticsHeader>
            <S.Tag className="tag">live data</S.Tag>
          </div>
          <S.Cards>
            <S.Row className="margin-top">
              <Card
                borderColor="#1FCFF1"
                heading="Fast"
                description="Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network."
                value={transactionsPerSec}
                tag="transactions per second"
              />
              <Card
                borderColor="#FFD512"
                heading="Decentralized"
                description="The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant."
                value="1,839"
                tag="validator nodes"
              />
            </S.Row>
            <S.Row>
              <Card
                borderColor="#9945FF"
                heading="Scalable"
                description="Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01."
                value={stringCount}
                tag="total transactions"
              />
              <Card
                borderColor="#19FB9B;"
                heading="Energy Efficient"
                description="Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches."
                value="0%"
                tag="net carbon impact"
              />
            </S.Row>
          </S.Cards>
        </S.BottomContent>
      </S.Maxwidth>
    </S.Wrapper>
  );
};

export default Statistics;
