import { useCallback } from "react"
import { Button } from "react-native"
import TrackPlayer, { useIsPlaying } from "react-native-track-player"

const App = () => {
    const { playing, bufferingDuringPlay } = useIsPlaying()

    const handleLoad = useCallback(async () => {
        await TrackPlayer.setupPlayer()
        await TrackPlayer.add({
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'Song',
            artist: 'Artist',
            artwork: 'https://picsum.photos/256/256',
        })
        await TrackPlayer.play()

    }, [])

    const togglePlayback = useCallback(async () => {
        if (playing)
            await TrackPlayer.pause()
        else
            await TrackPlayer.play()
    }, [playing])

    return (<>

        <Button
            title='Load'
            onPress={handleLoad}
        />

        <Button
            title={playing ? 'Pause' : 'Play'}
            onPress={togglePlayback}
            disabled={bufferingDuringPlay}
        />
    </>)
}

export default App