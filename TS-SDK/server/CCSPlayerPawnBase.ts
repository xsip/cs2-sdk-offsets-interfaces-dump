// generated - do not edit!

import {server_CBasePlayerPawn} from './CBasePlayerPawn';
// Class size: 0xEE0
// BaseClass: : public CS2::server::CBasePlayerPawn
export const server_CCSPlayerPawnBase  = {
	...server_CBasePlayerPawn,
	m_CTouchExpansionComponent: 3488n, // server::CTouchExpansionComponent  | Schema_DeclaredClass | Size: 0x50
	m_pPingServices: 3568n, // server::CCSPlayer_PingServices**  | Schema_Ptr | Size: 0x8
	m_blindUntilTime: 3576n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_blindStartTime: 3580n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iPlayerState: 3584n, // client::CSPlayerState  | Schema_DeclaredEnum | Size: 0x4
	m_bRespawning: 3760n, // bool m_bRespawning; |  0xeb0 | Schema_Builtin | Size: 0x1
	m_bHasMovedSinceSpawn: 3761n, // bool m_bHasMovedSinceSpawn; |  0xeb1 | Schema_Builtin | Size: 0x1
	m_iNumSpawns: 3764n, // int32_t m_iNumSpawns; |  0xeb4 | Schema_Builtin | Size: 0x4
	m_flIdleTimeSinceLastAction: 3772n, // float32 m_flIdleTimeSinceLastAction; |  0xebc | Schema_Builtin | Size: 0x4
	m_fNextRadarUpdateTime: 3776n, // float32 m_fNextRadarUpdateTime; |  0xec0 | Schema_Builtin | Size: 0x4
	m_flFlashDuration: 3780n, // float32 m_flFlashDuration; |  0xec4 | Schema_Builtin | Size: 0x4
	m_flFlashMaxAlpha: 3784n, // float32 m_flFlashMaxAlpha; |  0xec8 | Schema_Builtin | Size: 0x4
	m_flProgressBarStartTime: 3788n, // float32 m_flProgressBarStartTime; |  0xecc | Schema_Builtin | Size: 0x4
	m_iProgressBarDuration: 3792n, // int32_t m_iProgressBarDuration; |  0xed0 | Schema_Builtin | Size: 0x4
	m_hOriginalController: 3796n, // GlobalTypes::CHandle<server::CCSPlayerController>  | Schema_Atomic | Size: 0x4
}
