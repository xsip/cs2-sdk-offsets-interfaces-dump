// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x7C8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CBasePlayerController  = {
	...server_CBaseEntity,
	m_nInButtonsWhichAreToggles: 1200n, // uint64_t m_nInButtonsWhichAreToggles; |  0x4b0 | Schema_Builtin | Size: 0x8
	m_nTickBase: 1208n, // uint32_t m_nTickBase; |  0x4b8 | Schema_Builtin | Size: 0x4
	m_hPawn: 1248n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_bKnownTeamMismatch: 1252n, // bool m_bKnownTeamMismatch; |  0x4e4 | Schema_Builtin | Size: 0x1
	m_nSplitScreenSlot: 1256n, // GlobalTypes::CSplitScreenSlot  | Schema_Atomic | Size: 0x4
	m_hSplitOwner: 1260n, // GlobalTypes::CHandle<server::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hSplitScreenPlayers: 1264n, // server::CUtlVector<GlobalTypes::CHandle<server::CBasePlayerController>>  | Schema_Atomic | Size: 0x18
	m_bIsHLTV: 1288n, // bool m_bIsHLTV; |  0x508 | Schema_Builtin | Size: 0x1
	m_iConnected: 1292n, // client::PlayerConnectedState  | Schema_DeclaredEnum | Size: 0x4
	m_iszPlayerName: 1296n, // char m_iszPlayerName[128]; |  0x510 | Schema_FixedArray | Size: 0x80
	m_szNetworkIDString: 1424n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_fLerpTime: 1432n, // float32 m_fLerpTime; |  0x598 | Schema_Builtin | Size: 0x4
	m_bLagCompensation: 1436n, // bool m_bLagCompensation; |  0x59c | Schema_Builtin | Size: 0x1
	m_bPredict: 1437n, // bool m_bPredict; |  0x59d | Schema_Builtin | Size: 0x1
	m_bIsLowViolence: 1444n, // bool m_bIsLowViolence; |  0x5a4 | Schema_Builtin | Size: 0x1
	m_bGamePaused: 1445n, // bool m_bGamePaused; |  0x5a5 | Schema_Builtin | Size: 0x1
	m_iIgnoreGlobalChat: 1760n, // client::ChatIgnoreType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flLastPlayerTalkTime: 1764n, // float32 m_flLastPlayerTalkTime; |  0x6e4 | Schema_Builtin | Size: 0x4
	m_flLastEntitySteadyState: 1768n, // float32 m_flLastEntitySteadyState; |  0x6e8 | Schema_Builtin | Size: 0x4
	m_nAvailableEntitySteadyState: 1772n, // int32_t m_nAvailableEntitySteadyState; |  0x6ec | Schema_Builtin | Size: 0x4
	m_bHasAnySteadyStateEnts: 1776n, // bool m_bHasAnySteadyStateEnts; |  0x6f0 | Schema_Builtin | Size: 0x1
	m_steamID: 1792n, // uint64_t m_steamID; |  0x700 | Schema_Builtin | Size: 0x8
	m_bNoClipEnabled: 1800n, // bool m_bNoClipEnabled; |  0x708 | Schema_Builtin | Size: 0x1
	m_iDesiredFOV: 1804n, // uint32_t m_iDesiredFOV; |  0x70c | Schema_Builtin | Size: 0x4
}
