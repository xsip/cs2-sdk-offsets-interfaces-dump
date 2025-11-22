// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x5A8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CTeam  = {
	...server_CBaseEntity,
	m_aPlayerControllers: 1264n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBasePlayerController>>  | Schema_Atomic | Size: 0x18
	m_aPlayers: 1288n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBasePlayerPawn>>  | Schema_Atomic | Size: 0x18
	m_iScore: 1312n, // int32_t m_iScore; |  0x520 | Schema_Builtin | Size: 0x4
	m_szTeamname: 1316n, // char m_szTeamname[129]; |  0x524 | Schema_FixedArray | Size: 0x81
}
