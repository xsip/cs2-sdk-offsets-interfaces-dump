// generated - do not edit!

import {server_CBaseCSGrenadeProjectile} from './CBaseCSGrenadeProjectile';
// Class size: 0x2F40
// BaseClass: : public CS2::server::CBaseCSGrenadeProjectile
export const server_CSmokeGrenadeProjectile  = {
	...server_CBaseCSGrenadeProjectile,
	m_nSmokeEffectTickBegin: 3176n, // int32_t m_nSmokeEffectTickBegin; |  0xc68 | Schema_Builtin | Size: 0x4
	m_bDidSmokeEffect: 3180n, // bool m_bDidSmokeEffect; |  0xc6c | Schema_Builtin | Size: 0x1
	m_nRandomSeed: 3184n, // int32_t m_nRandomSeed; |  0xc70 | Schema_Builtin | Size: 0x4
	m_vSmokeColor: 3188n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vSmokeDetonationPos: 3200n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_VoxelFrameData: 3216n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_nVoxelFrameDataSize: 3240n, // int32_t m_nVoxelFrameDataSize; |  0xca8 | Schema_Builtin | Size: 0x4
	m_nVoxelUpdate: 3244n, // int32_t m_nVoxelUpdate; |  0xcac | Schema_Builtin | Size: 0x4
	m_flLastBounce: 3248n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fllastSimulationTime: 3252n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bExplodeFromInferno: 12088n, // bool m_bExplodeFromInferno; |  0x2f38 | Schema_Builtin | Size: 0x1
	m_bDidGroundScorch: 12089n, // bool m_bDidGroundScorch; |  0x2f39 | Schema_Builtin | Size: 0x1
}
