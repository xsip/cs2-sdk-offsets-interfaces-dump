// generated - do not edit!

import {client_CPlayerControllerComponent} from '../client/CPlayerControllerComponent';
// Class size: 0xFE0
// BaseClass: : public CS2::client::CPlayerControllerComponent
export const server_CCSPlayerController_InventoryServices  = {
	...client_CPlayerControllerComponent,
	m_unMusicID: 64n, // uint16_t m_unMusicID; |  0x40 | Schema_Builtin | Size: 0x2
	m_rank: 68n, // client::MedalRank_t[6]  | Schema_FixedArray | Size: 0x120
	m_nPersonaDataPublicLevel: 92n, // int32_t m_nPersonaDataPublicLevel; |  0x5c | Schema_Builtin | Size: 0x4
	m_nPersonaDataPublicCommendsLeader: 96n, // int32_t m_nPersonaDataPublicCommendsLeader; |  0x60 | Schema_Builtin | Size: 0x4
	m_nPersonaDataPublicCommendsTeacher: 100n, // int32_t m_nPersonaDataPublicCommendsTeacher; |  0x64 | Schema_Builtin | Size: 0x4
	m_nPersonaDataPublicCommendsFriendly: 104n, // int32_t m_nPersonaDataPublicCommendsFriendly; |  0x68 | Schema_Builtin | Size: 0x4
	m_nPersonaDataXpTrailLevel: 108n, // int32_t m_nPersonaDataXpTrailLevel; |  0x6c | Schema_Builtin | Size: 0x4
	m_unEquippedPlayerSprayIDs: 3912n, // uint32_t m_unEquippedPlayerSprayIDs[1]; |  0xf48 | Schema_FixedArray | Size: 0x4
	m_unCurrentLoadoutHash: 3920n, // uint64_t m_unCurrentLoadoutHash; |  0xf50 | Schema_Builtin | Size: 0x8
	m_vecServerAuthoritativeWeaponSlots: 3928n, // GlobalTypes::CUtlVectorEmbeddedNetworkVar<client::ServerAuthoritativeWeaponSlot_t>  | Schema_Atomic | Size: 0x88
}
