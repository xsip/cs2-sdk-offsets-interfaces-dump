// generated - do not edit!

// Class size: 0x128
// BaseClass: NONE
export const client_CTakeDamageInfo  = {
	m_vecDamageForce: 8n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecDamagePosition: 20n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vecReportedPosition: 32n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vecDamageDirection: 44n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hInflictor: 56n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hAttacker: 60n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hAbility: 64n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_flDamage: 68n, // float32 m_flDamage; |  0x44 | Schema_Builtin | Size: 0x4
	m_flTotalledDamage: 72n, // float32 m_flTotalledDamage; |  0x48 | Schema_Builtin | Size: 0x4
	m_bitsDamageType: 76n, // client::DamageTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_iDamageCustom: 80n, // int32_t m_iDamageCustom; |  0x50 | Schema_Builtin | Size: 0x4
	m_iAmmoType: 84n, // client::AmmoIndex_t  | Schema_DeclaredClass | Size: 0x1
	m_flOriginalDamage: 96n, // float32 m_flOriginalDamage; |  0x60 | Schema_Builtin | Size: 0x4
	m_bShouldBleed: 100n, // bool m_bShouldBleed; |  0x64 | Schema_Builtin | Size: 0x1
	m_bShouldSpark: 101n, // bool m_bShouldSpark; |  0x65 | Schema_Builtin | Size: 0x1
	m_nDamageFlags: 112n, // client::TakeDamageFlags_t  | Schema_DeclaredEnum | Size: 0x8
	m_sDamageSourceName: 120n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_iHitGroupId: 128n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nNumObjectsPenetrated: 132n, // int32_t m_nNumObjectsPenetrated; |  0x84 | Schema_Builtin | Size: 0x4
	m_flFriendlyFireDamageReductionRatio: 136n, // float32 m_flFriendlyFireDamageReductionRatio; |  0x88 | Schema_Builtin | Size: 0x4
	m_nDestructibleHitGroupsToForceDestroy: 264n, // GlobalTypes::CUtlVector<client::DestructibleHitGroupToDestroy_t>  | Schema_Atomic | Size: 0x18
	m_bInTakeDamageFlow: 288n, // bool m_bInTakeDamageFlow; |  0x120 | Schema_Builtin | Size: 0x1
}
