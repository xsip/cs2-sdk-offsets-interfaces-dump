// generated - do not edit!

import {client_C_BaseCSGrenadeProjectile} from './C_BaseCSGrenadeProjectile';
// Class size: 0x15F0
// BaseClass: : public CS2::client::C_BaseCSGrenadeProjectile
export const client_C_SmokeGrenadeProjectile  = {
	...client_C_BaseCSGrenadeProjectile,
	m_nSmokeEffectTickBegin: 5200n, // int32_t m_nSmokeEffectTickBegin; |  0x1450 | Schema_Builtin | Size: 0x4
	m_bDidSmokeEffect: 5204n, // bool m_bDidSmokeEffect; |  0x1454 | Schema_Builtin | Size: 0x1
	m_nRandomSeed: 5208n, // int32_t m_nRandomSeed; |  0x1458 | Schema_Builtin | Size: 0x4
	m_vSmokeColor: 5212n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vSmokeDetonationPos: 5224n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_VoxelFrameData: 5240n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_nVoxelFrameDataSize: 5264n, // int32_t m_nVoxelFrameDataSize; |  0x1490 | Schema_Builtin | Size: 0x4
	m_nVoxelUpdate: 5268n, // int32_t m_nVoxelUpdate; |  0x1494 | Schema_Builtin | Size: 0x4
	m_bSmokeVolumeDataReceived: 5272n, // bool m_bSmokeVolumeDataReceived; |  0x1498 | Schema_Builtin | Size: 0x1
	m_bSmokeEffectSpawned: 5273n, // bool m_bSmokeEffectSpawned; |  0x1499 | Schema_Builtin | Size: 0x1
}
