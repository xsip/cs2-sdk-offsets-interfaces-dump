// generated - do not edit!

import {client_C_BaseGrenade} from './C_BaseGrenade';
// Class size: 0x1438
// BaseClass: : public CS2::client::C_BaseGrenade
export const client_C_BaseCSGrenadeProjectile  = {
	...client_C_BaseGrenade,
	m_vInitialPosition: 5024n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vInitialVelocity: 5036n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBounces: 5048n, // int32_t m_nBounces; |  0x13b8 | Schema_Builtin | Size: 0x4
	m_nExplodeEffectIndex: 5056n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_nExplodeEffectTickBegin: 5064n, // int32_t m_nExplodeEffectTickBegin; |  0x13c8 | Schema_Builtin | Size: 0x4
	m_vecExplodeEffectOrigin: 5068n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flSpawnTime: 5080n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	vecLastTrailLinePos: 5084n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	flNextTrailLineTime: 5096n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bExplodeEffectBegan: 5100n, // bool m_bExplodeEffectBegan; |  0x13ec | Schema_Builtin | Size: 0x1
	m_bCanCreateGrenadeTrail: 5101n, // bool m_bCanCreateGrenadeTrail; |  0x13ed | Schema_Builtin | Size: 0x1
	m_nSnapshotTrajectoryEffectIndex: 5104n, // client::ParticleIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_hSnapshotTrajectoryParticleSnapshot: 5112n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_arrTrajectoryTrailPoints: 5120n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_arrTrajectoryTrailPointCreationTimes: 5144n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_flTrajectoryTrailEffectCreationTime: 5168n, // float32 m_flTrajectoryTrailEffectCreationTime; |  0x1430 | Schema_Builtin | Size: 0x4
}
