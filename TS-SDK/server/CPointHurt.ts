// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x510
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointHurt  = {
	...server_CPointEntity,
	m_nDamage: 1264n, // int32_t m_nDamage; |  0x4f0 | Schema_Builtin | Size: 0x4
	m_bitsDamageType: 1268n, // client::DamageTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_flRadius: 1272n, // float32 m_flRadius; |  0x4f8 | Schema_Builtin | Size: 0x4
	m_flDelay: 1276n, // float32 m_flDelay; |  0x4fc | Schema_Builtin | Size: 0x4
	m_strTarget: 1280n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pActivator: 1288n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
