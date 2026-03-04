// generated - do not edit!

import {server_CBasePlayerPawn} from './CBasePlayerPawn';
// Class size: 0xE70
// BaseClass: : public CS2::server::CBasePlayerPawn
export const server_CCSPlayerPawnBase  = {
	...server_CBasePlayerPawn,
	m_CTouchExpansionComponent: 3376n, // server::CTouchExpansionComponent  | Schema_DeclaredClass | Size: 0x50
	m_pPingServices: 3456n, // server::CCSPlayer_PingServices**  | Schema_Ptr | Size: 0x8
	m_blindUntilTime: 3464n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_blindStartTime: 3468n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iPlayerState: 3472n, // client::CSPlayerState  | Schema_DeclaredEnum | Size: 0x4
	m_bRespawning: 3648n, // bool m_bRespawning; |  0xe40 | Schema_Builtin | Size: 0x1
	m_bHasMovedSinceSpawn: 3649n, // bool m_bHasMovedSinceSpawn; |  0xe41 | Schema_Builtin | Size: 0x1
	m_iNumSpawns: 3652n, // int32_t m_iNumSpawns; |  0xe44 | Schema_Builtin | Size: 0x4
	m_flIdleTimeSinceLastAction: 3660n, // float32 m_flIdleTimeSinceLastAction; |  0xe4c | Schema_Builtin | Size: 0x4
	m_fNextRadarUpdateTime: 3664n, // float32 m_fNextRadarUpdateTime; |  0xe50 | Schema_Builtin | Size: 0x4
	m_flFlashDuration: 3668n, // float32 m_flFlashDuration; |  0xe54 | Schema_Builtin | Size: 0x4
	m_flFlashMaxAlpha: 3672n, // float32 m_flFlashMaxAlpha; |  0xe58 | Schema_Builtin | Size: 0x4
	m_flProgressBarStartTime: 3676n, // float32 m_flProgressBarStartTime; |  0xe5c | Schema_Builtin | Size: 0x4
	m_iProgressBarDuration: 3680n, // int32_t m_iProgressBarDuration; |  0xe60 | Schema_Builtin | Size: 0x4
	m_hOriginalController: 3684n, // GlobalTypes::CHandle<server::CCSPlayerController>  | Schema_Atomic | Size: 0x4
}
