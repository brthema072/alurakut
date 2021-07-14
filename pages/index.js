import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidbar(prop){  
  return (
    <Box>
      <img src={`https://github.com/${prop.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = "brthema072";
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          
          <ProfileSidbar githubUser={githubUser} />

        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title"> Bem vindo (a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            Pessoas da comunidade ({ pessoasFavoritas.length })

            <ul>
              { pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`}  key={itemAtual} >
                      <img src={ `https://github.com/${itemAtual}.png` }></img>
                      <span>{ itemAtual }</span>
                    </a>
                  </li>
                )
              }) }
            </ul>

          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidade
          </Box>

        </div>
      </MainGrid>
    </>
  )
}
