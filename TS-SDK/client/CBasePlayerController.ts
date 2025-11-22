// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x7E8
// BaseClass: : public CS2::client::C_BaseEntity
export const client_CBasePlayerController  = {
	...client_C_BaseEntity,
	m_CommandContext: 1536n, // client::C_CommandContext  | Schema_DeclaredClass | Size: 0xa8
	m_nInButtonsWhichAreToggles: 1704n, // uint64_t m_nInButtonsWhichAreToggles; |  0x6a8 | Schema_Builtin | Size: 0x8
	m_nTickBase: 1712n, // uint32_t m_nTickBase; |  0x6b0 | Schema_Builtin | Size: 0x4
	m_hPawn: 1716n, // GlobalTypes::CHandle<client::C_BasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_bKnownTeamMismatch: 1720n, // bool m_bKnownTeamMismatch; |  0x6b8 | Schema_Builtin | Size: 0x1
	m_hPredictedPawn: 1724n, // GlobalTypes::CHandle<client::C_BasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nSplitScreenSlot: 1728n, // GlobalTypes::CSplitScreenSlot  | Schema_Atomic | Size: 0x4
	m_hSplitOwner: 1732n, // GlobalTypes::CHandle<client::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hSplitScreenPlayers: 1736n, // GlobalTypes::CUtlVector<GlobalTypes::CHandle<client::CBasePlayerController>>  | Schema_Atomic | Size: 0x18
	m_bIsHLTV: 1760n, // bool m_bIsHLTV; |  0x6e0 | Schema_Builtin | Size: 0x1
	m_iConnected: 1764n, // client::PlayerConnectedState  | Schema_DeclaredEnum | Size: 0x4
	m_iszPlayerName: 1768n, // char m_iszPlayerName[128]; |  0x6e8 | Schema_FixedArray | Size: 0x80
	m_steamID: 1904n, // uint64_t m_steamID; |  0x770 | Schema_Builtin | Size: 0x8
	m_bIsLocalPlayerController: 1912n, // bool m_bIsLocalPlayerController; |  0x778 | Schema_Builtin | Size: 0x1
	m_bNoClipEnabled: 1913n, // bool m_bNoClipEnabled; |  0x779 | Schema_Builtin | Size: 0x1
	m_iDesiredFOV: 1916n, // uint32_t m_iDesiredFOV; |  0x77c | Schema_Builtin | Size: 0x4
}
