// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x7F8
// BaseClass: : public CS2::client::C_BaseEntity
export const client_CBasePlayerController  = {
	...client_C_BaseEntity,
	m_CommandContext: 1552n, // client::C_CommandContext  | Schema_DeclaredClass | Size: 0xa8
	m_nInButtonsWhichAreToggles: 1720n, // uint64_t m_nInButtonsWhichAreToggles; |  0x6b8 | Schema_Builtin | Size: 0x8
	m_nTickBase: 1728n, // uint32_t m_nTickBase; |  0x6c0 | Schema_Builtin | Size: 0x4
	m_hPawn: 1732n, // GlobalTypes::CHandle<client::C_BasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_bKnownTeamMismatch: 1736n, // bool m_bKnownTeamMismatch; |  0x6c8 | Schema_Builtin | Size: 0x1
	m_hPredictedPawn: 1740n, // GlobalTypes::CHandle<client::C_BasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nSplitScreenSlot: 1744n, // GlobalTypes::CSplitScreenSlot  | Schema_Atomic | Size: 0x4
	m_hSplitOwner: 1748n, // GlobalTypes::CHandle<client::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hSplitScreenPlayers: 1752n, // GlobalTypes::CUtlVector<GlobalTypes::CHandle<client::CBasePlayerController>>  | Schema_Atomic | Size: 0x18
	m_bIsHLTV: 1776n, // bool m_bIsHLTV; |  0x6f0 | Schema_Builtin | Size: 0x1
	m_iConnected: 1780n, // client::PlayerConnectedState  | Schema_DeclaredEnum | Size: 0x4
	m_iszPlayerName: 1784n, // char m_iszPlayerName[128]; |  0x6f8 | Schema_FixedArray | Size: 0x80
	m_steamID: 1920n, // uint64_t m_steamID; |  0x780 | Schema_Builtin | Size: 0x8
	m_bIsLocalPlayerController: 1928n, // bool m_bIsLocalPlayerController; |  0x788 | Schema_Builtin | Size: 0x1
	m_bNoClipEnabled: 1929n, // bool m_bNoClipEnabled; |  0x789 | Schema_Builtin | Size: 0x1
	m_iDesiredFOV: 1932n, // uint32_t m_iDesiredFOV; |  0x78c | Schema_Builtin | Size: 0x4
}
