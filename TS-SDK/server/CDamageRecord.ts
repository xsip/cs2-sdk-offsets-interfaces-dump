// generated - do not edit!

// Class size: 0x78
// BaseClass: NONE
export const server_CDamageRecord  = {
	m_PlayerDamager: 48n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_PlayerRecipient: 52n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_hPlayerControllerDamager: 56n, // GlobalTypes::CHandle<server::CCSPlayerController>  | Schema_Atomic | Size: 0x4
	m_hPlayerControllerRecipient: 60n, // GlobalTypes::CHandle<server::CCSPlayerController>  | Schema_Atomic | Size: 0x4
	m_szPlayerDamagerName: 64n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szPlayerRecipientName: 72n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_DamagerXuid: 80n, // uint64_t m_DamagerXuid; |  0x50 | Schema_Builtin | Size: 0x8
	m_RecipientXuid: 88n, // uint64_t m_RecipientXuid; |  0x58 | Schema_Builtin | Size: 0x8
	m_flBulletsDamage: 96n, // float32 m_flBulletsDamage; |  0x60 | Schema_Builtin | Size: 0x4
	m_flDamage: 100n, // float32 m_flDamage; |  0x64 | Schema_Builtin | Size: 0x4
	m_flActualHealthRemoved: 104n, // float32 m_flActualHealthRemoved; |  0x68 | Schema_Builtin | Size: 0x4
	m_iNumHits: 108n, // int32_t m_iNumHits; |  0x6c | Schema_Builtin | Size: 0x4
	m_iLastBulletUpdate: 112n, // int32_t m_iLastBulletUpdate; |  0x70 | Schema_Builtin | Size: 0x4
	m_bIsOtherEnemy: 116n, // bool m_bIsOtherEnemy; |  0x74 | Schema_Builtin | Size: 0x1
	m_killType: 117n, // client::EKillTypes_t  | Schema_DeclaredEnum | Size: 0x1
}
