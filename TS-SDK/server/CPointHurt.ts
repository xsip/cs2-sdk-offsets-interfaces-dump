// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x4C8
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointHurt  = {
	...server_CPointEntity,
	m_nDamage: 1192n, // int32_t m_nDamage; |  0x4a8 | Schema_Builtin | Size: 0x4
	m_bitsDamageType: 1196n, // client::DamageTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_flRadius: 1200n, // float32 m_flRadius; |  0x4b0 | Schema_Builtin | Size: 0x4
	m_flDelay: 1204n, // float32 m_flDelay; |  0x4b4 | Schema_Builtin | Size: 0x4
	m_strTarget: 1208n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pActivator: 1216n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
