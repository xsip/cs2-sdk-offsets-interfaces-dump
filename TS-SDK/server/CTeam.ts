// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x560
// BaseClass: : public CS2::server::CBaseEntity
export const server_CTeam  = {
	...server_CBaseEntity,
	m_aPlayerControllers: 1192n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBasePlayerController>>  | Schema_Atomic | Size: 0x18
	m_aPlayers: 1216n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBasePlayerPawn>>  | Schema_Atomic | Size: 0x18
	m_iScore: 1240n, // int32_t m_iScore; |  0x4d8 | Schema_Builtin | Size: 0x4
	m_szTeamname: 1244n, // char m_szTeamname[129]; |  0x4dc | Schema_FixedArray | Size: 0x81
}
