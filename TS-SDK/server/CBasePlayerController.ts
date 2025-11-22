// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x810
// BaseClass: : public CS2::server::CBaseEntity
export const server_CBasePlayerController  = {
	...server_CBaseEntity,
	m_nInButtonsWhichAreToggles: 1272n, // uint64_t m_nInButtonsWhichAreToggles; |  0x4f8 | Schema_Builtin | Size: 0x8
	m_nTickBase: 1280n, // uint32_t m_nTickBase; |  0x500 | Schema_Builtin | Size: 0x4
	m_hPawn: 1320n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_bKnownTeamMismatch: 1324n, // bool m_bKnownTeamMismatch; |  0x52c | Schema_Builtin | Size: 0x1
	m_nSplitScreenSlot: 1328n, // GlobalTypes::CSplitScreenSlot  | Schema_Atomic | Size: 0x4
	m_hSplitOwner: 1332n, // GlobalTypes::CHandle<server::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hSplitScreenPlayers: 1336n, // server::CUtlVector<GlobalTypes::CHandle<server::CBasePlayerController>>  | Schema_Atomic | Size: 0x18
	m_bIsHLTV: 1360n, // bool m_bIsHLTV; |  0x550 | Schema_Builtin | Size: 0x1
	m_iConnected: 1364n, // client::PlayerConnectedState  | Schema_DeclaredEnum | Size: 0x4
	m_iszPlayerName: 1368n, // char m_iszPlayerName[128]; |  0x558 | Schema_FixedArray | Size: 0x80
	m_szNetworkIDString: 1496n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_fLerpTime: 1504n, // float32 m_fLerpTime; |  0x5e0 | Schema_Builtin | Size: 0x4
	m_bLagCompensation: 1508n, // bool m_bLagCompensation; |  0x5e4 | Schema_Builtin | Size: 0x1
	m_bPredict: 1509n, // bool m_bPredict; |  0x5e5 | Schema_Builtin | Size: 0x1
	m_bIsLowViolence: 1516n, // bool m_bIsLowViolence; |  0x5ec | Schema_Builtin | Size: 0x1
	m_bGamePaused: 1517n, // bool m_bGamePaused; |  0x5ed | Schema_Builtin | Size: 0x1
	m_iIgnoreGlobalChat: 1832n, // client::ChatIgnoreType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flLastPlayerTalkTime: 1836n, // float32 m_flLastPlayerTalkTime; |  0x72c | Schema_Builtin | Size: 0x4
	m_flLastEntitySteadyState: 1840n, // float32 m_flLastEntitySteadyState; |  0x730 | Schema_Builtin | Size: 0x4
	m_nAvailableEntitySteadyState: 1844n, // int32_t m_nAvailableEntitySteadyState; |  0x734 | Schema_Builtin | Size: 0x4
	m_bHasAnySteadyStateEnts: 1848n, // bool m_bHasAnySteadyStateEnts; |  0x738 | Schema_Builtin | Size: 0x1
	m_steamID: 1864n, // uint64_t m_steamID; |  0x748 | Schema_Builtin | Size: 0x8
	m_bNoClipEnabled: 1872n, // bool m_bNoClipEnabled; |  0x750 | Schema_Builtin | Size: 0x1
	m_iDesiredFOV: 1876n, // uint32_t m_iDesiredFOV; |  0x754 | Schema_Builtin | Size: 0x4
}
