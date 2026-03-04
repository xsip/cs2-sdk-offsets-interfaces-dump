// generated - do not edit!

import {client_C_BasePlayerPawn} from './C_BasePlayerPawn';
// Class size: 0x1650
// BaseClass: : public CS2::client::C_BasePlayerPawn
export const client_C_CSPlayerPawnBase  = {
	...client_C_BasePlayerPawn,
	m_pPingServices: 5568n, // client::CCSPlayer_PingServices**  | Schema_Ptr | Size: 0x8
	m_previousPlayerState: 5576n, // client::CSPlayerState  | Schema_DeclaredEnum | Size: 0x4
	m_iPlayerState: 5580n, // client::CSPlayerState  | Schema_DeclaredEnum | Size: 0x4
	m_bHasMovedSinceSpawn: 5584n, // bool m_bHasMovedSinceSpawn; |  0x15d0 | Schema_Builtin | Size: 0x1
	m_flLastSpawnTimeIndex: 5588n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iProgressBarDuration: 5592n, // int32_t m_iProgressBarDuration; |  0x15d8 | Schema_Builtin | Size: 0x4
	m_flProgressBarStartTime: 5596n, // float32 m_flProgressBarStartTime; |  0x15dc | Schema_Builtin | Size: 0x4
	m_flClientDeathTime: 5600n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFlashBangTime: 5604n, // float32 m_flFlashBangTime; |  0x15e4 | Schema_Builtin | Size: 0x4
	m_flFlashScreenshotAlpha: 5608n, // float32 m_flFlashScreenshotAlpha; |  0x15e8 | Schema_Builtin | Size: 0x4
	m_flFlashOverlayAlpha: 5612n, // float32 m_flFlashOverlayAlpha; |  0x15ec | Schema_Builtin | Size: 0x4
	m_bFlashBuildUp: 5616n, // bool m_bFlashBuildUp; |  0x15f0 | Schema_Builtin | Size: 0x1
	m_bFlashDspHasBeenCleared: 5617n, // bool m_bFlashDspHasBeenCleared; |  0x15f1 | Schema_Builtin | Size: 0x1
	m_bFlashScreenshotHasBeenGrabbed: 5618n, // bool m_bFlashScreenshotHasBeenGrabbed; |  0x15f2 | Schema_Builtin | Size: 0x1
	m_flFlashMaxAlpha: 5620n, // float32 m_flFlashMaxAlpha; |  0x15f4 | Schema_Builtin | Size: 0x4
	m_flFlashDuration: 5624n, // float32 m_flFlashDuration; |  0x15f8 | Schema_Builtin | Size: 0x4
	m_flClientHealthFadeChangeTimestamp: 5628n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nClientHealthFadeParityValue: 5632n, // int32_t m_nClientHealthFadeParityValue; |  0x1600 | Schema_Builtin | Size: 0x4
	m_fNextThinkPushAway: 5636n, // float32 m_fNextThinkPushAway; |  0x1604 | Schema_Builtin | Size: 0x4
	m_flCurrentMusicStartTime: 5644n, // float32 m_flCurrentMusicStartTime; |  0x160c | Schema_Builtin | Size: 0x4
	m_flMusicRoundStartTime: 5648n, // float32 m_flMusicRoundStartTime; |  0x1610 | Schema_Builtin | Size: 0x4
	m_bDeferStartMusicOnWarmup: 5652n, // bool m_bDeferStartMusicOnWarmup; |  0x1614 | Schema_Builtin | Size: 0x1
	m_flLastSmokeOverlayAlpha: 5656n, // float32 m_flLastSmokeOverlayAlpha; |  0x1618 | Schema_Builtin | Size: 0x4
	m_flLastSmokeAge: 5660n, // float32 m_flLastSmokeAge; |  0x161c | Schema_Builtin | Size: 0x4
	m_vLastSmokeOverlayColor: 5664n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hOriginalController: 5704n, // GlobalTypes::CHandle<client::CCSPlayerController>  | Schema_Atomic | Size: 0x4
}
