// generated - do not edit!

import {server_CModelPointEntity} from './CModelPointEntity';
// Class size: 0x788
// BaseClass: : public CS2::server::CModelPointEntity
export const server_CEnvExplosion  = {
	...server_CModelPointEntity,
	m_iMagnitude: 1840n, // int32_t m_iMagnitude; |  0x730 | Schema_Builtin | Size: 0x4
	m_flPlayerDamage: 1844n, // float32 m_flPlayerDamage; |  0x734 | Schema_Builtin | Size: 0x4
	m_iRadiusOverride: 1848n, // int32_t m_iRadiusOverride; |  0x738 | Schema_Builtin | Size: 0x4
	m_flInnerRadius: 1852n, // float32 m_flInnerRadius; |  0x73c | Schema_Builtin | Size: 0x4
	m_flDamageForce: 1856n, // float32 m_flDamageForce; |  0x740 | Schema_Builtin | Size: 0x4
	m_hInflictor: 1860n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iCustomDamageType: 1864n, // client::DamageTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_bCreateDebris: 1868n, // bool m_bCreateDebris; |  0x74c | Schema_Builtin | Size: 0x1
	m_iszCustomEffectName: 1880n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszCustomSoundName: 1888n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bSuppressParticleImpulse: 1896n, // bool m_bSuppressParticleImpulse; |  0x768 | Schema_Builtin | Size: 0x1
	m_iClassIgnore: 1900n, // client::Class_T  | Schema_DeclaredEnum | Size: 0x4
	m_iClassIgnore2: 1904n, // client::Class_T  | Schema_DeclaredEnum | Size: 0x4
	m_iszEntityIgnoreName: 1912n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hEntityIgnore: 1920n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
