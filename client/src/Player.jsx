import PlayerForm from './Components/PlayerForm'
import PlayerTable from './Components/PlayerTable'
import SearchBar from './Components/SearchBar'
import { PlayerProvider } from './Context/PlayerContext'

const Player = () => {
  return (
    <div>
      <PlayerProvider>
        <SearchBar />
        <PlayerTable />
        <PlayerForm />
      </PlayerProvider>
    </div>
  )
}

export default Player
