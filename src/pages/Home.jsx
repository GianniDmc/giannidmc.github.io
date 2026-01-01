import Hero from '../components/landing/Hero'
import SaveTheDate from '../components/landing/SaveTheDate'

function Home() {
    return (
        <div>
            <div id="invitation"><Hero /></div>
            <div id="save-the-date"><SaveTheDate /></div>
        </div>
    )
}

export default Home
