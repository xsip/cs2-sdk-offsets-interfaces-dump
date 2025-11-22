// generated - do not edit!

import {client_CPlayerControllerComponent} from './CPlayerControllerComponent';
// Class size: 0xF0
// BaseClass: : public CS2::client::CPlayerControllerComponent
export const client_CCSPlayerController_InventoryServices  = {
	...client_CPlayerControllerComponent,
	m_vecNetworkableLoadout: 64n, // GlobalTypes::CUtlVector<client::CCSPlayerController_InventoryServices::NetworkedLoadoutSlot_t>  | Schema_Atomic | Size: 0x18
	m_unMusicID: 88n, // uint16_t m_unMusicID; |  0x58 | Schema_Builtin | Size: 0x2
	m_rank: 92n, // client::MedalRank_t[6]  | Schema_FixedArray | Size: 0x120
	m_nPersonaDataPublicLevel: 116n, // int32_t m_nPersonaDataPublicLevel; |  0x74 | Schema_Builtin | Size: 0x4
	m_nPersonaDataPublicCommendsLeader: 120n, // int32_t m_nPersonaDataPublicCommendsLeader; |  0x78 | Schema_Builtin | Size: 0x4
	m_nPersonaDataPublicCommendsTeacher: 124n, // int32_t m_nPersonaDataPublicCommendsTeacher; |  0x7c | Schema_Builtin | Size: 0x4
	m_nPersonaDataPublicCommendsFriendly: 128n, // int32_t m_nPersonaDataPublicCommendsFriendly; |  0x80 | Schema_Builtin | Size: 0x4
	m_nPersonaDataXpTrailLevel: 132n, // int32_t m_nPersonaDataXpTrailLevel; |  0x84 | Schema_Builtin | Size: 0x4
	m_vecServerAuthoritativeWeaponSlots: 136n, // GlobalTypes::C_UtlVectorEmbeddedNetworkVar<client::ServerAuthoritativeWeaponSlot_t>  | Schema_Atomic | Size: 0x68
}
