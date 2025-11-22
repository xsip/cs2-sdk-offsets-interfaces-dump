// generated - do not edit!

import {server_CModelPointEntity} from './CModelPointEntity';
// Class size: 0x830
// BaseClass: : public CS2::server::CModelPointEntity
export const server_CEnvExplosion  = {
	...server_CModelPointEntity,
	m_iMagnitude: 2008n, // int32_t m_iMagnitude; |  0x7d8 | Schema_Builtin | Size: 0x4
	m_flPlayerDamage: 2012n, // float32 m_flPlayerDamage; |  0x7dc | Schema_Builtin | Size: 0x4
	m_iRadiusOverride: 2016n, // int32_t m_iRadiusOverride; |  0x7e0 | Schema_Builtin | Size: 0x4
	m_flInnerRadius: 2020n, // float32 m_flInnerRadius; |  0x7e4 | Schema_Builtin | Size: 0x4
	m_flDamageForce: 2024n, // float32 m_flDamageForce; |  0x7e8 | Schema_Builtin | Size: 0x4
	m_hInflictor: 2028n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iCustomDamageType: 2032n, // client::DamageTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_bCreateDebris: 2036n, // bool m_bCreateDebris; |  0x7f4 | Schema_Builtin | Size: 0x1
	m_iszCustomEffectName: 2048n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszCustomSoundName: 2056n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bSuppressParticleImpulse: 2064n, // bool m_bSuppressParticleImpulse; |  0x810 | Schema_Builtin | Size: 0x1
	m_iClassIgnore: 2068n, // client::Class_T  | Schema_DeclaredEnum | Size: 0x4
	m_iClassIgnore2: 2072n, // client::Class_T  | Schema_DeclaredEnum | Size: 0x4
	m_iszEntityIgnoreName: 2080n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hEntityIgnore: 2088n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
