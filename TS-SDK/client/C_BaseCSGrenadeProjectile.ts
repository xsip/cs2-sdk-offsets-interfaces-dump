// generated - do not edit!

import {client_C_BaseGrenade} from './C_BaseGrenade';
// Class size: 0x1450
// BaseClass: : public CS2::client::C_BaseGrenade
export const client_C_BaseCSGrenadeProjectile  = {
	...client_C_BaseGrenade,
	m_vInitialPosition: 5048n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vInitialVelocity: 5060n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBounces: 5072n, // int32_t m_nBounces; |  0x13d0 | Schema_Builtin | Size: 0x4
	m_nExplodeEffectIndex: 5080n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_nExplodeEffectTickBegin: 5088n, // int32_t m_nExplodeEffectTickBegin; |  0x13e0 | Schema_Builtin | Size: 0x4
	m_vecExplodeEffectOrigin: 5092n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flSpawnTime: 5104n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	vecLastTrailLinePos: 5108n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	flNextTrailLineTime: 5120n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bExplodeEffectBegan: 5124n, // bool m_bExplodeEffectBegan; |  0x1404 | Schema_Builtin | Size: 0x1
	m_bCanCreateGrenadeTrail: 5125n, // bool m_bCanCreateGrenadeTrail; |  0x1405 | Schema_Builtin | Size: 0x1
	m_nSnapshotTrajectoryEffectIndex: 5128n, // client::ParticleIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_hSnapshotTrajectoryParticleSnapshot: 5136n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_arrTrajectoryTrailPoints: 5144n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_arrTrajectoryTrailPointCreationTimes: 5168n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_flTrajectoryTrailEffectCreationTime: 5192n, // float32 m_flTrajectoryTrailEffectCreationTime; |  0x1448 | Schema_Builtin | Size: 0x4
}
