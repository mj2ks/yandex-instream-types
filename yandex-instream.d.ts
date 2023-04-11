/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace yandex {
	interface yaContextCb {
		push: (cb: CallableFunction) => void
	}
	namespace Ya {
		namespace Context {
			interface RenderData {
				product: ['direct', 'rtb']
			}
			interface ErrorData {
				code: number
				text: string
				type: ['error', 'warning']
			}
			interface RenderOptions {
				async: boolean // ??
				statId?: number
				blockId: string
				renderTo?: string
				onRender?: (data: RenderData) => void
				onError?: (data: ErrorData) => void
				onClose?: () => void
				videoCallbacks?: {}
			}
			class AdvManager {
				static render: (options: RenderOptions, callback?: CallableFunction) => void
				static destroy: () => void
			}
		}
		class x { }
	}
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
