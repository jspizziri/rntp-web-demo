import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import TrackPlayer from 'react-native-track-player'
import { PlaybackService } from './playback-service'

const root = createRoot(document.getElementById('app')!)

root.render(createElement(App))

TrackPlayer.registerPlaybackService(() => PlaybackService)