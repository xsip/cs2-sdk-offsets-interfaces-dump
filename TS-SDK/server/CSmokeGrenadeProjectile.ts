// generated - do not edit!

import {server_CBaseCSGrenadeProjectile} from './CBaseCSGrenadeProjectile';
// Class size: 0x2EB0
// BaseClass: : public CS2::server::CBaseCSGrenadeProjectile
export const server_CSmokeGrenadeProjectile  = {
	...server_CBaseCSGrenadeProjectile,
	m_nSmokeEffectTickBegin: 3032n, // int32_t m_nSmokeEffectTickBegin; |  0xbd8 | Schema_Builtin | Size: 0x4
	m_bDidSmokeEffect: 3036n, // bool m_bDidSmokeEffect; |  0xbdc | Schema_Builtin | Size: 0x1
	m_nRandomSeed: 3040n, // int32_t m_nRandomSeed; |  0xbe0 | Schema_Builtin | Size: 0x4
	m_vSmokeColor: 3044n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vSmokeDetonationPos: 3056n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_VoxelFrameData: 3072n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_nVoxelFrameDataSize: 3096n, // int32_t m_nVoxelFrameDataSize; |  0xc18 | Schema_Builtin | Size: 0x4
	m_nVoxelUpdate: 3100n, // int32_t m_nVoxelUpdate; |  0xc1c | Schema_Builtin | Size: 0x4
	m_flLastBounce: 3104n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fllastSimulationTime: 3108n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bExplodeFromInferno: 11944n, // bool m_bExplodeFromInferno; |  0x2ea8 | Schema_Builtin | Size: 0x1
	m_bDidGroundScorch: 11945n, // bool m_bDidGroundScorch; |  0x2ea9 | Schema_Builtin | Size: 0x1
}
