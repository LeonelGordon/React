import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css';
import './index.css';

export function App () {
    return (
        <section className="App">
        <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran" />
        <TwitterFollowCard isFollowing= {false} userName="Leosgodon" name="Leonel Gordón" />
        </section>
    )
}

