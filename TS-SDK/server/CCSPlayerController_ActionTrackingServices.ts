// generated - do not edit!

import {client_CPlayerControllerComponent} from '../client/CPlayerControllerComponent';
// Class size: 0x270
// BaseClass: : public CS2::client::CPlayerControllerComponent
export const server_CCSPlayerController_ActionTrackingServices  = {
	...client_CPlayerControllerComponent,
	m_perRoundStats: 64n, // server::CUtlVectorEmbeddedNetworkVar<server::CSPerRoundStats_t>  | Schema_Atomic | Size: 0x88
	m_matchStats: 200n, // server::CSMatchStats_t  | Schema_DeclaredClass | Size: 0xc0
	m_iNumRoundKills: 392n, // int32_t m_iNumRoundKills; |  0x188 | Schema_Builtin | Size: 0x4
	m_iNumRoundKillsHeadshots: 396n, // int32_t m_iNumRoundKillsHeadshots; |  0x18c | Schema_Builtin | Size: 0x4
	m_flTotalRoundDamageDealt: 400n, // float32 m_flTotalRoundDamageDealt; |  0x190 | Schema_Builtin | Size: 0x4
}
