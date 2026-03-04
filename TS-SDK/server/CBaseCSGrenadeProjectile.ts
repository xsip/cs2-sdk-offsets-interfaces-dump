// generated - do not edit!

import {server_CBaseGrenade} from './CBaseGrenade';
// Class size: 0xBB0
// BaseClass: : public CS2::server::CBaseGrenade
export const server_CBaseCSGrenadeProjectile  = {
	...server_CBaseGrenade,
	m_vInitialPosition: 2880n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vInitialVelocity: 2892n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBounces: 2904n, // int32_t m_nBounces; |  0xb58 | Schema_Builtin | Size: 0x4
	m_nExplodeEffectIndex: 2912n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_nExplodeEffectTickBegin: 2920n, // int32_t m_nExplodeEffectTickBegin; |  0xb68 | Schema_Builtin | Size: 0x4
	m_vecExplodeEffectOrigin: 2924n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flSpawnTime: 2936n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_unOGSExtraFlags: 2940n, // uint8_t m_unOGSExtraFlags; |  0xb7c | Schema_Builtin | Size: 0x1
	m_bDetonationRecorded: 2941n, // bool m_bDetonationRecorded; |  0xb7d | Schema_Builtin | Size: 0x1
	m_nItemIndex: 2942n, // uint16_t m_nItemIndex; |  0xb7e | Schema_Builtin | Size: 0x2
	m_vecOriginalSpawnLocation: 2944n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLastBounceSoundTime: 2956n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecGrenadeSpin: 2960n, // GlobalTypes::RotationVector  | Schema_Atomic | Size: 0xc
	m_vecLastHitSurfaceNormal: 2972n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nTicksAtZeroVelocity: 2984n, // int32_t m_nTicksAtZeroVelocity; |  0xba8 | Schema_Builtin | Size: 0x4
	m_bHasEverHitEnemy: 2988n, // bool m_bHasEverHitEnemy; |  0xbac | Schema_Builtin | Size: 0x1
}
