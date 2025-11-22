// generated - do not edit!

import {client_C_BasePlayerPawn} from './C_BasePlayerPawn';
// Class size: 0x1668
// BaseClass: : public CS2::client::C_BasePlayerPawn
export const client_C_CSPlayerPawnBase  = {
	...client_C_BasePlayerPawn,
	m_pPingServices: 5592n, // client::CCSPlayer_PingServices**  | Schema_Ptr | Size: 0x8
	m_previousPlayerState: 5600n, // client::CSPlayerState  | Schema_DeclaredEnum | Size: 0x4
	m_iPlayerState: 5604n, // client::CSPlayerState  | Schema_DeclaredEnum | Size: 0x4
	m_bHasMovedSinceSpawn: 5608n, // bool m_bHasMovedSinceSpawn; |  0x15e8 | Schema_Builtin | Size: 0x1
	m_flLastSpawnTimeIndex: 5612n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iProgressBarDuration: 5616n, // int32_t m_iProgressBarDuration; |  0x15f0 | Schema_Builtin | Size: 0x4
	m_flProgressBarStartTime: 5620n, // float32 m_flProgressBarStartTime; |  0x15f4 | Schema_Builtin | Size: 0x4
	m_flClientDeathTime: 5624n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFlashBangTime: 5628n, // float32 m_flFlashBangTime; |  0x15fc | Schema_Builtin | Size: 0x4
	m_flFlashScreenshotAlpha: 5632n, // float32 m_flFlashScreenshotAlpha; |  0x1600 | Schema_Builtin | Size: 0x4
	m_flFlashOverlayAlpha: 5636n, // float32 m_flFlashOverlayAlpha; |  0x1604 | Schema_Builtin | Size: 0x4
	m_bFlashBuildUp: 5640n, // bool m_bFlashBuildUp; |  0x1608 | Schema_Builtin | Size: 0x1
	m_bFlashDspHasBeenCleared: 5641n, // bool m_bFlashDspHasBeenCleared; |  0x1609 | Schema_Builtin | Size: 0x1
	m_bFlashScreenshotHasBeenGrabbed: 5642n, // bool m_bFlashScreenshotHasBeenGrabbed; |  0x160a | Schema_Builtin | Size: 0x1
	m_flFlashMaxAlpha: 5644n, // float32 m_flFlashMaxAlpha; |  0x160c | Schema_Builtin | Size: 0x4
	m_flFlashDuration: 5648n, // float32 m_flFlashDuration; |  0x1610 | Schema_Builtin | Size: 0x4
	m_flClientHealthFadeChangeTimestamp: 5652n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nClientHealthFadeParityValue: 5656n, // int32_t m_nClientHealthFadeParityValue; |  0x1618 | Schema_Builtin | Size: 0x4
	m_fNextThinkPushAway: 5660n, // float32 m_fNextThinkPushAway; |  0x161c | Schema_Builtin | Size: 0x4
	m_flCurrentMusicStartTime: 5668n, // float32 m_flCurrentMusicStartTime; |  0x1624 | Schema_Builtin | Size: 0x4
	m_flMusicRoundStartTime: 5672n, // float32 m_flMusicRoundStartTime; |  0x1628 | Schema_Builtin | Size: 0x4
	m_bDeferStartMusicOnWarmup: 5676n, // bool m_bDeferStartMusicOnWarmup; |  0x162c | Schema_Builtin | Size: 0x1
	m_flLastSmokeOverlayAlpha: 5680n, // float32 m_flLastSmokeOverlayAlpha; |  0x1630 | Schema_Builtin | Size: 0x4
	m_flLastSmokeAge: 5684n, // float32 m_flLastSmokeAge; |  0x1634 | Schema_Builtin | Size: 0x4
	m_vLastSmokeOverlayColor: 5688n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hOriginalController: 5728n, // GlobalTypes::CHandle<client::CCSPlayerController>  | Schema_Atomic | Size: 0x4
}
