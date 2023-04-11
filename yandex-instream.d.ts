/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace yandex {
	namespace ya {
		class videoAd {
			static loadModule(name: string): Promise<{ AdLoader: AdLoaderObject }>
		}
		interface AdLoaderObject {
			create(adConfig: adConfig): Promise<AdLoader>
		}
		interface AdLoader {
			loadAd(): Promise<AdStore>
			destroy: () => void
		}
		interface adConfig { }
		interface PlaybackParameters { }
		// https://yandex.ru/dev/video-sdk/doc/dg/sdk-html5/AdPlaybackController-class.html
		interface AdPlaybackController {
			getAdVolume(): number
			playAd(): void
			stopAd(): void
			pauseAd(): void
			resumeAd(): void
			subscribe(type: string, listener: CallableFunction): () => void
		}
		interface AdStore {
			createPlaybackController(
				videoSlot: HTMLVideoElement,
				slot: HTMLElement,
				playbackParameters?: PlaybackParameters,
			): AdPlaybackController
			destroy: () => void
		}
	}
}
