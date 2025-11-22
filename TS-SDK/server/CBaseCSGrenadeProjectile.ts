// generated - do not edit!

import {server_CBaseGrenade} from './CBaseGrenade';
// Class size: 0xC40
// BaseClass: : public CS2::server::CBaseGrenade
export const server_CBaseCSGrenadeProjectile  = {
	...server_CBaseGrenade,
	m_vInitialPosition: 3024n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vInitialVelocity: 3036n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBounces: 3048n, // int32_t m_nBounces; |  0xbe8 | Schema_Builtin | Size: 0x4
	m_nExplodeEffectIndex: 3056n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_nExplodeEffectTickBegin: 3064n, // int32_t m_nExplodeEffectTickBegin; |  0xbf8 | Schema_Builtin | Size: 0x4
	m_vecExplodeEffectOrigin: 3068n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flSpawnTime: 3080n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_unOGSExtraFlags: 3084n, // uint8_t m_unOGSExtraFlags; |  0xc0c | Schema_Builtin | Size: 0x1
	m_bDetonationRecorded: 3085n, // bool m_bDetonationRecorded; |  0xc0d | Schema_Builtin | Size: 0x1
	m_nItemIndex: 3086n, // uint16_t m_nItemIndex; |  0xc0e | Schema_Builtin | Size: 0x2
	m_vecOriginalSpawnLocation: 3088n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLastBounceSoundTime: 3100n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecGrenadeSpin: 3104n, // GlobalTypes::RotationVector  | Schema_Atomic | Size: 0xc
	m_vecLastHitSurfaceNormal: 3116n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nTicksAtZeroVelocity: 3128n, // int32_t m_nTicksAtZeroVelocity; |  0xc38 | Schema_Builtin | Size: 0x4
	m_bHasEverHitEnemy: 3132n, // bool m_bHasEverHitEnemy; |  0xc3c | Schema_Builtin | Size: 0x1
}
