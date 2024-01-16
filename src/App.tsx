import { Bracket, IRoundProps, Seed, SingleLineSeed, ISingleEliminationProps, SeedItem, SeedTeam, IRenderSeedProps } from 'react-brackets';
import React from 'react';

const rounds: IRoundProps[] = [
  {
    title: 'Grupp 1',
    seeds: [
      {
        id: 1,
        teams: [{ name: 'Team A' }, { name: 'Team B'}, { name: 'Team C'}, { name: 'Team D'},],
      },
      {
        id: 2,
        teams: [{ name: 'Team A' }, { name: 'Team B'}, { name: 'Team C'}, { name: 'Team D'},],
      },
    ],
  },
];
const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}: IRenderSeedProps) => {



const isLineConnector = rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;

const Wrapper = isLineConnector ? SingleLineSeed : Seed;

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Wrapper mobileBreakpoint={breakpoint} style={{ backgroundColor: 'transparent'}}>
      <SeedItem>
        <div>
          <SeedTeam style={{ color: 'green', fontWeight: 'bold', fontSize: 15}}>{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
          <SeedTeam style={{ color: 'red', fontWeight: 'bold', fontSize: 15}}> {seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
        </div>
      </SeedItem>
    </Wrapper>
    
  );
};


const App = () => {
  return <Bracket 
    rounds={rounds}
    // roundTitleComponent={(title: React.ReactNode, roundIndex: number) => {
    //   return <div style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>{title}</div>;
    // }}
    renderSeedComponent={CustomSeed}
  />;
};

export default App;


